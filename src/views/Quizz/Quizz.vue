<template lang="pug">
  v-stepper(
    v-model="currentQuestion"
    v-if="quizz.questions"
  )
    v-stepper-header
      template(v-for="(step, index) in steps")
        v-stepper-step(
          :step="step"
          :key="'step' + index"
        )
    v-stepper-items
      v-stepper-content(
        v-for="(step, index) in steps"
        :key="'content' + index"
        :step="step"
      )
        span {{ `Question ${index + 1} : ${quizz.questions[index].title}` }}
        img(:src="quizz.questions[index].media_link")
        div.assertations
          assertation(
            v-for="(assertation, index) in quizz.questions[index].assertations" 
            :key="'assertation' + index" 
            :assertation="assertation"
            v-model="activeAssertation"
            :position="index + 1"
            :isResponseValidated="isResponseValidated"
            :goodAnswerIndex="goodAnswerIndex"
          )
    div(style="height: 100px")
      v-btn(v-if="activeAssertation && !isResponseValidated" color="primary" @click="analyseAnswer()") Valider
      v-btn(v-else-if="isResponseValidated" color="primary" @click="nextQuestion()") Question suivante
</template>

<script>
import Assertation from "./components/Assertation.vue"

export default {
  name: "Quizz",
  components: {
    Assertation
  },
  data() {
    return {
      steps: 5,
      currentQuestion: 1,
      activeAssertation: 0,
      quizz: {},
      isResponseValidated: false
    }
  },
  computed: {
    goodAnswerIndex() {
      return (
        this.quizz.questions[this.currentQuestion - 1].assertations.findIndex(
          assertation => assertation === this.quizz.questions[this.currentQuestion - 1].answer
        ) + 1
      )
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < this.steps) {
        this.currentQuestion++
        this.isResponseValidated = false
        this.activeAssertation = 0
      }
    },
    async getArticleQuizz() {
      try {
        const quizz = await this.$http.get("/quizz/37")
        //- TODO Get only one quizz here
        this.quizz = quizz.data
        this.steps = quizz.data.questions.length
      } catch (error) {
        console.error(error)
      }
    },
    analyseAnswer() {
      const isGoodAnswer =
        this.quizz.questions[this.currentQuestion - 1].assertations[this.activeAssertation - 1] ===
        this.quizz.questions[this.currentQuestion - 1].answer
      console.warn(isGoodAnswer)
      this.isResponseValidated = true
    }
  },
  created() {
    this.getArticleQuizz()
  }
}
</script>

<style lang="scss">
.v-stepper {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: none;
  height: calc(100vh - 48px);
  margin: 0;

  .v-stepper__header {
    width: 80%;
    border: none;
    box-shadow: none;

    .v-stepper__step {
      width: 15%;

      .v-stepper__step__step {
        width: 100%;
      }
    }
  }

  .v-stepper__items {
    width: 80%;
    height: 60%;

    .v-stepper__content {
      height: 100%;

      .v-stepper__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
      }
    }
  }

  .assertations {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
}
</style>

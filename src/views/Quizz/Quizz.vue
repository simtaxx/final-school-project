<template lang="pug">
  v-stepper(
    v-model="currentQuestion"
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
        img(:src="quizz")
        div.assertations
          assertation(
            v-for="(assertation, index) in quizz.questions[index].assertations" 
            :key="'assertation' + index" 
            :assertation="assertation"
            v-model="activeAssertation"
            :position="index + 1"
          )
    v-btn(color="primary" @click="nextQuestion()") Valider
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
      activeAssertation: 2,
      quizz: {}
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < this.steps) {
        this.currentQuestion++
      }
    },
    async getArticleQuizz() {
      const quizz = await this.$http.get("http://285c00afff67.ngrok.io/api/quizzs", {
        headers: { Accept: "application/json" }
      })
      this.quizz = quizz.data[0]
      this.steps = quizz.data[0].questions.length
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
  }

  .assertations {
    display: flex;
    justify-content: space-around;
  }
}
</style>

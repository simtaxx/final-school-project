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
        div.question
          span {{ `Question ${index + 1} : ` }}
          span.question__body {{ `${quizz.questions[index].title}` }}
        img(:src="quizz.questions[index].media_link")
        div.assertations
          assertation(
            v-for="(assertation, index) in quizz.questions[index].assertations" 
            :key="'assertation' + index" 
            :assertation="assertation"
            v-model="activeAssertation"
            :position="index + 1"
            :isResponseValidated="isResponseValidated"
            :goodAnswerIndex="goodAnswerPosition"
          )
    div(style="height: 100px")
      v-btn(v-if="activeAssertation && !isResponseValidated" color="primary" @click="analyseAnswer()") Valider
      v-btn(
        v-else-if="isResponseValidated" 
        color="primary" 
        @click="nextQuestion()"
      ) {{ currentQuestion < steps ? 'Question suivante' : 'Terminer' }}
    finished-quizz-popup(
      :show="isQuizzFinished"
      :isQuizzWon="score === steps"
      @restartQuizz="restartQuizz()"
    )
</template>

<script>
import Assertation from "./components/Assertation.vue"
import FinishedQuizzPopup from "./components/FinishedQuizzPopup.vue"

export default {
  name: "Quizz",
  components: {
    Assertation,
    FinishedQuizzPopup
  },
  data() {
    return {
      steps: 0,
      currentQuestion: 1,
      activeAssertation: 0,
      quizz: {},
      isResponseValidated: false,
      score: 0,
      isQuizzFinished: false
    }
  },
  computed: {
    goodAnswerPosition() {
      return Number(this.quizz.questions[this.currentQuestion - 1].answer) + 1
    },
    readedArticles() {
      const storedReadedArticles = localStorage["readedArticles"]
      return storedReadedArticles ? JSON.parse(storedReadedArticles) : []
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < this.steps) {
        this.currentQuestion++
        this.isResponseValidated = false
        this.activeAssertation = 0
      } else {
        this.isQuizzFinished = true
        if (this.score === this.steps) {
          //- TODO change the 15 for the article id
          const readedArticles = [...this.readedArticles, "15"]
          localStorage.setItem("readedArticles", JSON.stringify(readedArticles))
        }
      }
    },
    async getArticleQuizz() {
      try {
        const quizz = await this.$http.get("/quizz/1")
        this.quizz = quizz.data
        this.steps = quizz.data.questions.length
      } catch (error) {
        console.log(error)
      }
    },
    analyseAnswer() {
      if (this.activeAssertation === this.goodAnswerPosition) {
        this.score++
      }
      this.isResponseValidated = true
    },
    restartQuizz() {
      this.isQuizzFinished = false
      this.currentQuestion = 1
      this.activeAssertation = 0
      this.score = 0
      this.isResponseValidated = false
    }
  },
  created() {
    this.getArticleQuizz()
  }
}
</script>

<style lang="scss">
@import "@/scss/styles.scss";

.v-stepper {
  font-family: "Gotham", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  box-shadow: none;
  height: calc(100vh - 48px);
  margin: 0;

  @include small-screen {
    height: calc(100vh - 104px);
  }

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
    height: 80%;

    .v-stepper__content {
      height: 100%;

      .question {
        text-align: center;

        .question__body {
          font-size: 24px;
        }
      }

      .v-stepper__wrapper {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;

        @include medium-screen {
          img {
            max-height: 30%;
          }
          .assertations {
            max-height: 45%;
          }
        }
      }
    }
  }

  .assertations {
    width: 100%;
    display: flex;
    justify-content: center;

    flex-wrap: wrap;
  }
}
</style>

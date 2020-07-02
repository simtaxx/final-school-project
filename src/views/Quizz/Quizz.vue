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
        v-card.mb-12(
          color="grey lighten-1"
          height="200px"
        )
      v-btn(color="primary" @click="nextQuestion()") Valider
</template>

<script>
export default {
  name: "Quizz",
  data() {
    return {
      steps: 5,
      currentQuestion: 1
    }
  },
  methods: {
    nextQuestion() {
      if (this.currentQuestion < this.steps) {
        this.currentQuestion++
      }
    }
  }
}
</script>

<style lang="scss" module>
.quizz {
}
</style>

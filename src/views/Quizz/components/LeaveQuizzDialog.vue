<template lang="pug">
  v-dialog(
    :value="showDialog"
    :max-width="500"
    persistent
  )
    v-card.card
      span.card__title Es-tu sûr de vouloir quitter ?
      span Ta progression ne sera pas enregistré
      v-btn(color="primary" @click="emitLeaveDecision(false)") CONTINUER LE QUIZZ
      v-btn(color="primary" outlined @click="emitLeaveDecision(true)") QUITTER
</template>

<script>
export default {
  name: "LeaveQuizzDialog",
  props: {
    showDialog: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    emitLeaveDecision(decision) {
      this.$emit("Leave:route", decision)
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  font-family: "Gotham", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;
  > * {
    margin: 1rem;
  }

  .card__title {
    font-size: 20px;
    font-weight: bold;
  }
}
</style>

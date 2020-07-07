<template lang="pug">
  v-dialog(
    :value="show"
    max-width="290"
    persistent
  )
    v-card(v-if="isQuizzWon")
      v-card-text
        | Gagné
      v-btn(
        color="primary"
        @click="$router.push({name: 'Homepage'})"
      )
        | Continuer
    v-card(v-else)
      v-card-text
        | Perdu
      v-btn(
          color="primary"
          @click="$router.push({name: 'Homepage'})"
        )
          | Continuer
      v-btn(
          color="primary"
          @click="$emit('restartQuizz')"
        )
          | Rejouer

</template>

<script>
export default {
  name: "FinishedQuizzPopup",
  props: {
    show: {
      type: Boolean,
      required: true
    },
    isQuizzWon: {
      type: Boolean,
      required: true
    }
  },
  methods: {}
}
</script>

<style lang="scss" module></style>

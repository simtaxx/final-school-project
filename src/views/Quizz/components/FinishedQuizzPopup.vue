<template lang="pug">
  v-dialog(
    :value="show"
    :max-width="popupSize"
    persistent
  )
    v-card(v-if="isQuizzWon" :class="[$style['card'],$style['card--win']]")
      img(src="@/assets/images/quizz_win.png")  
      span Tu as désormais accès à la section 
        span(:class="$style.highlight") A Retenir 
        | !
      v-btn(
        color="primary"
        @click="$router.push({name: 'Homepage'})"
      )
        | Continuer
    v-card(v-else :class="[$style['card'],$style['card--lose']]")
      img(src="@/assets/images/quizz_lose.png")
      div(:class="$style.card__buttons")
        v-btn(
            color="primary"
            @click="$router.push({name: 'Homepage'})"
          )
            | Continuer
        v-btn(
            color="primary"
            @click="$emit('restartQuizz')"
            outlined
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
  methods: {},
  computed: {
    popupSize() {
      return window.innerWidth * 0.8
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/styles.scss";

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--v-gray-base);

  > * {
    margin: 2rem;
  }

  .card__buttons {
    display: flex;
    flex-direction: column;

    > * {
      margin: 0.5rem 0;
    }
  }
}

.card--win {
  background-image: url("../../../assets/images/quizz_win_confetti.png");
  background-size: cover;

  .highlight {
    color: $primary;
  }
}
</style>

<template lang="pug">
  section(:class="$style.remember")
    div(:class="$style.bulb")
      img(src="@/assets/icons/bulb.png")
    div(:class="$style.box")
      template(v-if="isQuizzDone")
        ul
          li(
            v-for="(item, index) in listToRemember" 
            :key="'item' + index"
          ) {{ item }}
      template(v-else)
        span A retenir (accédez à cette section une fois le quizz validé)
    
      
</template>

<script>
export default {
  name: "Remember",
  props: {
    listToRemember: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    isQuizzDone() {
      return true
    }
  }
}
</script>

<style lang="scss" module>
@import "~vuetify/src/styles/styles.sass";

.remember {
  width: 100%;
  display: flex;
  justify-content: space-between;

  .bulb {
    margin: 0.2rem 0.5rem;
  }

  .box {
    width: 95%;
    background: var(--v-nav-base);
    padding: 15px;
    position: relative;
    border-radius: 8px;

    &:before {
      content: "";
      width: 0px;
      height: 0px;
      position: absolute;
      border-top: 10px solid transparent;
      border-right: 10px solid var(--v-nav-base);
      border-bottom: 10px solid transparent;
      left: -10px;
      top: 15px;
    }
  }
}
</style>

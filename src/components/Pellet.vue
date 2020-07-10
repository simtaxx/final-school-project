<template lang="pug">
  div.pellet(:class="{ 'active-border' : activeBorder }")
    div.pellet__inner
      img(:src="imagePath")
</template>

<script>
export default {
  name: "Pellet",
  props: {
    imageName: {
      type: String,
      required: true
    },
    activeBorder: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imagePath() {
      return require(`@/assets/images/${this.imageName}.png`)
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/core/colors.scss";
@import "@/scss/styles.scss";

.pellet {
  background-color: var(--v-background-base);
  width: 80px;
  height: 80px;
  border: solid 5px var(--v-gray-base);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  // @include small-screen {
  //   width: 80px;
  //   height: 60px;
  // }

  .pellet__inner {
    background-color: var(--v-gray-base);
    width: 80%;
    height: 80%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    // @include medium-screen {
    //   width: 40px;
    //   height: 40px;
    // }

    img {
      width: 70%;
    }
  }
}

.active-border {
  border-color: $primary;
}
</style>

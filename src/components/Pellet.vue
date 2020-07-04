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
      return require(`@/assets/icons/${this.imageName}.png`)
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/core/colors.scss";

.pellet {
  background-color: var(--v-background-base);
  width: 80px;
  height: 80px;
  //- TODO change the color with sub color set on vuetify overwrite
  border: solid 5px gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  .pellet__inner {
    background-color: gray;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      width: 75%;
    }
  }
}

.active-border {
  //- TODO change this color with vuetify overwritten colors
  border-color: blue;
}
</style>

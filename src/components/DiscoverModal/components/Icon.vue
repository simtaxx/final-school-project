<template lang="pug">
  div(:class="$style.icon")
    img(:src="imagePath")
</template>

<script>
export default {
  name: "Icon",
  props: {
    imageName: { type: String, required: true }
  },
  computed: {
    imagePath() {
      return require(`@/assets/images/${this.imageName}.png`)
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.icon {
  background-color: var(--v-gray-base);
  width: 50px;
  height: 50px;
  border-radius: 50% !important;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 70%;
  }
}
</style>

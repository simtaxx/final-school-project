<template lang="pug">
  div
    h2(v-html="content.title")
    img(:src="content.gif" alt="illustation")
    h3(v-html="content.firstSubtitle")
    p(v-html="content.firstText")
    h3(v-html="content.secondSubtitle")
    p(v-html="content.secondText")
</template>

<script>
export default {
  name: "Introduction",
  props: {
    content: { type: Object, required: true }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";

h2 {
  text-align: center;
  font-family: "Gotham", sans-serif;
  font-weight: bold;
  font-size: 34px;
  margin-bottom: 40px;

  span {
    color: $primary;
  }

  h3 {
    font-family: "Gotham", sans-serif;
    font-size: 20px;
    margin-bottom: 8px;
    color: $black;
  }

  p {
    font-family: "OpenSans", sans-serif;
    font-size: 14px;
    margin-bottom: 24px;

    span {
      color: $primary;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    width: 360px;
    margin-bottom: 40px;
  }
}
</style>

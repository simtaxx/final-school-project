<template lang="pug">
  v-app
    router-view(:class="$style.app")
    theme-toggler
    Navigation
</template>

<script>
import ThemeToggler from "@/components/ThemeToggler.vue"
import Navigation from "@/components/Navigation/Navigation.vue"

export default {
  name: "App",
  components: {
    ThemeToggler,
    Navigation
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.app {
  padding-left: 290px;
}
</style>

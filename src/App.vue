<template lang="pug">
  v-app
    router-view(v-if="!isFirstTime" :class="$style.app")
    theme-toggler
    Introduction(v-if="isFirstTime" @closeIntroduction="isFirstTime = false")
    Navigation(v-if="!isFirstTime && $vuetify.breakpoint.smAndUp")
    MobileNavigation(v-if="!isFirstTime && $vuetify.breakpoint.xs")
</template>

<script>
import ThemeToggler from "@/components/ThemeToggler.vue"
import Introduction from "@/components/Introduction/Introduction.vue"
import Navigation from "@/components/Navigation/Navigation.vue"
import MobileNavigation from "@/components/MobileNavigation/MobileNavigation.vue"

export default {
  name: "App",
  components: {
    ThemeToggler,
    Introduction,
    Navigation,
    MobileNavigation
  },
  data() {
    return {
      isFirstTime: true
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem("firstTime")) === null) {
      return (this.isFirstTime = true)
    }
    this.isFirstTime = false
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.app {
  padding-left: 290px;
}
</style>

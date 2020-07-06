<template lang="pug">
  v-app
    v-row(no-gutters)
      v-col(:cols="$vuetify.breakpoint.xs ? 0 : 3" v-if="$vuetify.breakpoint.smAndUp")
        Navigation(v-if="!isFirstTime")
      v-col(:cols="$vuetify.breakpoint.xs ? 12 : 9")
        router-view(v-if="!isFirstTime" :class="$style.app")
    theme-toggler
    Introduction(v-if="isFirstTime" @closeIntroduction="isFirstTime = false")
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
    this.isFirstTime = JSON.parse(localStorage.getItem("firstTime")) === null
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.app {
  margin-bottom: 70px;
}
@media (max-width: 600px) {
  .app {
    padding: 0 15px 0;
  }
}
</style>

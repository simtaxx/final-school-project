<template lang="pug">
  v-app(:style="{background: $vuetify.theme.themes[isDark].background}")
    router-view(v-if="!isFirstTime" :class="$style.app")
    theme-toggler
    Introduction(v-if="isFirstTime" @closeIntroduction="isFirstTime = false")
    Navigation(v-if="!isFirstTime")
</template>

<script>
import ThemeToggler from "@/components/ThemeToggler.vue"
import Introduction from "@/components/Introduction.vue"
import Navigation from "@/components/Navigation/Navigation.vue"

export default {
  name: "App",
  components: {
    ThemeToggler,
    Introduction,
    Navigation
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
  },
  computed: {
    isDark() {
      return this.$vuetify.theme.dark ? "dark" : "light"
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.app {
  padding-left: 290px;
}
</style>

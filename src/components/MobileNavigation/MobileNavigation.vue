<template lang="pug">
  div
    v-bottom-navigation(fixed shift :class="$style.nav")
      v-btn(:class="{[$style.isBlue]: challenges}" to="/challenge" value="challenges" @click="activeIt('challenges')")
        span Challenges
        v-icon fa-gamepad
      v-btn(:class="{[$style.isBlue]: discover}" ref="button" value="decouvrir" @click="activeIt('isActive')")
        span Découvrir
        v-icon fa-book-open
      v-btn(:class="{[$style.isBlue]: profil}" to="/profil" value="profil" @click="activeIt('profil')")
        span Profil
        v-icon fa-user
    div(:class="isOpen")
      Icon(v-for="content in navContent" :key="content.categoryName" :content="content")
    
</template>

<script>
import categories from "@/utils/articlesNavigation.json"
import Icon from "@/components/MobileNavigation/component/Icon.vue"
export default {
  name: "MobileNavigation",
  components: {
    Icon
  },
  data() {
    return {
      navContent: categories,
      discover: false,
      challenges: false,
      profil: false
    }
  },
  methods: {
    activeIt(value) {
      if (value === "challenges") {
        this.challenges = true
        this.discover = false
        this.profil = false
      } else this.challenges = false
      if (value === "profil") {
        this.profil = true
        this.challenges = false
        this.discover = false
      } else this.profil = false
      if (value === "isActive") {
        if (this.discover) {
          this.discover = false
          this.profil = false
          this.challenges = false
        } else this.discover = true
      } else this.discover = false
    }
  },
  computed: {
    isOpen() {
      if (this.discover) {
        return this.$style.isOpen
      }
      return this.$style.navLink
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.nav {
  justify-content: space-around !important;
  z-index: 999 !important;
}
.isOpen {
  display: flex;
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 998;
  transition: 0.2s;
}
.navLink {
  display: flex;
  position: fixed;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 998;
  transition: 0.2s;
}
.isBlue {
  color: $primary !important;
  font-family: "Gotham", sans-serif;
  font-size: 14px;
}
</style>

<template lang="pug">
  div
    v-bottom-navigation(fixed shift :class="$style.navContainer")
      Button(v-for="button in buttons" :key="button.name" :button="button" @activeIt="activeIt")
    div(:class="isOpen")
      Icon(v-for="content in navContent" :key="content.categoryName" :content="content")
    
</template>

<script>
import categories from "@/utils/articlesNavigation.json"
import Icon from "@/components/MobileNavigation/components/Icon.vue"
import Button from "@/components/MobileNavigation/components/Button.vue"
export default {
  name: "MobileNavigation",
  components: {
    Icon,
    Button
  },
  data() {
    return {
      navContent: categories,
      buttons: [
        {
          name: "challenges",
          icon: "fa-gamepad",
          path: "/challenges"
        },
        {
          name: "discover",
          icon: "fa-book-open",
          path: "/discover"
        },
        {
          name: "profil",
          icon: "fa-user",
          path: "/profil"
        }
      ],
      discover: false,
      challenges: false,
      profil: false
    }
  },
  methods: {
    activeIt(value) {
      if (this[value]) {
        this[value] = false
      } else {
        this.challenges = false
        this.discover = false
        this.profil = false
        this[value] = true
      }
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
.navContainer {
  justify-content: space-around !important;
  z-index: 999 !important;
  background-color: var(--v-nav-base) !important;
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

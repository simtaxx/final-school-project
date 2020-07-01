<template lang="pug">
  v-navigation-drawer(fixed :class="$style.nav" :style="{background: $vuetify.theme.themes[isDark].nav}" floating)
    v-list( dense nav class="py-0" :class="$style.navContainer")
      v-list-item
        v-list-item-content(:class="$style.profile")
          h3 PROFIL
          div
            v-btn(medium color="primary" to="/sign-in" :class="$style.signIn") CONNEXION
      v-list-item
        v-list-item-content(:class="$style.discover")
          h3 DÉCOUVRIR
          Link(v-for="content in navContent" :key="content.categoryName" :content="content" :style="{color: $vuetify.theme.themes[isDark].text}")
      v-list-item
        v-list-item-content(:class="$style.challenge")
          h3 TES CHALLENGES
          p #[router-link(to="/sign-in" :class="$style.signUp" ) Connecte toi] ou #[router-link(to="/sign-up" :class="$style.signUp") créer un compte] pour pouvoir jouer !
</template>

<script>
import categories from "@/utils/articlesNavigation.json"
import Link from "@/components/Navigation/atoms/Link.vue"
export default {
  name: "Navigation",
  components: {
    Link
  },
  data() {
    return {
      navContent: categories
    }
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
.nav {
  width: 290px !important;

  .navContainer {
    margin-left: 40px;
    padding: 0 !important;
  }
}

h3 {
  font-family: "Gotham", sans-serif;
  font-size: 12px;
  color: #9498a0;
  margin-bottom: 16px !important;
}

.profile {
  margin: 70px 0 58px;
  padding: 0 !important;

  .signIn {
    font-size: 12px;
    font-family: "Gotham", sans-serif;
    padding: 8px 16px !important;
    background-color: $primary;
    width: 111px !important;
    border-radius: 5px;
    color: #faf9f9 !important;
    margin-bottom: 8px;
  }
}

.discover {
  margin-bottom: 32px;
  overflow: visible !important;
  padding: 0 !important;
  width: 70%;

  a {
    display: flex;
    align-items: center;
    margin: 0 0 15px -20px !important;
    width: max-content;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    font-family: "Gotham", sans-serif;

    &:hover {
      background-color: $grey;
    }

    p {
      margin: 0;
    }
  }
}

.challenge {
  p {
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    font-weight: 600;

    a {
      color: $primary;
      text-decoration: underline;
    }
  }
}
</style>

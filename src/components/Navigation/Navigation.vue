<template lang="pug">
  nav
    div(:class="$style.navContainer")
      div(:class="$style.profile")
        h3 PROFIL
        router-link(to="/sign-in" :class="$style.signIn") CONNEXION
      div(:class="$style.discover")
        h3 DÉCOUVRIR
        Link(v-for="content in navContent" :key="content.categoryName" :content="content")
      div(:class="$style.challenge")
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
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";

nav {
  position: fixed;
  width: 290px;
  height: 100%;
  background-color: $greyLight;

  .navContainer {
    margin-left: 50px;
  }
}

h3 {
  font-family: "Gotham", sans-serif;
  font-size: 12px;
  color: #9498a0;
  margin-bottom: 16px;
}

.profile {
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  .signIn {
    font-size: 12px;
    font-family: "Gotham", sans-serif;
    padding: 8px 16px;
    background-color: $primary;
    width: 111px;
    border-radius: 5px;
    color: #faf9f9 !important;
    margin-bottom: 8px;
  }
}

.discover {
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    margin: 0 0 15px -20px;
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
      color: $primary !important;
      text-decoration: underline;
    }
  }
}
</style>

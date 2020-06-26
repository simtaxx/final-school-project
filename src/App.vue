<template lang="pug">
  v-app
    nav
      div(:class="$style.navContainer")
        div(:class="$style.profile")
          h3 PROFIL
          router-link(to="/sign-in" :class="$style.signIn") CONNEXION
        div(:class="$style.discover")
          h3 DÉCOUVRIR
          router-link(to="/sign-in" :exact-active-class="$style.active")
            img(src="@/assets/icons/institution.svg") 
            p L'institution
          router-link(to="/" :exact-active-class="$style.active") 
            img(src="@/assets/icons/citoyennete.svg") 
            p La citoyenneté
          router-link(to="/" :exact-active-class="$style.active") 
            img(src="@/assets/icons/justice.svg") 
            p La justice
          router-link(to="/" :exact-active-class="$style.active") 
            img(src="@/assets/icons/citoyennete.svg") 
            p La citoyenneté
          router-link(to="/" :exact-active-class="$style.active") 
            img(src="@/assets/icons/citoyennete.svg") 
            p La citoyenneté
          router-link(to="/" :exact-active-class="$style.active") 
            img(src="@/assets/icons/citoyennete.svg") 
            p La citoyenneté
        div(:class="$style.challenge")
          h3 TES CHALLENGES
          p #[router-link(to="/sign-in" :class="$style.signUp" ) Connecte toi] ou #[router-link(to="/sign-up" :class="$style.signUp") créer un compte] pour pouvoir jouer !
    router-view(:class="$style.app")
    theme-toggler
</template>

<script>
import ThemeToggler from "@/components/ThemeToggler.vue"

export default {
  name: "App",
  components: {
    ThemeToggler
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.app {
  padding-left: 290px;
}

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

    img {
      margin-right: 16px;
      width: 24px;
      height: auto;
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

.active {
  color: $primary !important;
  background-color: rgba($primary, 0.1);

  img {
    fill: currentColor;
  }
}
</style>

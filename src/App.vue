<template lang="pug">
  v-app(:class="$style.app")
    nav
      div(:class="$style.profile")
        h3 PROFIL
        router-link(to="/sign-in" :class="$style.signUp") CONNEXION
        router-link(to="/sign-up" :class="$style.signIn") INSCRIPTION
      div(:class="$style.discover")
        h3 DÉCOUVRIR
        router-link(to="/")
          img(src="@/assets/icons/institution.svg") 
          p L'institution
        router-link(to="/") 
          img(src="@/assets/icons/citoyennete.svg") 
          p La citoyenneté
        router-link(to="/") 
          img(src="@/assets/icons/justice.svg") 
          p La justice
        router-link(to="/") 
          img(src="@/assets/icons/citoyennete.svg") 
          p La citoyenneté
        router-link(to="/") 
          img(src="@/assets/icons/citoyennete.svg") 
          p La citoyenneté
        router-link(to="/") 
          img(src="@/assets/icons/citoyennete.svg") 
          p La citoyenneté
      div(:class="$style.challenge")
    router-view
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss" module>
.app {
  padding: 0 50px;
}

nav {
  padding-top: 70px;
}

h3 {
  font-family: "GothamMedium", sans-serif;
  font-size: 12px;
  color: #9498a0;
  margin-bottom: 16px;
}

.profile {
  display: flex;
  flex-direction: column;

  .signUp {
    font-size: 12px;
    font-family: "GothamMedium", sans-serif;
    padding: 8px 16px;
    background-color: #09bded;
    width: 111px;
    border-radius: 5px;
    color: #faf9f9 !important;
    margin-bottom: 8px;
  }

  .signIn {
    font-size: 12px;
    font-family: "GothamMedium", sans-serif;
    padding: 8px 16px;
    border: 1px solid #09bded;
    width: 111px;
    border-radius: 5px;
    color: #09bded !important;
  }
}

.discover {
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: flex-start;
    margin-bottom: 15px;

    img {
      margin-right: 16px;
    }
  }
}
</style>

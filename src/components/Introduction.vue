<template lang="pug">
  div(:class="$style.introduction")
    div(v-if="firstPage")
      h2 Salut ! Bienvenue sur 
        span Kiwitas
      img(src="https://media.giphy.com/media/xT9IgG50Fb7Mi0prBC/giphy.gif" alt="illustation")
      h3 Qu’est ce que Kiwitas ?
      p Kiwitas est une plateforme éducative qui à travers des articles et des quizz, va te permettre d’en savoir plus sur tes devoirs en tant que citoyens français.
      h3 Pourquoi ?
      p Ne panique pas, ton apprentissage sur cette plateforme sera récompensé ! Dès que tu auras validé tous les articles et répondu à tous les quizz, #[span tu pourras récupérer ta certification]. Cette dernière pourra être fièrement montrée sur ton Curriculum Vitae aussi appelé CV.
      div(:class="$style.button")
        v-btn(medium color="primary" @click="firstPage = false") SUIVANT
    div(v-if="!firstPage")
      h2 Comment ça fonctionne ?
      img(src="https://media.giphy.com/media/CiYImHHBivpAs/giphy.gif" alt="illustration")
      h3 Les articles et vidéos
      p Lorsque que tu vas entrer dans la plateforme, les articles et vidéos sont catégoriser dans des chapitres, tu peux les lires dans l’odre que tu souhaites MAIS (et oui y a un mais) #[span on te conseille de les lire dans l’ordre !]
      h3 Les quizz
      p Il y a des quizz à chaque fin d’article pour que tu puisses valider tes connaissances ! Il y a aussi des quizz que tu peux faire avec tes amis pour encore plus de fun !
      div(:class="$style.buttons")
        div(:class="$style.buttonPrevious")
          v-btn(medium outlined color="primary" @click="firstPage = true") PRÉCÉDENT
        div(:class="$style.button")
          v-btn(medium color="primary" @click="setFirstTime") COMMENCER
</template>

<script>
export default {
  name: "Introduction",
  data() {
    return {
      firstPage: true,
      firstTime: false
    }
  },
  methods: {
    setFirstTime() {
      localStorage.setItem("firstTime", this.firstTime)
      this.$emit("closeIntroduction")
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.introduction {
  padding: 60px 380px 0;

  h2 {
    text-align: center;
    font-family: "Gotham", sans-serif;
    font-weight: bold;
    font-size: 34px;
    margin-bottom: 40px;

    span {
      color: $primary;
    }
  }

  h3 {
    font-family: "Gotham", sans-serif;
    font-size: 20px;
    margin-bottom: 8px;
    color: $black;
  }

  p {
    font-family: "OpenSans", sans-serif;
    font-size: 14px;
    margin-bottom: 24px;

    span {
      color: $primary;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    width: 360px;
    margin-bottom: 40px;
  }

  .button {
    text-align: center;
  }

  .buttonPrevious {
    margin-right: 24px;
  }

  .buttons {
    display: flex;
    justify-content: center;
  }
}
</style>

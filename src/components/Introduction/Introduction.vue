<template lang="pug">
  div(:class="$style.introduction")
    div(v-if="firstPage")
      Template(:content="textContent[0]")
      div(:class="$style.button")
        v-btn(medium color="primary" @click="firstPage = false") SUIVANT
    div(v-if="!firstPage")
      Template(:content="textContent[1]")
      div(:class="$style.buttons")
        div(:class="$style.buttonPrevious")
          v-btn(medium outlined color="primary" @click="firstPage = true") PRÉCÉDENT
        div(:class="$style.button")
          v-btn(medium color="primary" @click="setFirstTime") COMMENCER
</template>

<script>
import Template from "@/components/Introduction/atoms/Template.vue"
import textContent from "@/components/Introduction/utils/textContent.json"
export default {
  name: "Introduction",
  components: {
    Template
  },
  data() {
    return {
      textContent: textContent,
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
  padding: 60px 380px 30px;

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

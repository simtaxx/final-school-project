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
import Template from "@/components/Introduction/component/Template.vue"
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
  padding: 0 28% 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

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
@media (max-width: 900px) {
  .introduction {
    padding: 60px 150px 30px;
  }
}
@media (max-width: 600px) {
  .introduction {
    padding: 60px 15px 30px;
  }
}
</style>

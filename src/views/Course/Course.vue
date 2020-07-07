<template lang="pug">
  div(:class="$style.course")
    h1 {{ course.title }}
    img(:class="$style['main-image']" :src="course.media_link")
    section(:class="$style.contentContainer")
      v-runtime-template(:template='course.content' :class="$style.content")
      remember(:listToRemember="course.to_remember")
      v-btn(
        :class="$style.quizzBtn" color="primary" 
        depressed
        @click="$router.push({name:'Quizz'})"
      ) Faire le quizz
</template>

<script>
import Tweet from "./components/Tweet.vue"
import Remember from "./components/Remember.vue"

import VRuntimeTemplate from "v-runtime-template"

export default {
  name: "Course",
  components: {
    Tweet,
    Remember,
    VRuntimeTemplate
  },
  data() {
    return {
      course: {
        toRemember: []
      }
    }
  },
  computed: {
    currentArticelId() {
      return this.$route.params.id
    }
  },
  methods: {
    async getArticle() {
      const article = await this.$http.get(`articles/42`)
      this.course = article.data
    }
  },
  created() {
    this.getArticle()
  }
}
</script>

<style lang="scss" module>
.course {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 1rem 0;
  }

  .main-image {
    width: 80%;
    height: 100px;
    object-fit: cover;
    object-position: left top;
    border-radius: 6px;
  }

  .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      margin: 1rem 0;
    }
  }

  .quizzBtn {
    display: block;
    margin: 0 auto 3rem auto;
  }
}
</style>

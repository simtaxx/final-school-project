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
        @click="handleQuizzBtn"
      ) Faire le quizz
      v-dialog(
        :value="shouldShowModal"
        max-width="290"
      )
        v-card
          v-card-text
            | Faites d'abord le quizz des cours précedent !
          v-btn(@click="shouldShowModal = false") OK
</template>

<script>
import Tweet from "./components/Tweet.vue"
import Remember from "./components/Remember.vue"

import VRuntimeTemplate from "v-runtime-template"

// import articlesNavigation from "@/utils/articlesNavigation.json"

// import _ from "lodash"

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
      },
      shouldShowModal: false
    }
  },
  computed: {
    currentArticleId() {
      return this.$route.params.id
    },
    //-
    arePreviousArticlesReaded() {
      // return _.range(1, this.currentArticleId)
      return true
    }
  },
  methods: {
    async getArticle() {
      const article = await this.$http.get(`articles/1`)
      this.course = article.data
    },
    handleQuizzBtn() {
      if (this.arePreviousArticlesReaded) {
        this.$router.push({ name: "Quizz" })
      } else {
        this.shouldShowModal = true
      }
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

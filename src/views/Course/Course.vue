<template lang="pug">
  div(:class="$style.course")
    h1 {{ course.title }}
    img(:class="$style['main-image']" :src="course.media_link")
    section(:class="$style.contentContainer")
      v-runtime-template(:template='course.content' :class="$style.content")
      remember(:listToRemember="course.to_remember" :courseId="currentArticleIdFromApiId")
      v-btn(
        :class="$style.quizzBtn" color="primary" 
        depressed
        @click="handleQuizzBtn"
      ) Faire le quizz
      v-dialog(
        :value="shouldShowModal"
        max-width="290"
      )
        v-card(:class="$style.card")
          span
            | Faites d'abord le quizz des cours précedents !
          v-btn(@click="shouldShowModal = false" color="primary") D'accord !
</template>

<script>
import Tweet from "./components/Tweet.vue"
import Remember from "./components/Remember.vue"

import VRuntimeTemplate from "v-runtime-template"

import { articlesMixin } from "@/mixins/articles"

import articlesNavigation from "@/utils/articlesNavigation.json"

import _ from "lodash"

export default {
  name: "Course",
  components: {
    Tweet,
    Remember,
    VRuntimeTemplate
  },
  mixins: [articlesMixin],
  data() {
    return {
      course: {
        toRemember: []
      },
      shouldShowModal: false
    }
  },
  computed: {
    currentArticleApiId() {
      return this.$route.params.id
    },
    articlesNavigation() {
      return articlesNavigation
    },
    currentArticleIdFromApiId() {
      return this.articlesNavigation
        .reduce((acc, category) => {
          acc = acc.concat(category.articles)
          return acc
        }, [])
        .find(article => article.apiId === this.currentArticleApiId).id
    },
    range() {
      return _.range(1, this.currentArticleIdFromApiId)
        .splice(-1, 1)
        .map(number => `${number}`)
    },
    arePreviousArticlesReaded() {
      return this.currentArticleIdFromApiId === "1"
        ? true
        : this.range.every(id => this.readedArticles.includes(id))
    }
  },
  methods: {
    async getArticle() {
      const article = await this.$http.get(`articles/${this.currentArticleApiId}`)
      this.course = article.data
    },
    handleQuizzBtn() {
      if (this.arePreviousArticlesReaded) {
        this.$router.push({ name: "Quizz", params: { id: this.course.quizz.id } })
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

.card {
  display: flex;
  flex-direction: column;
  align-items: center;

  > * {
    margin: 1rem;
    text-align: center;
  }
}
</style>

<template lang="pug">
  div(:class="$style.course")
    h1 {{ course.title }}
    img(:class="$style['main-image']" :src="course.mediaLink")
    section(:class="$style.content")
      article(v-html="course.content")
      Tweet
      remember(:listToRemember="course.toRemember")
      v-btn(
        :class="$style.quizzBtn" color="primary" 
        depressed
        @click="$router.push({name:'Quizz'})"
      ) Faire le quizz
</template>

<script>
import Tweet from "./components/Tweet.vue"
import Remember from "./components/Remember.vue"

export default {
  name: "Course",
  components: {
    Tweet,
    Remember
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
      const article = await this.$http.get(
        `http://285c00afff67.ngrok.io/api/articles?page=${this.currentArticelId}`,
        {
          headers: { Accept: "application/json" }
        }
      )
      this.course = article.data[0]
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

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;

    & > * {
      margin: 3rem 0;
    }
  }

  .quizzBtn {
    display: block;
    margin: 0 auto 3rem auto;
  }
}
</style>

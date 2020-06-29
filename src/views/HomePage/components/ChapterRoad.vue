<template lang="pug">
  section(:class="$style.chapterRoad")
    chapter-head(:chapterHead="chapterHead")
    template(v-if="structuredChapterRoad.cube")
      div(:class="[$style.cube, $style.outer]")
        div(:class="[$style.cube, $style.inner]")
        article-sticker(
          v-for="(article, index) in structuredChapterRoad.cube" 
          :article="article"
          :className="'sec' + (index + 1)" 
          :key="chapter.categoryName + 'cubeArticle' + index"
        )
    article-sticker(
      v-for="(article, index) in structuredChapterRoad.single" 
      :article="article"
      className="single"
      :key="chapter.categoryName + 'singleArticle' + index"
    )
</template>

<script>
import ChapterHead from "./ChapterHead.vue"
import ArticleSticker from "./ArticleSticker.vue"

export default {
  name: "ChapterRoad",
  components: {
    ChapterHead,
    ArticleSticker
  },
  props: {
    chapter: {
      type: Object,
      required: true
    }
  },
  computed: {
    chapterHead() {
      const chapter = this.chapter
      return {
        title: chapter.categoryName,
        icon: chapter.icon
      }
    },
    structuredChapterRoad() {
      const articles = this.chapter.articles
      return this.groupBy(articles, "branchesModel")
    },
    vueety() {
      return this.$vuetify
    }
  },
  methods: {
    groupBy(articles, key) {
      return articles.reduce((acc, article) => {
        ;(acc[article[key]] = acc[article[key]] || []).push(article)
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss" module>
.chapterRoad {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.outer {
  width: 400px;
  height: 400px;
  position: relative;
}

.cube:before,
.cube:after {
  content: "";
  position: absolute;
  height: 50%;
  width: 50%;
}

.outer:before {
  //- Top left corner
  border-left: 3px solid green;
  border-top: 3px solid green;
  border-radius: 100px 0px 0px 0px;
}

.outer:after {
  //- Top Right corner
  right: 0;
  border-right: 3px solid red;
  border-top: 3px solid red;
  border-radius: 0px 100px 0px 0px;
}

.inner:before {
  //- Bottom Left corner
  bottom: 0;
  border-left: 3px solid black;
  border-bottom: 3px solid black;
  border-radius: 0px 0px 0px 100px;
}

.inner:after {
  //- Bottom Right corner
  bottom: 0;
  right: 0;
  border-right: 3px solid blue;
  border-bottom: 3px solid blue;
  border-radius: 0px 0px 100px 0px;
}
</style>

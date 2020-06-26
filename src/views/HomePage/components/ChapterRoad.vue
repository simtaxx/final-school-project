<template lang="pug">
  section(:class="$style.chapterRoad")
    chapter-head(:chapterHead="chapterHead")
    article-sticker(
      v-for="(article, index) in chapter.articles" 
      :article="article" 
      :key="chapter.categoryName + 'article' + index"
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
</style>

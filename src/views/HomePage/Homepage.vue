<template lang="pug">
  div(:class="$style.homepage")
    //- Maybe pass the ids (or names) of the previous chapter to check the first item border
    chapter-road(
      v-for="(chapter, index) in articleNavigation" 
      :chapter="chapter" 
      :key="'chapter' + index"
      :isLastChapter="index === articleNavigation.length - 1"
      :previousChapterArticleIds="previousChapterArticleIds(index)"
    )
    Modal
</template>

<script>
import articleNavigation from "@/utils/articlesNavigation.json"
import ChapterRoad from "./components/ChapterRoad.vue"
import Modal from "@/components/DiscoverModal/DiscoverModal.vue"

export default {
  name: "Homepage",
  components: {
    ChapterRoad,
    Modal
  },
  computed: {
    articleNavigation() {
      return articleNavigation
    }
  },
  methods: {
    previousChapterArticleIds(index) {
      if (index !== 0) {
        return this.articleNavigation[index - 1].articles.map(article => article.id)
      }
    }
  }
}
</script>

<style lang="scss" module>
.homepage {
  scroll-behavior: smooth;
}
</style>

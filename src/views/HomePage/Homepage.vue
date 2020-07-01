<template lang="pug">
  div(:class="$style.homepage")
    chapter-road(
      v-for="(chapter, index) in articleNavigation" 
      :chapter="chapter" 
      :key="'chapter' + index"
      :isLastChapter="index === articleNavigation.length - 1"
    )
</template>

<script>
import articleNavigation from "@/utils/articlesNavigation.json"
import ChapterRoad from "./components/ChapterRoad.vue"

export default {
  name: "Homepage",
  components: {
    ChapterRoad
  },
  computed: {
    articleNavigation() {
      return articleNavigation
    }
  }
}
</script>

<style lang="scss" module>
.homepage {
}
</style>

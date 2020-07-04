<template lang="pug">
  section(:class="$style.chapterRoad")
    chapter-head(:chapterHead="chapterHead")
    div(:class="[$style['previous-road'], $style['single-road']]")
    template(v-if="structuredChapterRoad.cube")
      div(:class="[$style.cube, $style.outer, $style.road, {[$style.activeRoad] : isReaded(structuredChapterRoad.cube[0])}]")
        div(:class="[$style.cube, $style.inner, $style.road, {[$style.leftCubeBranchActive] : isReaded(structuredChapterRoad.cube[1]), [$style.rightCubeBranchActive] : isReaded(structuredChapterRoad.cube[2])}]")
        article-sticker(
          v-for="(article, index) in structuredChapterRoad.cube" 
          :article="article"
          :className="'cube-sticker-' + (index + 1)" 
          :key="chapter.categoryName + 'cubeArticle' + index"
          :activeBorder="hasActiveBorder('cube', index)"
        )
        div(v-if="chapter.articles.length > 3" :class="[$style['next-road'], $style['single-road']]")
    article-sticker(
      v-for="(article, index) in structuredChapterRoad.single" 
      :article="article"
      className="single"
      :key="chapter.categoryName + 'singleArticle' + index"
      :isLastArticle="isLastChapter && index === structuredChapterRoad.single.length -1"
    )
</template>

<script>
import ChapterHead from "./ChapterHead.vue"
import ArticleSticker from "./ArticleSticker.vue"

import { articlesMixin } from "@/mixins/articles"

export default {
  name: "ChapterRoad",
  mixins: [articlesMixin],
  components: {
    ChapterHead,
    ArticleSticker
  },
  props: {
    chapter: {
      type: Object,
      required: true
    },
    isLastChapter: {
      type: Boolean,
      required: true
    }
  },
  computed: {
    chapterHead() {
      const chapter = this.chapter
      return {
        title: chapter.categoryName,
        icon: chapter.icon,
        index: chapter.index
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
    },
    hasActiveBorder(branchModel, index) {
      if (branchModel === "cube") {
        if (index === 0) return true
        else if ([1, 2].includes(index)) {
          return this.isReaded(this.structuredChapterRoad.cube[0])
        } else return [1, 2].some(index => this.structuredChapterRoad.cube[index])
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
  position: relative;
}

//- TODO deal with the responsive of this...

.outer {
  width: 400px;
  height: 400px;
  position: relative;
  box-sizing: border-box;
  margin: 3rem 0;

  &:before {
    //- Top left corner
    border-left: 12px solid;
    border-top: 12px solid;
    border-radius: 100px 0px 0px 0px;
  }

  &:after {
    //- Top Right corner
    right: 0;
    border-right: 12px solid;
    border-top: 12px solid;
    border-radius: 0px 100px 0px 0px;
  }
}

.inner {
  box-sizing: border-box;
}

.cube:before,
.cube:after {
  content: "";
  position: absolute;
  height: 50%;
  width: 50%;
}

.inner {
  &:before {
    //- Bottom Left corner
    bottom: 0;
    border-left: 12px solid;
    border-bottom: 12px solid;
    border-radius: 0px 0px 0px 100px;
  }

  &:after {
    //- Bottom Right corner
    bottom: 0;
    right: 0;
    border-right: 12px solid;
    border-bottom: 12px solid;
    border-radius: 0px 0px 100px 0px;
  }
}

// TODO changes these colors with vuetify variables
.road {
  &::after,
  &::before {
    border-color: grey;
  }
}

.single-road {
  width: 12px;
  height: 100px;
  // TODO get the vutify sass variables colors
  background-color: gray;
  position: absolute;
}

.next-road {
  left: 50%;
  transform: translateX(-50%);
  top: 100%;
}

.previous-road {
  top: 70px;
}

.activeRoad {
  &::after,
  &::before {
    border-color: blue;
  }
}

.leftCubeBranchActive {
  &::before {
    border-color: blue;
  }
}

.rightCubeBranchActive {
  &::after {
    border-color: blue;
  }
}
</style>

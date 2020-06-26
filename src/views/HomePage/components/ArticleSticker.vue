<template lang="pug">
  div(:class="$style.articleSticker")
    v-avatar(
      :class="$style.avatar"
    )
      v-icon(v-text="article.icon")
    span {{ article.articleName }}
    article-branches
</template>

<script>
import ArticleBranches from "./ArticleBranches.vue"

export default {
  name: "ArticleSticker",
  components: {
    ArticleBranches
  },
  props: {
    article: {
      type: Object,
      required: true
    }
  }
}

// On two left right
</script>

<style lang="scss" module>
.articleSticker {
  display: flex;
  flex-direction: column;
  align-items: center;

  .avatar {
    background-color: gray;
  }
}
</style>

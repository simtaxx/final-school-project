<template lang="pug">
  v-chip(
    :class="{activeBorder : hasActiveBorder, chapterHead: true}"
    :id="chapterHead.hash"
    large
  ) 
    img(:src="chapterHead.icon" alt="icon chapter category")
    | {{'Chapitre ' + chapterHead.index + ' : ' + chapterHead.title}}
  
    
</template>

<script>
export default {
  name: "ChapterHead",
  props: {
    chapterHead: {
      type: Object,
      required: true
    },
    hasActiveBorder: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/scss/styles.scss";

.chapterHead {
  margin: 2rem 1rem;
  padding: 0 1.2rem;
  border: solid 2px;
  border-color: var(--v-gray-base);
  z-index: 2;

  &::before {
    display: none;
  }

  img {
    margin-right: 1rem;
  }
}

.activeBorder {
  border-color: $primary;
}
</style>

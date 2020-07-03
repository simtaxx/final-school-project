<template lang="pug">
  v-chip(
    :class="$style.chapterHead"
    large
  ) 
    img(:src="chapterHead.icon")
    | {{'Chapitre ' + chapterHead.index + ' : ' + chapterHead.title}}
  
    
</template>

<script>
export default {
  name: "ChapterHead",
  props: {
    chapterHead: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" module>
.chapterHead {
  margin: 2rem 1rem;
  padding: 0 1.2rem;
  border: solid 2px;
  border-color: gray;
  z-index: 2;

  &::before {
    display: none;
  }
}
</style>

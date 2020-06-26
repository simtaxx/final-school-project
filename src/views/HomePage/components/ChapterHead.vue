<template lang="pug">
  v-chip(
    :class="$style.chapterHead"
    outlined
  ) {{chapterHead.title}}
  
    v-icon(v-text="chapterHead.icon")
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
}
</style>

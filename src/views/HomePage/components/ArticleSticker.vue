<template lang="pug">
  div(:class="[$style.articleSticker, $style[className]]")
    v-avatar(
      :class="$style.avatar"
    )
      v-icon(v-text="article.icon")
    span(
      :class="{[$style.stickerText] : className !== 'single'}"
      :style="stickerTextStyle"
    ) {{ article.articleName }}
</template>

<script>
export default {
  name: "ArticleSticker",
  props: {
    article: {
      type: Object,
      required: true
    },
    className: {
      type: String,
      required: false
    }
  },
  computed: {
    stickerTextStyle() {
      if (this.$vuetify.theme.dark) {
        return { background: this.$vuetify.theme.themes.dark.background }
      }
      return { background: this.$vuetify.theme.themes.light.background }
    }
  }
}
</script>

<style lang="scss" module>
@import "~vuetify/src/styles/styles.sass";

.articleSticker {
  display: flex;
  flex-direction: column;
  align-items: center;

  z-index: 2;

  .avatar {
    background-color: gray;
  }
}

.cube-sticker-1,
.cube-sticker-2,
.cube-sticker-3,
.cube-sticker-4 {
  position: absolute;
}

.cube-sticker-1 {
  left: 50%;
  transform: translate(-50%, calc(-50% + 5px));
}

.cube-sticker-2 {
  left: 100%;
  top: 50%;
  transform: translate(calc(-50% - 5px), -50%);
}

.cube-sticker-3 {
  top: 50%;
  transform: translate(calc(-50% + 5px), -50%);
}

.cube-sticker-4 {
  left: 50%;
  top: 100%;
  transform: translate(-50%, calc(-50% - 5px));
}

.stickerText {
  position: absolute;
  white-space: nowrap;
  top: 100%;
  /* background-color: map-get($material-dark, "background"); */
}

.single {
  margin: 6rem 0 2rem 0;
}
</style>

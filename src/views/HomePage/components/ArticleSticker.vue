<template lang="pug">
  div(:class="[$style.articleSticker, $style[className]]")
    v-avatar(
      :class="$style.avatar"
    )
      v-icon(v-text="article.icon")
    span(:class="{[$style.stickerText] : className !== 'single'}") {{ article.articleName }}
    v-btn fdds
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

.sec1 {
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.sec2 {
  left: 100%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.sec3 {
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.sec4 {
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
}

.stickerText {
  position: absolute;
  white-space: nowrap;
  top: 100%;
  background-color: map-get($material-dark, "background");
}

.single {
  margin: 6rem 0 2rem 0;
}
</style>

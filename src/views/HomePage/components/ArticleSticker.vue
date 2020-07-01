<template lang="pug">
  div(:class="[$style.articleSticker, $style[className]]")
    v-badge(
      bottom 
      style="z-index: 4"
      color="success" 
      overlap
      :value="true"
      icon="mdi-check-bold"
    )
      v-avatar(
        :class="$style.avatar"
        @click="updateRoute()"
      )
        v-icon(v-text="article.icon")
    span(
      :class="{[$style.stickerText] : className !== 'single'}"
      :style="stickerTextStyle"
    ) {{ article.articleName }}
    div(
      v-if="className === 'single' && !isLastArticle" 
      :class="[$style['next-road'], $style['single-road']]"
    )
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
    },
    isLastArticle: {
      type: Boolean,
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
  },
  methods: {
    updateRoute() {
      this.$router.push({ name: "Course", params: { courseName: this.article.articleId } })
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
  cursor: pointer;

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
  margin: 3rem 0 2rem 0;
}

.single-road {
  width: 10px;
  height: 150px;
  // TODO get the vutify sass variables colors
  background-color: gray;
  position: absolute;
  z-index: -2;
  transform: translateY(40px);
}

// .next-road {
//   top: 50%;
// }
</style>

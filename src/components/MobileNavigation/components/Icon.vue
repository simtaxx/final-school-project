<template lang="pug">
  router-link(:to="'/#' + content.path" :exact-active-class="$style.active" :class="$style.iconContainer" 
      :style="iconBg")
    img(:class="$style.icon" :src="content.icon")
</template>

<script>
export default {
  name: "Link",
  props: {
    content: { type: Object, required: true }
  },
  computed: {
    iconBg() {
      console.log()
      if (this.$vuetify.theme.dark) {
        return { background: this.$vuetify.theme.themes.light.text }
      }
      return { background: this.$vuetify.theme.themes.light.white }
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.iconContainer {
  position: relative;
  border: 1px solid $primary;
  display: block;
  width: 50px !important;
  height: 50px !important;
  border-radius: 30px;
  margin-right: 16px;
}
.icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 26px !important;
  font-style: inherit !important;
  height: auto;
}

.active {
  color: $primary !important;
  background-color: $primary !important;

  img {
    fill: currentColor;
  }
}
</style>

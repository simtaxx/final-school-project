<template lang="pug">
  router-link(:to="content.path" :exact-active-class="$style.active" :class="$style.link")
    v-icon(v-text="content.icon" :class="$style.icon")
    p {{content.categoryName}}
</template>

<script>
export default {
  name: "Link",
  props: {
    content: { type: Object, required: true }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";

.link {
  width: 100% !important;
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0 !important;
  }
}

.icon {
  margin-right: 16px;
  width: 24px;
  height: auto;
}

.active {
  color: $primary !important;
  background-color: rgba($primary, 0.1);

  img {
    fill: currentColor;
  }
}
</style>

<template lang="pug">
  router-link(:to="'/#' + content.path" :exact-active-class="$style.active" :class="$style.link")
    img(:class="$style.icon" :src="content.icon")
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
  display: flex;
  align-items: center;

  p {
    margin-bottom: 0 !important;
    color: var(--v-text-base);
  }
}

.icon {
  margin-right: 16px;
  width: 24px;
  height: auto;
  font-style: inherit !important;
}

.active {
  background-color: rgba($primary, 0.1);

  img {
    fill: currentColor;
  }

  p {
    color: $primary !important;
  }
}
</style>

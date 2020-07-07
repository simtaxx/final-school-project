<template lang="pug">
  div(:class="$style.icon")
    v-icon(:class="$style.badge") {{imagePath}}
</template>

<script>
export default {
  name: "Icon",
  props: {
    imagePath: { type: String, required: true }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.icon {
  background-color: #f4f4f8;
  width: 50px;
  height: 50px;
  border-radius: 40px !important;

  .badge {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 24px;
    height: 24px;
    transform: translate(-50%, -50%);
  }
}
</style>

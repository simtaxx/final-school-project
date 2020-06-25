<template lang="pug">
  div.theme-toggler
    v-switch(v-model="$vuetify.theme.dark" label="Theme")
</template>

<script>
export default {
  name: "ThemeToggler",
  data() {
    return {
      theme: true
    };
  }
};
</script>

<style lang="scss">
@import "@/scss/core/colors.scss";

.theme-toggler {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>

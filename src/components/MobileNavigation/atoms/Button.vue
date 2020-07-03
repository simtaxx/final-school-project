<template lang="pug">
  v-btn(:class="{[$style.isBlue]: button.name}" :to="button.path" :value="button.name" @click="activeIt(button.name)")
    span {{button.name}}
    v-icon {{button.icon}}
</template>

<script>
export default {
  name: "Button",
  props: {
    button: { type: Object, required: true }
  },
  methods: {
    activeIt(value) {
      this.$emit("activeIt", value)
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.isBlue {
  color: $primary !important;
  font-family: "Gotham", sans-serif;
  font-size: 14px;
}
</style>

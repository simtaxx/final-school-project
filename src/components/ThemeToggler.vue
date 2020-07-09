<template lang="pug">
  div.theme-toggler
    span.first-span Light
    v-switch(
      v-model="$vuetify.theme.dark" 
      inset
      :ripple="false"
      @change="storeTheme"
    )
    span Dark
</template>

<script>
export default {
  name: "ThemeToggler",
  data() {
    return {
      theme: true
    }
  },
  methods: {
    storeTheme() {
      localStorage.setItem("isDark", JSON.stringify(this.$vuetify.theme.dark))
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/core/colors.scss";

.theme-toggler {
  position: absolute;
  display: flex;
  align-items: center;
  right: 2rem;
  top: 10px;
}

.first-span {
  margin-right: 0.5rem;
}

.v-input--switch__thumb {
  background-size: 65%;
  background-position: center;
  border: 3px solid;
}

.v-input--switch__thumb.theme--light {
  background-image: url("../assets/icons/light_toggler_thumb.svg");
  height: 28px;
  width: 28px;
  top: calc(50% - 14px);
  border-color: #60daff;
}

.v-input--switch__thumb.theme--dark {
  background-image: url("../assets/icons/dark_toggler_thumb.svg");
  height: 28px;
  width: 28px;
  top: calc(50% - 14px);
  border-color: #3e4eb7;
}

.v-input--switch__track {
  background-size: cover;
}

.v-input--switch--inset .v-input--switch__track.theme--light {
  transform: translateX(4px);
  background-color: #60daff;
  opacity: 1;
  background-image: url("../assets/icons/light_toggler_track.svg");
}

.v-input--switch--inset .v-input--switch__track.theme--dark {
  transform: translateX(4px);
  background-color: #3e4eb7;
  opacity: 1;
  background-image: url("../assets/icons/dark_toggler_track.svg");
}
</style>

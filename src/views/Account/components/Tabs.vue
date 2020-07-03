<template lang="pug">
  div(:class="$style.tabs")
    div(:class="$style.categories")
      span(:class="{[$style.selected]: favorites}" @click="changeCategory('fav')") Mes favoris
      span(:class="{[$style.selected]: certification}" @click="changeCategory('certification')") Ma certification
    div(:class="isActive")
</template>

<script>
export default {
  name: "Tabs",
  data() {
    return {
      favorites: true,
      certification: false
    }
  },
  methods: {
    changeCategory(category) {
      if (category === "fav") {
        this.favorites = true
        this.certification = false
        this.$emit("changeCategory", category)
      } else {
        this.favorites = false
        this.certification = true
        this.$emit("changeCategory", category)
      }
    }
  },
  computed: {
    isActive() {
      if (this.certification) {
        return this.$style.cursorCertification
      }
      return this.$style.cursor
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.tabs {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-bottom: 24px;
}
.categories {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-family: "Gotham", sans-serif;
  color: $greyDarken;

  span {
    cursor: pointer;
    font-size: 14px;
  }
}
.cursor {
  position: relative;
  z-index: 1;
  height: 6px;
  background-color: $grey;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    left: 0;
    height: 6px;
    width: 125px;
    background-color: $primary;
    transition: 0.3s;
  }
}
.cursorCertification {
  position: relative;
  z-index: 1;
  height: 6px;
  background-color: $grey;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    left: 125px;
    height: 6px;
    width: 125px;
    background-color: $primary;
    transition: 0.3s;
  }
}
.selected {
  color: $primary;
}
</style>

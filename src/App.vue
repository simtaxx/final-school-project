<template lang="pug">
  v-app
    router-view(v-if="!isFirstTime" :class="$style.app")
    theme-toggler
    Introduction(v-if="isFirstTime" @closeIntroduction="isFirstTime = false")
</template>

<script>
import ThemeToggler from "@/components/ThemeToggler.vue"
import Introduction from "@/components/Introduction.vue"

export default {
  name: "App",
  components: {
    ThemeToggler,
    Introduction
  },
  data() {
    return {
      isFirstTime: true
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem("firstTime")) === null) {
      return (this.isFirstTime = true)
    }
    this.isFirstTime = false
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.app {
  padding-left: 290px;
}

nav {
  position: fixed;
  width: 290px;
  height: 100%;
  background-color: $greyLight;

  .navContainer {
    margin-left: 50px;
  }
}

h3 {
  font-family: "Gotham", sans-serif;
  font-size: 12px;
  color: #9498a0;
  margin-bottom: 16px;
}

.profile {
  display: flex;
  flex-direction: column;
  margin-top: 70px;

  .signIn {
    font-size: 12px;
    font-family: "Gotham", sans-serif;
    padding: 8px 16px;
    background-color: $primary;
    width: 111px;
    border-radius: 5px;
    color: #faf9f9 !important;
    margin-bottom: 8px;
  }
}

.discover {
  margin-top: 32px;
  display: flex;
  flex-direction: column;

  a {
    display: flex;
    align-items: center;
    margin: 0 0 15px -20px;
    width: max-content;
    padding: 8px 16px;
    border-radius: 30px;
    font-size: 14px;
    font-family: "Gotham", sans-serif;

    &:hover {
      background-color: $grey;
    }

    img {
      margin-right: 16px;
      width: 24px;
      height: auto;
    }

    p {
      margin: 0;
    }
  }
}

.challenge {
  p {
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    font-weight: 600;

    a {
      color: $primary !important;
      text-decoration: underline;
    }
  }
}

.active {
  color: $primary !important;
  background-color: rgba($primary, 0.1);

  img {
    fill: currentColor;
  }
}
</style>

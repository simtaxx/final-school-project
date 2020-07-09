<template lang="pug">
  div(:class="$style.account")
    div(:class="$style.accountContainer")
      User
      Tabs(@changeCategory="changeCategory")
      Favorites(v-if="isFavorites" v-for="favorite in favorites" :key="favorite.id" :content="favorite")
      Certification(v-if="certification")

</template>

<script>
import User from "@/views/Account/components/User.vue"
import Tabs from "@/views/Account/components/Tabs.vue"
import Favorites from "@/views/Account/components/Favorites.vue"
import Certification from "@/views/Account/components/Certification.vue"
export default {
  name: "Account",
  components: {
    User,
    Tabs,
    Favorites,
    Certification
  },
  data() {
    return {
      isFavorites: true,
      favorites: null,
      certification: false
    }
  },
  mounted() {
    let userLog = JSON.parse(localStorage.getItem("userLog"))
    if (userLog.favorite_articles.length) {
      this.favorites = userLog.favorite_articles
    }
  },
  methods: {
    changeCategory(category) {
      if (category === "fav") {
        this.favorites = true
        this.certification = false
      } else {
        this.favorites = false
        this.certification = true
      }
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/styles.scss";
.account {
  .accountContainer {
    margin-left: 70px;
    @include small-screen {
      margin-left: 0;
    }
  }
}
</style>

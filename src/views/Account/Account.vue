<template lang="pug">
  div(:class="$style.account")
    div(:class="$style.accountContainer")
      User
      Tabs(@changeCategory="changeCategory")
      Favorites(v-if="isFavorite" v-for="favorite in favorites" :key="favorite.id" :content="favorite")
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
      isFavorite: true,
      favorites: null,
      certification: false
    }
  },
  mounted() {
    this.favorites = this.userLog.favorite_articles
  },
  methods: {
    changeCategory(category) {
      if (category === "fav") {
        this.isFavorite = true
        this.certification = false
      } else {
        this.isFavorite = false
        this.certification = true
      }
    }
  },
  computed: {
    userLog() {
      return JSON.parse(localStorage.getItem("userLog"))
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

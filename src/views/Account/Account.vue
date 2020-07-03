<template lang="pug">
  div(:class="$style.account")
    User
    Tabs(@changeCategory="changeCategory")
    Favorites(v-if="favorites")
    Favorites(v-if="favorites")
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
      favorites: true,
      certification: false
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
.account {
}
</style>

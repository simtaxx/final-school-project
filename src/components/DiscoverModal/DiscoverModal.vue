<template lang="pug">
  v-dialog(:content-class="$style.discoverModal" v-model="dialog" width="360")
    v-card(:class="$style.card")
      Icon(:class="$style.icon" :imagePath="content.icon")
      h3 Chapitre 1 - L'institution
      p(:class="$style.subtitle") {{content.name}}
      p(:class="$style.content") #[span Résumé :] {{content.abstract}}
      v-btn(:class="$style.btn" color="primary" :to="`/course/${content.id}`") Lire
      div(:class="$style.success" v-if="validate")
        img(src="/img/icons/success.svg")
        p Validé !
      div(:class="$style.favorite")
        img(src="/img/icons/fav.svg" v-if="favorite" @click="getFavorite(content.id)")
        img(src="/img/icons/notFav.svg" v-if="!favorite" @click="getFavorite(content.id)")
</template>

<script>
import Icon from "./components/Icon.vue"
export default {
  name: "DiscoverModal",
  components: {
    Icon
  },
  data() {
    return {
      validate: false,
      favorite: false,
      localUser: []
    }
  },
  props: {
    content: { type: Object, required: true },
    dialog: { type: Boolean, default: false }
  },
  created() {
    this.localUser = this.getLocalUser()
  },
  updated() {
    if (this.getLocalUser() !== null) {
      let localUser = this.getLocalUser()
      let favList = localUser.favorite_articles
      const whiteList = favList.map(fav => fav.id)
      if (whiteList.includes(this.content.id)) {
        this.favorite = true
      } else this.favorite = false
    }
  },
  methods: {
    getLocalUser() {
      return JSON.parse(localStorage.getItem("userLog"))
    },
    setLocalUser(newLocaluser) {
      localStorage.setItem("userLog", JSON.stringify(newLocaluser))
    },
    async setBackUser({ favorite_articles }) {
      const idUser = this.$store.state.accountData.id
      // eslint-disable-next-line
      const sendUser = await this.$http
        .put(`/user/${idUser}`, { favoriteArticles: favorite_articles })
        // eslint-disable-next-line
        .then(reponse => console.log(response))
    },
    getFavorite(id) {
      this.favorite ? (this.favorite = false) : (this.favorite = true)
      let localUser = this.getLocalUser()
      let favList = localUser.favorite_articles
      const whiteList = favList.map(fav => fav.id)
      if (this.favorite && !whiteList.includes(id)) {
        favList.push(this.content)
        this.setLocalUser(localUser)
        this.setBackUser(localUser)
      } else if (!this.favorite && whiteList.includes(id)) {
        favList = favList.filter(fav => fav.id !== id)
        localUser.favorite_articles = favList
        this.setLocalUser(localUser)
        this.setBackUser(localUser)
      }
    }
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.discoverModal {
  overflow: visible !important;
}
.card {
  padding: 16px !important;
  background-color: var(--v-modal-base) !important;
  text-align: center;
  font-family: "OpenSans", sans-serif;

  h3 {
    position: relative;
    font-size: 10px;
    margin: 0 !important;
  }
}
.icon {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
}
.subtitle {
  position: relative;
  font-family: "Gotham", sans-serif;
  font-size: 14px;
}
.content {
  font-size: 12px;

  span {
    font-weight: bold;
  }
}
.btn {
  color: $white !important;
}
.success {
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;

  img {
    margin-right: 8px;
  }

  p {
    font-family: "Gotham", sans-serif;
    font-size: 12px;
    margin: 0 !important;
    color: var(--v-success-base) !important;
  }
}
.favorite {
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;

  img {
    width: 20px;
    height: 20px;
  }
}
</style>

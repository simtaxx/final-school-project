<template lang="pug">
  v-dialog(:content-class="$style.discoverModal" v-model="dialog" width="360")
    v-card(:class="$style.card")
      Icon(:class="$style.icon" :imagePath="content.icon")
      h3 Chapitre 1 - L'institution
      p(:class="$style.subtitle") {{content.name}}
      p(:class="$style.content") #[span Résumé :] {{content.content}}
      v-btn(:class="$style.btn" color="primary" :to="`/course/${content.id}`") Lire
      div(:class="$style.success" v-if="validate")
        img(src="/img/icons/success.svg")
        p Validé !
      div(:class="$style.favorite")
        img(src="/img/icons/fav.svg" v-if="favorite" @click="favorite ? favorite = false : favorite = true")
        img(src="/img/icons/notFav.svg" v-if="!favorite" @click="favorite ? favorite = false : favorite = true")
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
      favorite: false
    }
  },
  props: {
    content: { type: Object, required: true },
    dialog: { type: Boolean, default: false }
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

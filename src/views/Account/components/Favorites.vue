<template lang="pug">
  div(:class="$style.favorites")
    Pellet(imageName="exempleFav.svg" :activeBorder="activeBorder")
    div(:class="$style.container")
      div(:class="$style.title")
        h3 La république
        img(src="/img/icons/fav.svg")
      p #[span Résumé] : Dans le régime parlementaire le Gouvernement est composé de ministres placés sous l’autorité du Premier ministre
      v-btn(:class="$style.btn" color="primary" to="/course/1") LIRE
</template>

<script>
import Pellet from "@/components/Pellet.vue"
export default {
  name: "Favorites",
  components: {
    Pellet
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.favorites {
  display: flex;
  align-items: flex-start;
  font-family: "Gotham", sans-serif;
  margin-bottom: 24px;

  img {
    margin-right: 12px;
  }

  p {
    font-family: "OpenSans", sans-serif;
    font-size: 12px;
    max-width: 500px;

    span {
      font-weight: bold;
    }
  }
}
.title {
  display: flex;
  align-items: center;

  h3 {
    margin: 0 8px 0 0 !important;
    font-size: 14px;
    color: var(--v-text-base);
  }
}
.btn {
  span {
    color: $white;
  }
}
</style>

<template lang="pug">
  div(
    :class="$style.tweet"
    :style="{backgroundColor : tweetBackground}"
  )
    tweetos
    div(:class="$style.message")
      p {{ tweet.title }}
    div(:class="$style.options")
      div(:class="$style.text") 
        span 6:24 PM - 23 juin 2020
      v-divider
      div(:class="$style.text")
        span(:class="$style.stat") 236 
        | Retweets 
        span(:class="$style.stat") 1.3 k 
        | J'aime 
      v-divider
      //- TODO repetition here
      div(:class="$style.icons")
        img(src='@/assets/icons/tweet_comment.svg')
        img(src='@/assets/icons/tweet_retweet.svg')
        img(src='@/assets/icons/tweet_heart.svg')
        img(src='@/assets/icons/tweet_save.svg')
    tweetos
    div(:class="$style.response")
      div
        p {{ tweet.content }}
        div(:class="$style.commentIcons")
          img(src='@/assets/icons/tweet_comment.svg')
          img(src='@/assets/icons/tweet_retweet.svg')
          img(src='@/assets/icons/tweet_heart.svg')
          img(src='@/assets/icons/tweet_save.svg')

      
</template>

<script>
import Tweetos from "./Tweetos.vue"

export default {
  name: "Tweet",
  components: {
    Tweetos
  },
  props: {
    tweet: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  computed: {
    tweetBackground() {
      return this.$vuetify.theme.isDark
        ? this.$vuetify.theme.themes.dark.tweet
        : this.$vuetify.theme.themes.light.tweet
    }
  }
}
</script>

<style lang="scss" module>
@import "~vuetify/src/styles/styles.sass";
.tweet {
  width: 450px;
  font-size: 12px;
  padding: 0.5rem;
  max-width: 80%;
  border-radius: 4px;
  align-self: center;

  &:after {
    content: "Cette représentation de tweet ne traduit pas la réalité";
    display: flex;
    justify-content: center;
  }

  .options {
    font-size: 10px;

    .text {
      margin: 0.5rem 0;
    }

    .stat {
      font-weight: bold;
    }
  }

  .icons {
    display: flex;
    justify-content: space-around;
    margin: 0.5rem 0;

    img {
      width: 20px;
    }
  }

  .commentIcons {
    display: flex;
    justify-content: space-around;

    img {
      width: 15px;
    }
  }

  .message {
    font-size: 16px;
  }

  .response {
    display: flex;
    margin: 0.5rem 0;
    font-size: 14px;

    &::before {
      content: "";
      margin: 0 25px 0 17px;
      width: 2px;
      background-color: gray;
    }
  }
}
</style>

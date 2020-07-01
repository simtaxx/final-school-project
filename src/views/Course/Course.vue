<template lang="pug">
  div(:class="$style.course")
    h1 {{ course.title }}
    img(:class="$style['main-image']" :src="course.imageUrl")
    Tweet
</template>

<script>
import Tweet from "./components/Tweet/Tweet.vue"

export default {
  name: "Course",
  components: {
    Tweet
  },
  data() {
    return {
      course: {
        title: "La république",
        imageUrl: "https://www.francetvinfo.fr/image/755c1g5o5-b48f/1500/843/7422619.jpg",
        p1:
          "Deserunt nulla laboris et eu. Reprehenderit proident sint exercitation nostrud eu cupidatat aliqua nisi reprehenderit aliquip id. Cillum cupidatat est aliqua ipsum elit ea esse incididunt irure sunt exercitation cupidatat ex deserunt. Ipsum consequat exercitation aute eu veniam pariatur in ipsum sint exercitation laborum. Anim dolore et consequat eu irure aute fugiat voluptate aliqua aliquip quis ipsum cillum. Qui irure exercitation mollit reprehenderit culpa dolore ut tempor amet tempor enim duis ea laborum. Do sunt pariatur fugiat esse quis est veniam ea proident incididunt laborum.",
        toKnow: {
          first: "Consectetur consectetur veniam et laborum occaecat enim reprehenderit aute.",
          second:
            "Mollit enim non commodo laboris tempor veniam. Non eu id occaecat amet commodo veniam sint quis officia incididunt. Occaecat irure reprehenderit dolor consequat laboris elit officia esse veniam officia id. Nostrud excepteur consectetur aliquip nisi culpa excepteur. Aute nostrud sint aliquip enim fugiat sit sint mollit cillum. Elit laboris reprehenderit in anim incididunt."
        },
        p2:
          "Exercitation Lorem qui minim ad eiusmod deserunt quis dolore amet culpa pariatur mollit quis cupidatat. Et Lorem magna irure eiusmod adipisicing mollit est commodo. Tempor dolor voluptate mollit fugiat ullamco pariatur. Dolor sit dolor ea mollit reprehenderit pariatur. Laboris aliquip sit sint tempor proident quis exercitation. Occaecat ea proident ad officia commodo cupidatat do amet sint occaecat officia velit minim. Tempor eu cillum proident mollit est minim commodo voluptate sint sint ex aliquip nisi officia. Ut cillum ad incididunt quis est non eiusmod Lorem do nulla qui aute cupidatat occaecat. Cillum exercitation veniam aliqua velit non esse. Labore velit consectetur nisi consectetur et magna ipsum cillum adipisicing pariatur quis laborum qui tempor.",
        toMaintain: [
          "Aliqua minim ullamco enim irure enim do laboris mollit ullamco.",
          "Aliqua minim ullamco enim irure enim do laboris mollit ullamco.",
          "Aliqua minim ullamco enim irure enim do laboris mollit ullamco.",
          "Aliqua minim ullamco enim irure enim do laboris mollit ullamco."
        ]
      }
    }
  }
  // methods: {
  //   getArticle() {
  //     return this.$http.get(url, {headers: {"Accept": "application/json"}})
  //       .then(res => console.log(res))
  //   }
  // }
}
</script>

<style lang="scss" module>
.course {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 1rem 0;
  }

  .main-image {
    width: 80%;
    height: 100px;
    object-fit: cover;
    object-position: left top;
    border-radius: 6px;
  }
}
</style>

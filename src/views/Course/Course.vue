<template lang="pug">
  div(:class="$style.course")
    h1 {{ course.title }}
    img(:class="$style['main-image']" :src="course.media_link")
    section(:class="$style.contentContainer")
      v-runtime-template(:template='course.content' :class="$style.content")
      remember(:listToRemember="course.to_remember")
      v-btn(
        :class="$style.quizzBtn" color="primary" 
        depressed
        @click="$router.push({name:'Quizz'})"
      ) Faire le quizz
</template>

<script>
import Tweet from "./components/Tweet.vue"
import Remember from "./components/Remember.vue"

import VRuntimeTemplate from "v-runtime-template"

export default {
  name: "Course",
  components: {
    Tweet,
    Remember,
    VRuntimeTemplate
  },
  data() {
    return {
      course: {
        toRemember: []
      },
      // testHtml: `<p>aaaa <tweet :tweet="{title: 'test', content: 'the content blabla'}" /></p>`
      testHtml:
        "<article><p>La r&eacute;publique, qui tient son nom du latin <strong><em>res publica</em></strong> qui d&eacute;signe l&#39;int&eacute;r&ecirc;t g&eacute;n&eacute;ral, l&#39;int&eacute;r&ecirc;t publique, est une m&eacute;thode de gouvernement qui proscrit toute forme de monarchie. Le pouvoir n&#39;est pas d&eacute;tenu par une seule personne mais par des &eacute;lus qui prendrons les d&eacute;cisions politiques.</p>\n                              <tweet :tweet='{title: `aa`, content: `aa`}'/>\n                              <p>Les deux termes ne sont pas incompatibles, mais ils ne sont pas toujours synonymes. La France par exemple est une r&eacute;publique et une d&eacute;mocratie. Le sens des mots ayant beaucoup &eacute;volu&eacute;, on retiens aujourd&#39;hui trois indices permettant de jauger les pays qui se disent &ecirc;tre une d&eacute;mocratie :</p>\n                              <ul>\n                                  <li>La mani&egrave;re avec laquelle le pouvoir ex&eacute;cutif est mis en place (&eacute;lections...)</li>\n                                  <li>la possibilit&eacute; d&#39;une concurrence politique</li>\n                                  <li>le contr&ocirc;le de ce m&ecirc;me pouvoir ex&eacute;cutif (limites donn&eacute;es par les autres pouvoirs, l&eacute;gislatif, judiciaire)</li>\n                              </ul>\n                              <p>Aucune partie du peuple, ni aucun individu, ne peut s&rsquo;attribuer l&rsquo;exercice de la souverainet&eacute; nationale.</p>\n                              <p>Le peuple est souverains, c&#39;est &agrave; dire que sa voix s&#39;&eacute;l&egrave;ve au travers de repr&eacute;sentant qu&#39;il aura &eacute;lus pour prendre les d&eacute;cisions politiques du pays.</p>\n                               <p>Les principes fondamentaux de la R&eacute;publique fran&ccedil;aise sont &eacute;nonc&eacute;s dans sa devise : &quot;Libert&eacute;, &Eacute;galit&eacute;, Fraternit&eacute;&quot;. Ils se traduisent par des droits intangibles, &agrave; la fois politiques et sociaux, qui ont &eacute;t&eacute; reconnus aux citoyens par les diff&eacute;rents r&eacute;gimes r&eacute;publicains. L&rsquo;article 1er de la Constitution s&rsquo;inscrit dans ce cadre puisqu&#39;il proclame que &laquo; La France est une R&eacute;publique indivisible, la&iuml;que, d&eacute;mocratique et sociale &raquo;.</p>\n</article>"
    }
  },
  computed: {
    currentArticelId() {
      return this.$route.params.id
    }
  },
  methods: {
    async getArticle() {
      const article = await this.$http.get(`articles/2`)
      this.course = article.data
    }
  },
  created() {
    this.getArticle()
  }
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

  .contentContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > * {
      margin: 2rem 0;
    }
  }

  .quizzBtn {
    display: block;
    margin: 0 auto 3rem auto;
  }
}
</style>

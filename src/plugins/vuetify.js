import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        background: "#293241"
      },
      light: {
        background: "#FAF9F9"
      }
    }
  }
})

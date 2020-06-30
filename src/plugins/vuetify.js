import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#09BDED",
        white: "FAF9F9"
      }
    }
  }
})

export default vuetify

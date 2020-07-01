import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      dark: {
        background: "#293241",
        primary: "#09BDED",
        white: "#FAF9F9",
        background: "#293241",
        nav: "#343C4A",
        text: "#FAF9F9"
      },
      light: {
        background: "#FAF9F9",
        primary: "#09BDED",
        white: "#FAF9F9",
        background: "#FAF9F9",
        nav: "#F4F4F8",
        text: "#293241"
      }
    }
  }
})
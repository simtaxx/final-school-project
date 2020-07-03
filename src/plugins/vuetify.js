import "@fortawesome/fontawesome-free/css/all.css"
import Vue from "vue"
import Vuetify from "vuetify/lib"

Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: "fa"
  },
  theme: {
    themes: {
      dark: {
        primary: "#09BDED",
        white: "#FAF9F9",
        nav: "#343C4A",
        text: "#FAF9F9",
        tweet: "#15202B"
      },
      light: {
        primary: "#09BDED",
        white: "#FAF9F9",
        nav: "#F4F4F8",
        text: "#293241",
        tweet: "#FFFFFF"
      }
    },
    options: {
      customProperties: true
    }
  }
})

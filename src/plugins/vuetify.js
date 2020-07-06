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
        background: "#293241",
        primary: "#09BDED",
        white: "#FAF9F9",
        nav: "#343C4A",
        text: "#FAF9F9",
        tweet: "#15202B",
        modal: "#545B67",
        success: "#64C926"
      },
      light: {
        background: "#FAF9F9",
        primary: "#09BDED",
        white: "#FAF9F9",
        nav: "#F4F4F8",
        text: "#293241",
        tweet: "#FFFFFF",
        modal: "#F4F4F8",
        success: "#64C926"
      }
    },
    options: {
      customProperties: true
    }
  }
})

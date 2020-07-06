<template lang="pug">
  div(:class="$style.signIn")
    h2 Connecte toi à #[span Kiwitas]
      p ou #[router-link(to="/sign-up") inscris-toi]
    v-form(:class="$style.form" ref="form" v-model="valid" @submit.prevent="getUser")
      v-text-field(v-model="email" :rules="emailRules" label="E-mail exemple@gmail.com" outlined required)
      v-text-field(v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="passwordRules" :type="show1 ? 'text' : 'password'" @click:append="show1 = !show1" label="Mot de passe" outlined required)
      v-btn(:disabled="!valid" color="primary"  @click="getUser") Je me connecte
</template>

<script>
export default {
  name: "SignIn",
  data: () => ({
    valid: true,
    email: "",
    show1: false,
    emailRules: [
      v => !!v || "Une adresse e-mail est requis",
      v => /.+@.+\..+/.test(v) || "Votre addresse e-mail semble incorrecte"
    ],
    password: "",
    passwordRules: [
      v => !!v || "Un mot de passe est requis",
      v => v.length >= 8 || "Votre mot de passe doit contenir au moins 8 caractères"
    ]
  }),

  methods: {
    validate() {
      this.$refs.form.validate()
    },
    async getUser() {
      const getUserData = await this.$http.get("/users/15").then(response => {
        this.$store.dispatch("getAccountData", response.data)
        console.log(this.$store.state.accountData)
        this.$router.push("/")
      })
    }
    /* async getUser() {
      const { email, password } = this
      this.validate()
      const getUserData = await this.$http
        .post("/login_check", {
          email,
          password
        })
        .then(response => {
          console.log(response)
          if (response.status === 200) {
            //this.$router.push("/")
            this.$store.dispatch("getAccountData", response)
            console.log(this.$store.state.accountData)
          }
        })
        .catch(e => {
          console.log(e)
        })
    } */
  }
}
</script>

<style lang="scss" module>
@import "@/scss/core/colors.scss";
.signIn {
  h2 {
    position: relative;
    width: max-content;
    margin: 100px auto 110px;

    p {
      position: absolute;
      left: 0;
      color: $greyDarken;
      font-size: 18px;

      a {
        text-decoration: underline;
        font-weight: 800;
      }
    }
  }
  .form {
    text-align: center;
    margin: 0 auto;
    width: 400px;
  }
}
@media (max-width: 600px) {
  .form {
    width: 100% !important;
  }
}
</style>

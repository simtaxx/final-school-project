import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"
import jwt_decode from "jwt-decode"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountData: {},
    isLoged: false
  },
  mutations: {
    getAccountData(state, data) {
      state.accountData = data
    },
    setIsLoged(state, bool) {
      state.isLoged = bool
    }
  },
  actions: {
    getLocalUserData({ commit }, data) {
      commit("getAccountData", data.localUser)
    },
    async getAccountData({ commit, state }, { email, password }) {
      const getUserToken = await Axios.post("/login_check", { email, password })
        .then(response => {
          if (response.status === 200) {
            return response.data.token
          }
        })
        .catch(e => {
          console.log(e)
        })
      if (getUserToken !== undefined) {
        const idUser = jwt_decode(getUserToken).user
        const getUserData = await Axios.get(`/user/${idUser}`).then(response => {
          return response.data
        })
        localStorage.setItem("userLog", JSON.stringify(getUserData))
        localStorage.setItem("userIsAuth", JSON.stringify(state.isLoged))
        commit("getAccountData", getUserData)
        commit("setIsLoged", true)
      } else {
        commit("setIsLoged", false)
      }
    }
  },
  getters: {
    hasData: state => {
      return state.accountData.id === undefined ? false : true
    },
    isLoged: state => {
      return state.isLoged === false ? false : true
    }
  },
  modules: {}
})

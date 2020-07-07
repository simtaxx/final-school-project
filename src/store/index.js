import Vue from "vue"
import Vuex from "vuex"
import Axios from "axios"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountData: {}
  },
  mutations: {
    getAccountData(state, data) {
      state.accountData = data
    }
  },
  actions: {
    getAccountData({ commit }) {
      console.log(Axios.get)
      Axios.get("/users/15").then(response => {
        commit("getAccountData", response.data)
      })
    }
  },
  getters: {
    hasData: state => {
      return state.accountData.id === undefined ? false : true
    }
  },
  modules: {}
})

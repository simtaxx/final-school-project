import Vue from "vue"
import Vuex from "vuex"

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
    getAccountData({ commit }, data) {
      commit("getAccountData", data)
    }
  },
  modules: {}
})

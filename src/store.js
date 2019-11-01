import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: 'Original Title'
  },
  mutations: {
    setTitle (state, payload) {
      state.title = payload
    }
  },
  actions: {

  }
})

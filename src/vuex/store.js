import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT (state, num) {
    state.count += num
    console.log(state)
  }
}

export default new Vuex.Store({
  state,
  mutations
})

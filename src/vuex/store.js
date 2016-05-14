import Vue from 'vue'
import Vuex from 'vuex'
import createTransit from 'src/components/driver/vuex/createTransit'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    createTransit
  }
})

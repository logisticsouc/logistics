import Vue from 'vue'
import Vuex from 'vuex'
import createTransit from 'src/components/driver/vuex/createTransit'
import driverTransitDetail from 'src/components/driver/vuex/driverTransitDetail'
import driverTransitList from 'src/components/driver/vuex/driverTransitList'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    createTransit,
    driverTransitDetail,
    driverTransitList
  }
})

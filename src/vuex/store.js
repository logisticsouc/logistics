import Vue from 'vue'
import Vuex from 'vuex'
import createTransit from 'src/components/driver/vuex/createTransit'
import driverTransitDetail from 'src/components/driver/vuex/driverTransitDetail'
import driverTransitList from 'src/components/driver/vuex/driverTransitList'
import searchCompany from 'src/components/driver/vuex/searchCompany'
import searchGoods from 'src/components/driver/vuex/searchGoods'
import driverTransitListFilter from 'src/components/driver/vuex/driverTransitListFilter'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    createTransit,
    driverTransitDetail,
    driverTransitList,
    searchCompany,
    searchGoods,
    driverTransitListFilter
  }
})

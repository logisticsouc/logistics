import Vue from 'vue'
import Vuex from 'vuex'
// 司机运单模块
import createTransit from 'src/components/driver/vuex/createTransit'
import driverTransitDetail from 'src/components/driver/vuex/driverTransitDetail'
import driverTransitList from 'src/components/driver/vuex/driverTransitList'
import searchCompany from 'src/components/driver/vuex/searchCompany'
import searchGoods from 'src/components/driver/vuex/searchGoods'
import driverTransitListFilter from 'src/components/driver/vuex/driverTransitListFilter'
// 会计模块
import accountUncheckList from 'src/components/account/vuex/accountUncheckList'
import accountUncheckDetail from 'src/components/account/vuex/accountUncheckDetail'
import accountCenter from 'src/components/account/vuex/accountCenter'
import accountCheckedList from 'src/components/account/vuex/accountCheckedList'
import accountCheckedDetail from 'src/components/account/vuex/accountCheckedDetail'
import accountPricedList from 'src/components/account/vuex/accountPricedList'
import accountPricedDetail from 'src/components/account/vuex/accountPricedDetail'
import accountUnpriceList from 'src/components/account/vuex/accountUnpriceList'
import accountUnpriceDetail from 'src/components/account/vuex/accountUnpriceDetail'
Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    createTransit,
    driverTransitDetail,
    driverTransitList,
    searchCompany,
    searchGoods,
    driverTransitListFilter,
    accountUncheckList,
    accountUncheckDetail,
    accountCenter,
    accountCheckedList,
    accountCheckedDetail,
    accountPricedList,
    accountPricedDetail,
    accountUnpriceDetail,
    accountUnpriceList
  }
})

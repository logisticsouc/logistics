import {
  RESET_DRIVER_TRANSIT_FILTERS,
  SUBMIT_DRIVER_TRANSIT_FILTERS,
  ADD_DRIVER_TRANSIT_FILTER_INFO
} from 'src/vuex/types'
require('src/utils/date')
const state = {
  transitFilter: {
    topTimeFilter: (new Date()).Format('YYYY-MM-DD'),
    startCompanyFilter: '',
    GoodsFilter: '',
    endTimeFilter: (new Date()).Format('YYYY-MM-DD'),
    stopCompanyFilter: ''
  }
}
const mutations = {
  [RESET_DRIVER_TRANSIT_FILTERS] (state) {
    state.transitFilter = {
      topTimeFilter: (new Date()).Format('YYYY-MM-DD'),
      startCompanyFilter: '',
      goodsFilter: '',
      endTimeFilter: (new Date()).Format('YYYY-MM-DD'),
      stopCompanyFilter: ''
    }
  },
  [SUBMIT_DRIVER_TRANSIT_FILTERS] (state, data) {
    state.transitFilter = data
  },
  [ADD_DRIVER_TRANSIT_FILTER_INFO] (state, option, value) {
    state.transitFilter[option] = value
  }
}
export default {
  state,
  mutations
}

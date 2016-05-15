import {
  RESET_TRANSIT,
  SUBMIT_TRANSIT,
  ADD_TRANSIT_INFO
} from 'src/vuex/types'
require('src/utils/date')
const state = {
  transit: {
    startTime: (new Date()).Format('YYYY-MM-DD'),
    startCompany: '',
    startGoods: '',
    startWeight: 0,
    stopTime: (new Date()).Format('YYYY-MM-DD'),
    stopCompany: '',
    stopGoods: '',
    stopWeight: 0
  }
}
const mutations = {
  [RESET_TRANSIT] (state) {
    state.transit = {
      startTime: (new Date()).Format('YYYY-MM-DD'),
      startCompany: '',
      startGoods: '',
      startWeight: 0,
      stopTime: (new Date()).Format('YYYY-MM-DD'),
      stopCompany: '',
      stopGoods: '',
      stopWeight: 0
    }
  },
  [SUBMIT_TRANSIT] (state, data) {
    state.transit = data
  },
  [ADD_TRANSIT_INFO] (state, option, value) {
    state.transit[option] = value
  }
}
export default {
  state,
  mutations
}

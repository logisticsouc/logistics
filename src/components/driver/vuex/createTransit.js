import {
  RESET_TRANSIT,
  SUBMIT_TRANSIT
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
    state.transit = {}
  },
  [SUBMIT_TRANSIT] (state, data) {
    state.transit = data
  }
}
export default {
  state,
  mutations
}

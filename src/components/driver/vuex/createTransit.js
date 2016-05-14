import {
  RESET_TRANSIT,
  SUBMIT_TRANSIT
} from 'src/vuex/types'

const state = {
  transit: {
    startTime: '',
    startCompany: '中国海洋大学',
    startGoods: '硫酸',
    startWeitht: 0,
    stopTime: '',
    stopCompany: '青岛市政府',
    stopGoods: '硫酸',
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

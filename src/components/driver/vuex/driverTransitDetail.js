import {
  DRIVER_TRANSIT_DETAIL,
  GET_DRIVER_TRANSIT_DETAIL_FAILURE
} from 'src/vuex/types'
const state = {
  item: {}
}
const mutations = {
  [DRIVER_TRANSIT_DETAIL] (state, action) {
    state.item = {...action.driverTransitDetail}
  },
  [GET_DRIVER_TRANSIT_DETAIL_FAILURE] (state) {
    state.item = {
      id: 1,
      from_weight: 45
    }
  }
}
export default {
  state,
  mutations
}

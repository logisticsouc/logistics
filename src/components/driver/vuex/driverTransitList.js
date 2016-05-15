import {
  DRIVER_TRANSIT_LIST,
  GET_DRIVER_TRANSIT_LIST_FAILURE
} from 'src/vuex/types'
const state = {
  isFetching: false,
  items: [{
    id: 4,
    status: false
  }, {
    id: 5,
    status: true
  }],
  isMore: true
}
const mutations = {
  [DRIVER_TRANSIT_LIST] (state, action) {
    state.isFetching = false
    state.isMore = action.isMore
    state.items = action.driverTransitList
  },
  [GET_DRIVER_TRANSIT_LIST_FAILURE] (state) {
    state.isFetching = false
  }
}
export default {
  state,
  mutations
}

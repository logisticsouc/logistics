import {
  ACCOUNT_UNCHECK_DETAIL,
  GET_ACCOUNT_UNCHECK_DETAIL_FAILURE
} from 'src/vuex/types'
const state = {
  item: {}
}
const mutations = {
  [ACCOUNT_UNCHECK_DETAIL] (state, data) {
    state.item = data
  },
  [GET_ACCOUNT_UNCHECK_DETAIL_FAILURE] () {
    state.item = {}
  }
}
export default {
  state,
  mutations
}

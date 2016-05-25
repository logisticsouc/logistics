import {
  ACCOUNT_PRICED_DETAIL,
  GET_ACCOUNT_PRICED_DETAIL_FAILURE
} from 'src/vuex/types'

const state = {
  item: {}
}
const mutations = {
  [ACCOUNT_PRICED_DETAIL] (state, item) {
    state.item = item
  },
  [GET_ACCOUNT_PRICED_DETAIL_FAILURE] (state) {
    state.item = {}
  }
}
export default {
  state,
  mutations
}

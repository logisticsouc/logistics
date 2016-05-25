import {
  ACCOUNT_CHECKED_DETAIL,
  GET_ACCOUNT_CHECKED_DETAIL_FAILURE
} from 'src/vuex/types'

const state = {
  item: {}
}
const mutations = {
  [ACCOUNT_CHECKED_DETAIL] (state, item) {
    state.item = item
  },
  [GET_ACCOUNT_CHECKED_DETAIL_FAILURE] (state) {
    state.item = {}
  }
}
export default {
  state,
  mutations
}

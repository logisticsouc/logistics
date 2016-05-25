import {
  ACCOUNT_PRICED_LIST,
  GET_ACCOUNT_PRICED_LIST_FAILURE
} from 'src/vuex/types'

const state = {
  list: []
}
const mutations = {
  [ACCOUNT_PRICED_LIST] (state, list) {
    state.list = list
  },
  [GET_ACCOUNT_PRICED_LIST_FAILURE] (state) {
    state.list = []
  }
}
export default {
  state,
  mutations
}

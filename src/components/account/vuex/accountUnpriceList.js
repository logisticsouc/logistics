import {
  ACCOUNT_UNPRICE_LIST,
  GET_ACCOUNT_UNPRICE_LIST_FAILURE
} from 'src/vuex/types'

const state = {
  list: []
}
const mutations = {
  [ACCOUNT_UNPRICE_LIST] (state, list) {
    state.list = list
  },
  [GET_ACCOUNT_UNPRICE_LIST_FAILURE] (state) {
    state.list = []
  }
}
export default {
  state,
  mutations
}

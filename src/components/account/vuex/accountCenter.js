import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT
} from 'src/vuex/types'

const state = {
  user: {}
}
const mutations = {
  [ACCOUNT_LOGIN] (state, user) {
    state.user = user
  },
  [ACCOUNT_LOGOUT] (state) {
    state.user = {}
  }
}
export default {
  state,
  mutations
}

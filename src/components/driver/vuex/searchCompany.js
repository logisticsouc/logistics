import {
  SEARCH_COMPANGY_LIST,
  SEARCH_COMPANGY_LIST_FAILURE
} from 'src/vuex/types'

const state = {
  recentItems: [{name: '中国海洋大学'}, {name: '青岛科技大学'}],
  allItems: [{name: '中国海洋大学'}, {name: '青岛科技大学'}, {name: '中国科学院'}]
}
const mutations = {
  [SEARCH_COMPANGY_LIST] (state, action) {
    state.allItems = action.companyList
  },
  [SEARCH_COMPANGY_LIST_FAILURE] (state) {
    state.recentItems = []
    state.allItems = []
  }
}
export default {
  state,
  mutations
}

import {
  SEARCH_GOODS_LIST,
  SEARCH_GOODS_LIST_FAILURE
} from 'src/vuex/types'

const state = {
  recentItems: [{name: '硫酸'}, {name: 'TNT'}],
  allItems: [{name: '蒸馏水'}, {name: '硫酸'}, {name: '石灰石'}]
}
const mutations = {
  [SEARCH_GOODS_LIST] (state, action) {
    state.allItems = action.goodsList
  },
  [SEARCH_GOODS_LIST_FAILURE] (state) {
    state.recentItems = []
    state.allItems = []
  }
}
export default {
  state,
  mutations
}

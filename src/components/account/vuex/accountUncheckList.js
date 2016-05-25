/* eslint-disable*/
import {
  ACCOUNT_UNCHECK_LIST,
  GET_ACCOUNT_UNCHECK_LIST_FAILURE
} from 'src/vuex/types'
const state = {
  item: [{
        "url": "http://121.249.216.217:8888/api/transport/transit_status/2/",
        "id": 2,
        "transit": {
            "url": "http://121.249.216.217:8888/api/transport/transit/7/",
            "id": 7,
            "user": "sz",
            "vehicle": "鲁B 123456",
            "from_company": {
                "url": "http://121.249.216.217:8888/api/transport/company/4/",
                "name": "青岛三诺有限责任公司",
                "address": "青岛市市北区"
            },
            "from_weight": 23,
            "to_company": {
                "url": "http://121.249.216.217:8888/api/transport/company/3/",
                "name": "中国海洋大学",
                "address": "松龄路"
            },
            "to_weight": 21,
            "goods": {
                "url": "http://121.249.216.217:8888/api/transport/goods/1/",
                "name": "硫酸",
                "model": "80%"
            },
            "start": null,
            "end": null,
            "status": true
        },
        "user": "http://121.249.216.217:8888/api/transport/user/1/",
        "is_check": true,
        "created": "2016-04-13T06:44:29.582193Z",
        "modified": "2016-04-13T06:44:29.587465Z"
    }]
}
const mutations = {
  [ACCOUNT_UNCHECK_LIST] (state, data) {
    state.item = data
  },
  [GET_ACCOUNT_UNCHECK_LIST_FAILURE] () {
    state.item = []
  }
}
export default {
  state,
  mutations
}

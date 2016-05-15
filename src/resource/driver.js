import {DriverResource} from './resourceConfig'

export default {
  // 司机创建新运单信息
  submitTransit: function (data) {
    return DriverResource.save({controller: 'transit'}, data)
  },
  // 司机获取运单详情
  getTransitDetail: function (id) {
    return DriverResource.get({controller: 'transit', id: id})
  },
  // 司机获取运单列表
  getTransitList: function () {
    return DriverResource.get({controller: 'transit'})
  }
}

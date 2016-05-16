import {DriverResource, TransportResource} from './resourceConfig'

export default {
  // 司机创建新运单信息
  submitTransit: function (data) {
    return DriverResource.save({controller: 'transit'}, data)
  },
  // 司机获取运单详情
  getTransitDetail: function (id) {
    return DriverResource.get({controller: 'transit', id: id})
  },
  // 司机获取运单列表getTransitList
  getTransitList: function (options) {
    return DriverResource.get({controller: 'transit'}, options)
  },
  // 司机搜索公司信息
  searchCompany: function (argument) {
    return TransportResource.get({controller: 'company'}, {company: argument})
  },
  searchGoods: function (argument) {
    return TransportResource.get({controller: 'goods'}, {goods: argument})
  }
}

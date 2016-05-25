// import {AccountResource} from './resourceConfig'
import {AccountResource, TransportResource} from './resourceConfig'
export default {
  // -----------------------------会计个人审查部分------------------------
  // 会计获取个人已审核列表
  getAccountCheckedList: function () {
    return AccountResource.get({controller: 'transit_status'})
  },
  // 会计提交审核信息
  submitCheckInfo: function (data) {
    return AccountResource.save({controller: 'transitstatusedit'}, data)
  },
  // 会计获取个人已审核详细信息
  getAccountCheckedDetail: function (id) {
    return AccountResource.get({controller: 'transit_status', id: id})
  },
  // -----------------------------会计个人定价部分------------------------
  // 会计获取个人定价列表
  getAccountPricedList: function () {
    return AccountResource.get({controller: 'transit_price'})
  },
  // 会计提交定价信息
  submitPriceInfo: function (data) {
    return AccountResource.save({controller: 'transitpriceedit'}, data)
  },
  // 会计获取个人定价详细信息
  getAccountPricedDetail: function (id) {
    return AccountResource.get({controller: 'transit_price', id: id})
  },
  // -----------------------------会计个人公司运输核算部分------------------------
  // 会计个人公司运输核算列表信息
  getAccountCompanyFundList: function () {
    return AccountResource.get({controller: 'company_fund'})
  },
  // 会计提交公司运输核算信息
  submitAccountCompanyFund: function (data) {
    return AccountResource.save({controller: 'company_fund'}, data)
  },
  // 会计个人公司运输核算详细信息
  getAccountCompanyFundDetail: function (id) {
    return AccountResource.get({controller: 'company_fund', id: id})
  },
  // -----------------------------会计获取未处理运单信息部分------------------------
  // 会计获取待审核列表
  getUncheckList: function () {
    return TransportResource.get({controller: 'transit_uncheck'})
  },
  // 会计获取已经审核但未定价的运输列表信息
  getUnpriceList: function () {
    return TransportResource.get({controller: 'transit_unprice'})
  }
}

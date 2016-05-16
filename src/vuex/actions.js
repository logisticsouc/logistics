import * as types from './types'
import $ from 'zepto'
import driverApi from 'src/resource/driver'
// 司机创建运单进行重置
export const resetTransit = ({dispatch}) => {
  dispatch(types.RESET_TRANSIT)
}
// 司机添加单条信息
export const addTransitInfo = ({dispatch}, option, value) => {
  dispatch(types.ADD_TRANSIT_INFO, option, value)
}
// 司机提交运单信息
export const submitTransit = (store, data) => {
  driverApi.submitTransit(data).then(response => {
    $.toast('提交成功')
  }, response => {
    $.toast('提交失败', 1000)
  })
}
// 司机查看运单详情页面
export const getTransitDetail = ({dispatch}, id) => {
  driverApi.getTransitDetail(id).then(response => {
    if (response.ok) {
      let transit = response
      dispatch(types.DRIVER_TRANSIT_DETAIL, {
        driverTransitDetail: {
          ...transit
        }
      })
    }
  }, response => {
    dispatch(types.GET_DRIVER_TRANSIT_DETAIL_FAILURE)
  })
}
// 司机获取订单列表信息
export const getTransitList = ({dispatch}, options) => {
  driverApi.getTransitList(options).then(response => {
    const list = response.results
    const isMore = false
    dispatch(types.DRIVER_TRANSIT_LIST, {
      isMore: isMore,
      driverTransitList: list
    })
  }, response => {
    dispatch(types.GET_DRIVER_TRANSIT_LIST_FAILURE)
  })
}
// 司机搜索公司列表信息
export const searchCompany = ({dispatch}, data) => {
  driverApi.searchCompany(data).then(response => {
    let list = response.results
    dispatch(types.SEARCH_COMPANGY_LIST, {
      companyList: list
    })
  }, response => {
    dispatch(types.SEARCH_COMPANGY_LIST_FAILURE)
  })
}
// 司机搜索货物列表信息
export const searchGoods = ({dispatch}, data) => {
  driverApi.searchGoods(data).then(response => {
    let list = response.results
    dispatch(types.SEARCH_GOODS_LIST, {
      companyList: list
    })
  }, response => {
    dispatch(types.SEARCH_GOODS_LIST_FAILURE)
  })
}
// 司机添加筛选条件
export const addTransitFilterInfo = ({dispatch}, option, value) => {
  dispatch(types.ADD_DRIVER_TRANSIT_FILTER_INFO, option, value)
}

export const getTransitListFilter = ({dispatch}, options) => {
  driverApi.getTransitList(options).then(response => {
    const list = response.results
    const isMore = false
    dispatch(types.DRIVER_TRANSIT_LIST, {
      isMore: isMore,
      driverTransitList: list
    })
  }, response => {
    dispatch(types.GET_DRIVER_TRANSIT_LIST_FAILURE)
  })
}
export const resetTransitListFilter = ({dispatch}) => {
  dispatch(types.RESET_DRIVER_TRANSIT_FILTERS)
}

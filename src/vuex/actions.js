import * as types from './types'
import $ from 'zepto'
import driverApi from 'src/resource/driver'
// 司机创建运单进行重置
export const resetTransit = ({dispatch}) => {
  dispatch(types.RESET_TRANSIT)
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

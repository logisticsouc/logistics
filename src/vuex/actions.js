import * as types from './types'
import $ from 'zepto'
import driverApi from 'src/resource/driver'
import accountApi from 'src/resource/account'
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
  console.log(store)
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
    let list = response.results
    let isMore = false
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
// --------------------------------会计相关的操作-------------------------------
// 会计提交运单审核信息
export const submitCheckInfo = ({dispatch}, data) => {
  accountApi.submitCheckInfo(data).then(response => {
    $.toast('提交成功')
  }, response => {
    $.toast(response.detail)
  })
}
// 会计获取个人审核过运输列表
export const getAccountCheckedList = ({dispatch}) => {
  accountApi.getAccountCheckedList().then(response => {
    let list = response
    dispatch(types.ACCOUNT_CHECKED_LIST, {
      checkedList: list
    }, response => {
      $.toast('列表未能成功加载')
      dispatch(types.GET_ACCOUNT_CHECKED_LIST_FAILURE)
    })
  })
}
// 会计获取个人审核过运输单详情
export const getAccountCheckedDetail = ({dispatch}, id) => {
  accountApi.getAccountCheckedDetail(id).then(response => {
    dispatch(types.ACCOUNT_CHECKED_DETAIL, {
      response
    }, response => {
      $.toast('加载信息失败')
      dispatch(types.GET_ACCOUNT_CHECKED_DETAIL_FAILURE)
    })
  })
}
// 会计获取个人定价列表
export const getAccountPricedList = ({dispatch}) => {
  accountApi.getAccountPricedList().then(response => {
    let list = response
    dispatch(types.ACCOUNT_PRICED_LIST, {
      unpricedList: list
    }, response => {
      $.toast('请求失败')
      dispatch(types.GET_ACCOUNT_PRICED_LIST_FAILURE)
    })
  })
}
// 会计个人获取定价详情
export const getAccountPricedDetail = ({dispatch}, id) => {
  accountApi.getAccountPricedDetail(id).then(response => {
    let item = response
    dispatch(types.ACCOUNT_PRICED_DETAIL, {
      accountPricedDetail: item
    }, response => {
      dispatch(types.GET_ACCOUNT_PRICED_DETAIL_FAILURE)
    })
  })
}
// 会计提交运单定价信息
export const submitPriceInfo = ({dispatch}, data) => {
  accountApi.submitPriceInfo(data).then(response => {
    $.toast('定价已经同步到服务器')
  }, response => {
    $.toast('定价信息提交失败')
  })
}
// 会计个人公司运输核算列表信息
export const getAccountCompanyFundList = ({dispatch}) => {
  accountApi.getAccountCompanyFundList().then(response => {
    let list = response
    dispatch(types.ACCOUNT_COMPANY_FUND_LIST, {
      accountCompanyFundList: list
    }, response => {
      $.toast('数据加载失败')
      dispatch(types.GET_ACCOUNT_COMPANY_FUND_LIST_FAILURE)
    })
  })
}
// 会计获取未审核列表信息
export const getAccountUncheckList = ({dispatch}) => {
  accountApi.getUncheckList().then(response => {
    let list = response
    dispatch(types.ACCOUNT_UNCHECK_LIST, {
      accountUncheckList: list
    }, response => {
      dispatch(types.GET_ACCOUNT_UNCHECK_LIST_FAILURE)
    })
  })
}
// 会计获取未定价列表信息
export const getAccountUnpriceList = ({dispatch}) => {
  accountApi.getUnpriceList().then(response => {
    let list = response
    dispatch(types.ACCOUNT_UNPRICE_LIST, {
      accountUncheckList: list
    }, response => {
      $.toast('请求列表失败')
      dispatch(types.GET_ACCOUNT_UNPRICE_LIST_FAILURE)
    })
  })
}

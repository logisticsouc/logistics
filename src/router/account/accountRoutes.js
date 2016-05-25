export default function (router) {
  // account map
  router.map({
    'accountUncheckList': {
      component: require('src/components/account/AccountUncheckList.vue')
    },
    'accountUncheckList/:id': {
      component: require('src/components/account/AccountUncheckDetail.vue')
    },
    'accountCenter': {
      component: require('src/components/account/AccountCenter.vue')
    },
    'accountCheckedList': {
      component: require('src/components/account/AccountCheckedList.vue')
    },
    'accountCheckedList/:id': {
      component: require('src/components/account/AccountCheckedDetail.vue')
    },
    'accountHome': {
      component: require('src/components/account/AccountHome.vue')
    },
    'accountPricedList': {
      component: require('src/components/account/AccountPricedList.vue')
    },
    'accountPricedList/:id': {
      component: require('src/components/account/AccountPricedDetail.vue')
    },
    'accountUnpriceList': {
      component: require('src/components/account/AccountUnpriceList.vue')
    },
    'accountUnpriceList/:id': {
      component: require('src/components/account/AccountUnpriceDetail.vue')
    }
  })
}

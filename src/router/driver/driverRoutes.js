export default function (router) {
  // driver map
  router.map({
    // '/driverHome': {
    //   component: require()
    // },
    '/searchCompany/:place': {
      component: require('src/components/driver/SearchCompany.vue')
    },
    '/searchGoods/:place': {
      component: require('src/components/driver/SearchGoods.vue')
    },
    '/createTransit': {
      component: require('src/components/driver/CreateTransit.vue')
    },
    '/driverTransitList': {
      component: require('src/components/driver/DriverTransitList.vue')
    },
    '/driverTransitList/:id': {
      component: require('src/components/driver/DriverTransitDetail.vue')
    },
    '/driverTransitList/filter': {
      component: require('src/components/driver/DriverTransitListFilter.vue')
    },
    '/createRefuel': {
      component: require('src/components/driver/CreateRefuel.vue')
    }
    // '/driverRefuel': {
    //   component: require()
    // },
    // '/driverRefuelList': {
    //   component: require()
    // },
    // '/driverRefuelList/:id': {
    //   component: require()
    // },
    // '/driverRefuelList/filter': {
    //   component: require()
    // },
    // '/createRepairCar': {
    //   component: require()
    // },
    // '/driverRepairCarList': {
    //   component: require()
    // },
    // '/driverRepairCarList/:id': {
    //   component: require()
    // },
    // '/driverRepairCarList/filter': {
    //   component: require()
    // }
  })
}

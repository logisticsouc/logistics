export default function (router) {
  // driver map
  router.map({
    '/driverHome': {
      component: require()
    },
    '/search/company': {
      component: require()
    },
    '/search/goods': {
      component: require()
    },
    '/createTransit': {
      component: require()
    },
    '/driverTransitList': {
      component: require()
    },
    '/driverTransitList/:id': {
      component: require()
    },
    'driverTransitList/filter': {
      component: require()
    },
    'createRefuel': {
      component: require()
    },
    'driverRefuel': {
      component: require()
    },
    'driverRefuelList': {
      component: require()
    },
    'driverRefuelList/:id': {
      component: require()
    },
    'driverRefuelList/filter': {
      component: require()
    },
    'createRepairCar': {
      component: require()
    },
    'driverRepairCarList': {
      component: require()
    },
    'driverRepairCarList/:id': {
      component: require()
    },
    'driverRepairCarList/filter': {
      component: require()
    }
  })
}

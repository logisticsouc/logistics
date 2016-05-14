import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import driverConfig from './router/driver/driverRoutes'
Vue.use(VueRouter)

const router = new VueRouter({
  history: false,
  hashbang: false
})
sync(store, router)
driverConfig(router)

router.start(App, '#app')
window.router = router


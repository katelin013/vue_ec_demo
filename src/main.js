import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

// 導入 View router
Vue.use(VueRouter)

Vue.config.productionTip = false

// 導入 Component
import HomeView from './components/HomeView/HomeView.vue'
import AssortView from './components/AssortView/AssortView.vue'
import SearchView from './components/SearchView/SearchView.vue'
import CartView from './components/CartView/CartView.vue'
import UserView from './components/UserView/UserView.vue'

// // 定義 route rule
var routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/assort', component: AssortView },
  { path: '/search', component: SearchView },
  { path: '/cart', component: CartView },
  { path: '/user', component: UserView }
]

// // 創建 router
var router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 增加 router
  router,
}).$mount('#app')

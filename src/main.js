import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'

// 導入 Vue router
Vue.use(VueRouter)
// 導入 Vuex
Vue.use(Vuex)
Vue.config.productionTip = false

//狀態定義
var store = new Vuex.Store({
  state: {
    productShow: false,
    product_id: 0
  },
  mutations: {
    changeProductShow(state, payload) {
      state.productShow = payload.isShow;
      state.product_id = payload.product_id;
    }
  }
})

// 導入 Component
import HomeView from './components/HomeView/HomeView.vue'
import AssortView from './components/AssortView/AssortView.vue'
import SearchView from './components/SearchView/SearchView.vue'
import CartView from './components/CartView/CartView.vue'
import UserView from './components/UserView/UserView.vue'
import ProductView from './components/ProductView/ProductView.vue'

// // 定義 route rule
var routes = [
  { path: '/', component: HomeView },
  { path: '/home', component: HomeView },
  { path: '/assort', component: AssortView },
  { path: '/search', component: SearchView },
  { path: '/cart', component: CartView },
  { path: '/user', component: UserView },
  { path: '/product', component: ProductView }
]

// // 創建 router
var router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  // 增加 router
  router,
  store,
}).$mount('#app')

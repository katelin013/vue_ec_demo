<template>
  <div id="app">
    <!-- Header 導航 -->
    <van-nav-bar
      v-show="navViewIsShow"
      :title="title"
    />

    <!-- 內容 -->
    <router-view
      @onTitle="changeTitle"
      @onNavShow="showNavView"
      @onTabBarShow="showTabBar"
    ></router-view>

    <!-- 底部菜單 -->
    <TabbarView v-show="tabBarisShow"></TabbarView>
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar, Lazyload } from 'vant';
import TabbarView from './components/TabbarView/TabbarView.vue'

// 如果有需要可以加上讀取失敗的圖片 & 讀取時的圖片
Vue.use(Lazyload, {
  preLoad: 1.3,
  // error: 'dist/error.png',
  // loading: 'dist/loading.gif',
  attempt: 3
})

export default {
  name: 'App',
  components: {
    TabbarView,
    [NavBar.name]:NavBar,
  },
  data(){
    return {
      title: '標題',
      navViewIsShow: true,
      tabBarisShow: true,
    }
  },
  methods:{
    changeTitle(title){
      this.title = title
    },
    showNavView(isShow){
      this.navViewIsShow = isShow
    },
    showTabBar(isShow){
      this.tabBarisShow = isShow
    }
  }
}
</script>

<style lang="scss">

  .van-nav-bar{
    background-color: red;
    height: 2.5rem;
    color: white;
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    line-height: 2.5rem;
    .van-nav-bar__title{
      color: white;
      font-weight: 700;
      font-size: 1rem;
    }
    .van-nav-bar__arrow{
      color: white;
      font-size: 1rem;
    }
  }

  /* transition name="xxx"
      xxx-enter         進入過渡的開始狀態
      xxx-enter-to      過渡的結束狀態
      xxx-enter-active  過渡時間, 延遲, 曲線

      xxx-leave         離開過渡的開始狀態
      xxx-leave-to      離開過渡的結束狀態
      xxx-leave-active  離開過渡時間, 延遲, 曲線
   */

   .slider-right-enter-active,
   .slider-right-leave-active{
     transition: all 1s ease;
   }

   .slider-right-enter,
   .slider-right-leave-to{
     transform: translateX(100%);
   }
</style>

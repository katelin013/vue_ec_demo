<template>
  <div id="app">
    <!-- Header 導航 -->
    <van-nav-bar
      v-show="navViewIsShow"
      :title="title"
      fixed
    />

    <!-- 內容 -->
    <router-view
      @onTitle="changeTitle"
      @onNavShow="showNavView"
    ></router-view>

    <!-- 底部菜單 -->
    <TabbarView></TabbarView>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import TabbarView from './components/TabbarView/TabbarView.vue'

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
    }
  },
  methods:{
    changeTitle(title){
      this.title = title
    },
    showNavView(isShow){
      this.navViewIsShow = isShow

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
  }

</style>

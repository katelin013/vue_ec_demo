<template>
  <div id="app">
    <!-- Header 導航 -->
    <NavView></NavView>

    <!-- 內容 -->
    <router-view></router-view>

    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>

    <!-- 底部菜單 -->
    <!-- <TabbarView></TabbarView> -->
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" badge="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" badge="20">标签</van-tabbar-item>
    </van-tabbar>


  </div>
</template>

<script>
import NavView from './components/NavView/NavView.vue'
// import TabbarView from './components/TabbarView/TabbarView.vue'
import { Tabbar, TabbarItem } from 'vant';
import { Button } from 'vant';


export default {
  name: 'App',
  components: {
    NavView,
    // TabbarView,
    [Button.name]:Button,
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  },
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style>

</style>

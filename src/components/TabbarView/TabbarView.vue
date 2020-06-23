<template>
  <div class="tabbar-view">
    <van-tabbar v-model="active">
      <van-tabbar-item to="/home" icon="home-o">首頁</van-tabbar-item>
      <van-tabbar-item to="/assort" icon="filter-o" dot>分類</van-tabbar-item>
      <van-tabbar-item to="/search" icon="search" badge="5">搜索</van-tabbar-item>
      <van-tabbar-item to="/cart" icon="shopping-cart-o" badge="20">購物車</van-tabbar-item>
      <van-tabbar-item to="/user" icon="friends-o" badge="20">個人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vant';

  export default {
    name:'tabbarView',
    components: {
      [Tabbar.name]:Tabbar,
      [TabbarItem.name]:TabbarItem
    },
    data(){
      return {
        active: 0,
      }
    },
    // active = tabbar item's position
    watch: {
      active(value){
        console.log('active',value)
      }
    }
  }
</script>
<style>

</style>

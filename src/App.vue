<template>
  <div id="app">
    <!-- Header 導航 -->
    <NavView></NavView>

    <!-- 內容 -->
    <router-view></router-view>

    <!-- 底部菜單 -->
    <TabbarView></TabbarView>

  </div>
</template>

<script>
import NavView from './components/NavView/NavView.vue'
import TabbarView from './components/TabbarView/TabbarView.vue'

export default {
  name: 'App',
  components: {
    NavView,
    TabbarView
  }
}
</script>

<style>

</style>

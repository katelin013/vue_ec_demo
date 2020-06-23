<template>
  <div class="winnow-view">
    <img class="banner" :src="bigImg">
    <div class="winnow-box">
      <WinnowItemView v-for='(item,index) in contentList' :key="index" :item="item">
      </WinnowItemView>
    </div>
  </div>
</template>

<script>
import WinnowItemView from "../WinnowItemView/WinnowItemView.vue"


export default {
  name: 'winnowView',
  props:['bigImg','contentList'],
  components:{
    WinnowItemView
  }
}
</script>

<style lang='scss'>
  .winnow-view{
    .banner{
      width: 100%;
    }
    .winnow-box{
      display:flex;
      overflow-x: auto;
      background: #f6f6f6;
    }
  }
</style>

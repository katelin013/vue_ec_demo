<template>
  <div class="recommend-view">
    <RecommendItemView v-for='(item,index) in recommendList' :key="index" :item="item">
    </RecommendItemView>
  </div>
</template>

<script>
import recommendList from '../../assets/json/recommend-list.json'
import RecommendItemView from './RecommendItemView.vue'

export default {
  name: 'recommendView',
  components:{
    RecommendItemView
  },
  data: function() {
    return{
      recommendList: recommendList,
    }
  }
}
</script>

<style lang='scss'>
  .recommend-view{
    width: 100%;
    // height: 20rem;
  }
</style>

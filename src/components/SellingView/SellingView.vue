<template>
  <div class="selling-view">
    <SellItemView
      v-for='(item,index) in selling_items' :key="index" :item="item"
    >
    </SellItemView>
  </div>
</template>

<script>
import sellingList from '../../assets/json/selling-list'
import SellItemView from '../SellItemView/SellItemView.vue'

export default {
  name: 'sellingView',
  components:{
    SellItemView
  },
  data: function() {
    return {
      selling_items: sellingList
    }
  }
}
</script>

<style lang='scss'>
  .selling-view{
    border-top: 0.065rem solid #bbbbbb;
    border-left: 0.065rem solid #bbbbbb;
    display:flex;
    flex-wrap: wrap;
  }
</style>

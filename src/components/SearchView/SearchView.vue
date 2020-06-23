<template>
  <div class="search-view">搜尋</div>
</template>

<script>
export default {
  name: 'searchView',
  data(){
    return{
      navVieShow: false
    }
  },
  created(){
    this.$emit('onNavShow', this.navVieShow)
  }
}
</script>

<style>

</style>

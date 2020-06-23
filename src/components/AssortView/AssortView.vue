<template>
  <div class="assort-view">分類</div>
</template>

<script>
export default {
  name: 'assortView',
  data(){
    return{
      title: '分類',
      navVieShow: true
    }
  },
  created(){
    this.$emit('onTitle', this.title)
    this.$emit('onNavShow', this.navVieShow)
  }
}
</script>

<style>

</style>

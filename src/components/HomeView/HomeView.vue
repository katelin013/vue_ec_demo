<template>
  <div class="home-view">首頁</div>
</template>

<script>
export default {
  name: 'homeView',
  data(){
    return{
      title: '首頁',
      navVieShow: true
    }
  },
  created(){
    this.$emit('onTitle', this.title),
    this.$emit('onNavShow', this.navVieShow)
  }
}
</script>

<style>

</style>

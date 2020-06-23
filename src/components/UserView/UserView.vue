<template>
  <div class="user-view">個人</div>
</template>

<script>
export default {
  name: 'userView',
  data(){
    return{
      title: '個人',
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

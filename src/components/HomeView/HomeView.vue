<template>
  <div class="home-view">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem, Lazyload} from 'vant';
Vue.use(Lazyload);

export default {

  name: 'homeView',
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,

  },
  data(){
    return{
      title: '首頁',
      navVieShow: true,
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg',
        'https://img.yzcdn.cn/vant/apple-3.jpg',
        'https://img.yzcdn.cn/vant/apple-4.jpg',
        'https://img.yzcdn.cn/vant/apple-5.jpg',
      ],
    }
  },
  created(){
    this.$emit('onTitle', this.title),
    this.$emit('onNavShow', this.navVieShow)
  }
}
</script>

<style lang="scss">
.my-swipe .van-swipe-item {
    color: #fff;
    height: 13rem;
    font-size: 1rem;
    text-align: center;
    background-color: lightgray;
    img{
      height: 13rem;
      width: 100%;
    }
  }
</style>

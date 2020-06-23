<template>
  <div class="home-view">
    <!-- Swipe banner -->
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="darkgray">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <!-- 分類 -->
    <CategoryView></CategoryView>

    <!-- 單品熱賣 -->
    <TitleView name='單品熱賣' icon='star'></TitleView>
    <SellingView></SellingView>
    <TitleView name='精選活動' icon='point-gift'></TitleView>
    <WinnowView></WinnowView>
    <!-- <TitleView name='專屬推薦' icon='hot'></TitleView> -->
  </div>
</template>

<script>

import { Swipe, SwipeItem} from 'vant';
import CategoryView from '../CategoryView/CategoryView.vue';
import TitleView from "../TitleView/TitleView.vue";
import SellingView from '../SellingView/SellingView.vue';
import WinnowView from '../WinnowView/WinnowView.vue';

export default {

  name: 'homeView',
  components:{
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    CategoryView,
    TitleView,
    SellingView,
    WinnowView
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

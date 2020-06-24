<template>
  <div class="recommend-item-view">
    <van-divider
      :style="{ color: '#cccccc'}"
    />
    <img :src="item.img" alt="">
    <div class="item-content">
      <h3 class="title">{{item.title}}</h3>
      <h4>{{item.desc}}</h4>
      <div class="keyword">
        <span>{{item.keyword1}}|{{item.keyword2}}</span>
      </div>
      <h3 class="price">${{item.price}}元</h3>
    </div>
    <van-divider
      :style="{ color: '#525252', borderColor: '#525252'}"
    />
    <div class="bottom-content">
      <h4>{{item.brand}}</h4>
      <h4>{{item.standard}}</h4>
      <div class="find-same">找相似</div>
    </div>
  </div>
</template>

<script>
import { Divider } from 'vant';

export default {
  name: 'recommendItemView',
  props:['item'],
  components:{
    [Divider.name]:Divider
  },
  data: function() {
    return{
      img: this.img,
      title: this.title,
      desc: this.desc,
      keyword1: this.keyword1,
      keyword2: this.keyword2,
      brand: this.brand,
      standard: this.standard,
      price: this.price,
    }
  }
}
</script>

<style lang='scss'>
  .recommend-item-view{
    background-color: white;
    position: relative;
    img{
      width: 7.3rem;
      margin: 1rem 0.8rem 0.8rem;
    }
    .item-content{
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 1.3rem;
      right: 2rem;
      .title{
        font-weight: 900;
      }
      h4{
        margin-top: 0.5rem;
        font-size: 0.8rem;
        color: darkgray;
      }
      .keyword{
        background-color: lightgray;
        padding: 0.3rem 1rem 0.3rem ;
        width:fit-content;
        margin-top: 0.7rem;
        width:-webkit-fit-content;
        width:-moz-fit-content;
        font-size: 0.6rem;
        color:rgb(255, 141, 141)
      }
      .price{
        margin-top: 0.5rem;
        color: red;
      }
    }
    .bottom-content{
      display: flex;
      justify-content: space-between;
      padding: 0 0.5rem 0;
      color: darkgray;
      font-size: 0.8rem;
      font-weight: 900;
      .find-same{
        border: 0.1rem solid lightgray;
        padding: 0.25rem 0.5rem 0.25rem;
        margin-top: -0.35rem;
        border-radius: 1rem;
      }
    }
  }
</style>

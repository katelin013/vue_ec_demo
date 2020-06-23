<template>
  <div class="sell-item-view">
    <img class='item-img' v-lazy="item.img">
    <p class="title">{{item.title}}</p>
    <p class="desc">{{item.desc}}</p>
    <p class="other">
      <span class="now-price">$ {{item.nowPrice}}</span>
      <span class="old-price"> $ {{item.oldPrice}}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'sellItemView',
  props:['item'],
}
</script>

<style lang='scss'>
  .sell-item-view{
    width: 50%;
    height: 16rem;
    border-right: 0.065rem solid #bbbbbb;
    border-bottom: 0.065rem solid #bbbbbb;
    box-sizing: border-box;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-bottom: 0.5rem;
    padding-top: 0.5rem;
    p {
      text-align: center;
    }
    .title{
      margin-bottom: 0.5rem;
    }
    .desc{
      margin-bottom: 0.5rem;
      color: darkgray;
    }
    .item-img{
      width: 100%;
    }
    .other{
      margin-bottom: 0.5rem;
    }
    .now-price{
      color: rgb(196, 2, 2);
    }
    .old-price{
      text-decoration: line-through;
      color: lightgray;
      font-size: 0.8rem;
    }
  }
</style>

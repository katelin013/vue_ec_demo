<template>
  <div class="winnow-item-view">
    <h3>{{item.name}}</h3>
    <h4>{{item.desc}}</h4>
    <img :src="item.img">
  </div>
</template>

<script>
export default {
  name: 'winnowItemView',
  props:['item'],

}
</script>

<style lang='scss'>
  .winnow-item-view{
    width: 6.25rem;
    // height: 6.25rem;
    background: #f6f6f6;
    margin: 5px 5px 5px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    white-space: nowrap;
    border: 0.065rem solid lightgray;
    h3 {
      font-size: 0.8rem;
      margin: 0.473rem 0 0.6875rem;
      text-align: center;
    }
    h4{
      font-size: 0.75rem;
      margin-bottom: 0.69rem;
    }
    img {
      width: 4.625rem;
      text-align: center;
      margin-bottom: 0.5rem;
    }
  }
</style>

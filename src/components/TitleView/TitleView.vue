<template>
  <div class="title-view">
    <div class="top-border"></div>
    <h3>
      <van-icon :name="icon" />
      {{name}}
    </h3>
    <div class="bottom-border"></div>
  </div>
</template>

<script>
import { Icon } from 'vant';
export default {
  name: 'titleView',
  components: {
    [Icon.name]:Icon
  },
  props:['name', 'icon']
}
</script>

<style lang="scss">
  .title-view{
    height: 3rem;
		line-height: 3rem;
    .top-border{
      width:100%;
      height: 2px;
    }
    h3{
      font-size: 1.2rem;
      text-align: center;
      font-weight: 900;
    }
  }
</style>

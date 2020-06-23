<template>
  <div class="category-view">
    <dl>
      <dt style="background-color: #db72ab"></dt>
      <dd>分類1</dd>
    </dl>
    <dl>
      <dt style="background-color: #f55a63"></dt>
      <dd>分類2</dd>
    </dl>
    <dl>
      <dt style="background-color: #fb7ce3"></dt>
      <dd>分類3</dd>
    </dl>
    <dl>
      <dt style="background-color: #94db87"></dt>
      <dd>分類4</dd>
    </dl>
    <dl>
      <dt style="background-color: #838de6"></dt>
      <dd>分類5</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'categoryView',
}
</script>
<style lang="scss">
  .category-view{
    dl {
      width: 20%;
      height: 5.3rem;
      float: left;
      text-align: center;
      dt {
        width: 2.5rem;
        height: 2.5rem;
        margin-left: 25%;
        margin-top: 25%;
        margin-bottom: 0.5rem;
        border-radius: 1.4rem;
      }
    }
  }
</style>

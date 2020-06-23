<template>
	<div class="category-view">
		<dl>
			<dt style="background: red;"></dt>
			<dd>分類1</dd>
		</dl>
		<dl>
			<dt style="background: blue;"></dt>
			<dd>分類2</dd>
		</dl>
		<dl>
			<dt style="background: blueviolet;"></dt>
			<dd>分類3</dd>
		</dl>
		<dl>
			<dt style="background: skyblue;"></dt>
			<dd>分類4</dd>
		</dl>
		<dl>
			<dt style="background: lightblue;"></dt>
			<dd>分類5</dd>
		</dl>
    <div class="bottom_divider"></div>
	</div>
</template>

<script>
	export default{
		name:'categoryView',
	}
</script>

<style lang="scss">
	.category-view{
		background: white;
		overflow: hidden;
    dl {
      width: 20%;
      height: 5.3125rem;
      float: left;
      text-align: center;
      padding: 0.6875rem 0 0;
      box-sizing: border-box;
      font-size: 13px;
    }
    dt {
      width: 2.5rem;
      height: 2.5rem;
      display: inline-block;
      border-radius: 50%;
      margin-bottom: 7px;
    }
	}
  .bottom_divider{
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin-top: 5.3125rem;
  }
</style>

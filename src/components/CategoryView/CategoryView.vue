<template>
	<div class="category-view">
		<dl>
			<dt style="background: red;">
				<img src="https://s.yimg.com/zp/MerchandiseImages/016A433817-SP-6535602.jpg" alt="">
			</dt>
			<dd>分類1</dd>
		</dl>
		<dl>
			<dt style="background: blue;">
				<img src="https://s.yimg.com/zp/MerchandiseImages/FC52D46765-SP-8529968.jpg" alt="">
			</dt>
			<dd>分類2</dd>
		</dl>
		<dl>
			<dt style="background: blueviolet;">
				<img src="https://s.yimg.com/zp/MerchandiseImages/F9E9E65794-SP-7421335.jpg" alt="">
			</dt>
			<dd>分類3</dd>
		</dl>
		<dl>
			<dt style="background: skyblue;">
				<img src="https://s.yimg.com/zp/MerchandiseImages/8A74AB95EF-Gd-8928392.jpg" alt="">
			</dt>
			<dd>分類4</dd>
		</dl>
		<dl>
			<dt style="background: lightblue;">
				<img src="https://s.yimg.com/zp/MerchandiseImages/A77E1369F5-Product-22143123.jpg" alt="">
			</dt>
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
			img {
				width: 100%;
				border-radius: 50%;
			}
    }
	}
  .bottom_divider{
    width: 100%;
    height: 1px;
    background-color: lightgray;
    margin-top: 5.3125rem;
  }
</style>

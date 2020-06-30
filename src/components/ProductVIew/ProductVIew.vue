<template>
  <div class="product-view">
    <!-- 返回 -->
    <van-nav-bar
      title="商品詳情"
      left-arrow
      @click-left="onBack"
    />

    <!-- 商品輪播 -->
    <van-swipe class="banner" :autoplay="3000" indicator-color="darkgray">
      <van-swipe-item v-for="(item, index) in productDetail.banners" :key="index">
        <img v-lazy="item.img" />
      </van-swipe-item>
    </van-swipe>

    <div class="content-view"></div>


      <!-- 價格 -->
      <div class="price-view">
        <p class="new-price">${{productDetail.newPrice}}</p>
        <p class="old-price"> 原價${{productDetail.oldPrice}}</p>
        <p class="onsale">特價81折</p>
      </div>

      <!-- 商品類別 -->
      <div class="standard-view">
        <div class="thumb-view">
          <div v-for="(item, index) in productDetail.standardImages" :key="index">
            <img v-lazy="item.img" />
          </div>
        </div>
        <div class="type-view" >
          <div v-for="(item, index) in productDetail.standardImages" :key="'color'+index">
            <p>{{item.color}}</p>
          </div >
        </div>
      </div>

      <!-- 商品說明 -->
      <div class="desc-view">
        <div class="desc-title-view">
          <p>{{productDetail.name}}</p>
        </div>
        <div class="desc-content-view">
          <p>{{productDetail.desc}}</p>
        </div>
      </div>

      <div class="explain-view">
        <div class="desc-other-view">
          <p>說明</p>
          <p class="explain-view">{{productDetail.explain}}</p>
        </div>
      </div>

      <!-- 評論 -->
      <div class="appraise-title">
        <p>商品評價({{productDetail.appraise.list.length}})</p>
      </div>
      <div class="appraise-content">
        <UserAppraiseView
          v-for="(item, index) in productDetail.appraise.list" :key="'appraise'+index"
          :userImg="item.userImg"
          :name="item.name"
          :content="item.content"
          :showImg="item.showImg"
          >
        </UserAppraiseView>
      </div>

      <div class="product-detail-view">
        <h3>產品資訊</h3>
        <table>
          <tr v-for="(item, index) in productDetail.productMessage" :key="'productMessage'+index">
            <td class="table-left-view">{{item.key}}</td>
            <td class="table-right-view">{{item.value}}</td>
          </tr>
        </table>
      </div>

      <div class="product-detail-view">
        <h3>圖文詳情</h3>
        <div
          v-for="(item, index) in productDetail.productStamp" :key="'productStamps'+index"
        >
          <h4>{{item.stamp}}</h4>
          <h5>{{item.text}}</h5>
          <img :src="item.img" alt="">
          <div class="divider"></div>
        </div>
      </div>
  </div>
</template>

<script>
import { NavBar } from 'vant';
import { Swipe, SwipeItem} from 'vant';
import { Divider } from 'vant';
import ProductDetail from '../../assets/json/goods-detail.json'
import UserAppraiseView from '../UserAppraiseView/UserAppraiseView.vue'

export default {
  name: 'productView',
  components: {
    [NavBar.name]:NavBar,
    [Swipe.name]:Swipe,
    [SwipeItem.name]:SwipeItem,
    [Divider.name]:Divider,
    UserAppraiseView
  },
  data: function() {
    return{
      productDetail: ProductDetail,
    }
  },
  created(){
    this.$emit('onNavShow', false);
    this.$emit('onTabBarShow', false)
  },
  methods:{
    onBack(){
      // this.$store.commit('changeProductShow', false);
      this.$router.push('/home');
    }
  }
}
</script>

<style lang='scss'>
  .product-view{
    background-color: rgb(233, 233, 233);
    // position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    z-index: 99;
  }
  .banner{
    height: 18rem;
    font-size: 1rem;
    text-align: center;
    background-color: lightgray;
    img{
      height: 18rem;
      width: 100%;
    }
  }

  .price-view{
    display: flex;
    padding: 0.8rem 0.8rem 0.8rem;
    align-items: flex-end;
    background-color: white;
    margin-top: 1px;
    .new-price{
      color: red;
      font-size: 1.4rem;
      text-align: center;
    }
    .old-price{
      color: darkgray;
      font-size: 0.9rem;
      margin-left: 1rem;
      text-align: center;
      text-decoration: line-through;
    }
    .onsale{
      background-color: red;
      color: white;
      margin-left: 1rem;
      padding: 0.2rem 0.2rem 0.2rem;
    }
  }

  .standard-view{
    background-color: white;
    margin-top: 1px;
    width: 100%;
    display: flex;
    .thumb-view{
      margin: 1px 0.1rem 1px;
      display: flex;
      flex-direction: row;
      img{
        height: 5rem;
        width: 5rem;
      }
    }
    .type-view{
      display: flex;
      text-align: center;
      flex-direction: column;
      width: 100%;
      margin: 0.7rem 1rem 0.7rem;
      justify-content: space-between;
      color: blue;
    }
  }

  .desc-view{
    margin-top: 1px;
    background-color: white;
    .desc-title-view{
      padding: 0.5rem 1rem 1rem;
    }
    .desc-content-view{
      padding: 0.5rem 1rem 1rem;
      p {
        color: darkgray;
        line-height: 1.2rem;
      }
    }
  }

  .desc-other-view{
    display: flex;
    background-color: white;
    margin-top: 1px;
    p {
      padding: 1rem 1rem 1rem;
    }
    .explain-view{
        color: darkgray;
    }
  }

  .appraise-title{
    display: flex;
    background-color: white;
    margin-top:1px;
    p{
      padding: 1rem 1rem 1rem;
    }
  }

  .appraise-content{
    display:flex;
    overflow-x: auto;
  }

  .product-detail-view{
    padding: 1rem 0.5rem;
    background-color: white;
    margin-bottom: 0.6rem;
    h3{
      background: rgb(104, 140, 238);
      color: white;
      border-radius: 0.3rem;
      text-align:center;
      height: 1.8rem;
      line-height: 1.8rem;
      margin-bottom: 1rem;
      font-weight: 900;
    }
    table{
      width: 100%;
      font-size: 0.8rem;
      td {
        border: 1px solid #333;
      }
      .table-left-view{
        padding: 0.5rem 1rem 0.5rem;
        color: darkgray;
      }
      .table-right-view{
        padding: 0.5rem 1rem 0.5rem;
      }
    }
    h4{
      margin-bottom: 1rem;
      font-weight: 900;
    }
    h5{
      font-size: 0.8rem; 
      margin-bottom: 1rem;
    }
    img{
      width:100%;
      margin-bottom: 0.5rem;
    }
    .divider{
      width: 100%;
      height: 1px;
      background-color: black;
      margin-bottom: 2rem;
    }
  }
</style>

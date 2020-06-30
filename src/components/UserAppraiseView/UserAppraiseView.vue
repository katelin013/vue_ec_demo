<template>
  <div class="user-appraise-view">
    <div user-desc>
      <div class="user-title">
        <img class="avatar" :src="userImg">
        <span>{{name}}</span>
      </div>
      <div class="user-appraise">
        <span class="title">心得</span>
        <span class="content"> {{content}}</span>
      </div>
    </div>
    <div class="user-show">
      <img :src="showImg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'userAppraiseView',
  data: function() {
  return{

    }
  },
  props: ['userImg','name','content','showImg'],
}
</script>

<style lang='scss'>
  .user-appraise-view{
    padding: 0.5rem;
    display: flex;
    margin: 1px 1px 1px;
    background: white;
    .user-title{
      width: 200px;
      .avatar{
        width:2rem;
        height:2rem;
        border-radius: 1rem;
        vertical-align:middle;
      }
      span{
        text-align: center;
        margin-left: 10px;
      }
    }

    .user-appraise{
      margin-top: 1rem;
      .title{
        color: red;
        border: 3px red solid;

      }
      .content{
        line-height: 1.7rem;
      }
    }

    .user-show{
      margin-left: 1rem;
      img{
        width: 10rem;
        height: 10rem;
      }
    }
  }
</style>

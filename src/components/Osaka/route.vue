<template>
  <div class="route">
    <div class="route-box">
      <h3>定制师推荐线路</h3>
      <div class="route-box-flex" v-for="n in 5" :key="n.id">
        <div class="img">
          <img src="../../../static/Osaka/869c803e-d17b-86f1-d865-53c2b6c8304b.jpg" alt="">
        </div>
        <div class="txt">
          <div class="title">日本 15天  去东瀛度蜜月，享受温泉和美景</div>
          <p>历史·文化·亲子·动漫·购物</p>
          <p><span class="rmb">￥</span><strong>12095</strong>/人起<span class="number">133人已定制</span></p>
        </div>
      </div>
      <router-link to="/strategy"><div class="more">查看更多路线...</div></router-link>
    </div>
    <hr>
    <div class="route-box">
      <h3>定制旅行服务</h3>
      <img src="../../../static/Osaka/introduce.jpg" alt="">
      <router-link to="/CustomTravel"><div class="text">了解定制旅行</div></router-link>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .route{
    width: 100%;
    hr{
      background-color: #F4F3EE;
      height: 5px;
      border: none;
    }
    .route-box{
      width: 90%;
      margin: auto;
      h3{
        font-size: 20px;
        margin: 20px 0;
      }
      &>img{
        width: 100%;
      }
      .text{
        padding: 0.625rem;
        width: 90%;
        background-color: #63C6C2;
        color: #fff;
        margin: auto;
        text-align: center;
        border-radius: 20px;
        margin-bottom: 20px;
      }
      .route-box-flex{
        margin: 10px 0;
        display: flex;
        justify-content: space-around;
        .img{
          width: 35%;
          img{
            width: 100%;
          }
        }
        .txt{
          width: 60%;
          padding-left: 10px;
          .title{
            font-weight: bold;

          }
          .rmb{
              color: #F06E6E;
          }
          strong{
            color: #F06E6E;
            font-size: 20px;
            font-style: italic;
          }
          .number{
            margin-left: 20px;
          }
        }
      }
    }
  }
</style>

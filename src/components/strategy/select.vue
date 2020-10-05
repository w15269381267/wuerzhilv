<template>
  <div class="select">
    <div class="select-box">
      <h2>精选自由行 <span>自由·省心·有保障</span></h2>
      <div class="select-box-flex" >
        <router-link to="/selected">
          <div class="box">
            <div class="sec" v-for="n in 4" :key="n.id">
              <img src="http://images.cdn.uniqueway.com/uploads/2019/08/4ELvsyNlEaEREe4tfbWDf3BZDdkKVRbc194xYyV2.jpeg" alt="">
              <h3>【欧洲经典游】行走在东欧的童话世界</h3>
              <div><span class="price">14899</span>/人起<span class="number">589人已定制</span></div>
            </div>
          </div>
        </router-link>

      </div>
      <h3>查看更多路线...</h3>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .select{
    width: 100%;
    background-color: #fff;
    .select-box{
      width: 90%;
      margin: auto;
      padding: 10px;
      a{
        text-decoration: none;
      }
      h2{
        span{
          font-size: 0.875rem;
          float: right;
          font-weight: normal;
          color: #948E8C;
        }
      }
      &>h3{
        margin: 5px 0;
        color:#63C6C2;
      }
      .select-box-flex{
        width: 100%;
        overflow: auto;
        .box{
          width: 1000px;
          display: flex;
          .sec{
            width: 23%;
            margin-right: 10px;
            img{
              margin: 5px 0 0;
              width: 100%;
              border-radius: 5px;
            }
            h3{
              margin: 10px 0;
              color: black;
            }
            &>div{
              font-size: 12px;
              color: #9B918D;
            }
            .price{
              font-size: 1.25rem;
              color:#F06E6E;
              font-style: italic;
            }
            .number{
              margin-left: 30px;
            }
          }
        }
      }
    }
  }
</style>

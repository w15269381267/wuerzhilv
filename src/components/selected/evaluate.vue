<template>
  <div class="evaluate">
    <section class="box commentSec">
      <h2>行程评价</h2>
      <div>好评率近100%，40万+客户体验，看看他们怎么说。</div>
      <div class="route-evaluate">
        <div class="evaluate-head">
          <img src="/static/index/default_avatar.png" alt="">
        </div>
        <div class="evaluate-message">
          <div class="content-header">
            <div class="left">
              <div class="name">小xx</div>
              <div class="date">2019/07/16</div>
            </div>
            <div class="star">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div>5.0</div>
            </div>
          </div>
          <div class="content-text">
            推荐“无二之旅”，欢迎大家微信咨询，服务热心周到，无微不至。
          </div>
          <div class="content-img">
            <img src="https://images.cdn.uniqueway.com/uploads/2019/09/LhJW1EcMv5X10GtdKVPPlmQm28FrTELj56JIwvmy.png" alt="">
          </div>
        </div>
      </div>
      <a href="">查看更多芬兰评价...</a>
    </section>
  </div>
</template>

<script>
 export default {

 }
</script>

<style lang="less" scoped>
  .evaluate{
    .box{
      width: 95%;
      font-size: 0.625rem;
      margin: 0.3125rem 0.625rem;
      padding-bottom: 0.625rem;
      h2{
        font-size: 1.5rem;
        margin-top: 1.25rem;
      }
      div{
        margin: 0.625rem 0;
      }
    }
    .commentSec{
      .route-evaluate{
        display: flex;
        justify-content: space-around;
        .evaluate-head{
          width: 2.5rem;
          img{
            width: 2.5rem;
            height: 2.5rem;
            border-radius: 1.25rem;
          }
        }
        .evaluate-message{
          margin: 0;
          display: block;
          width: 20.625rem;
          .content-header{
            &::after{
              display: block;
              content: "";
              clear: both;
            }
            .left{
              margin: 0;
              float: left;
              font-size: 0.875rem;
              div{
                margin: 0;
              }
            }
            .star{
              float: right;
              span{
                display: inline-block;
                width: 1.125rem;
                height: 1.125rem;
                background-image: url(/static/index/star.png);
                -webkit-background-size: cover;
                background-size: cover;

              }
              div{
                font-size: 1.2rem;
                display: inline-block;
                color: #5FC6C2;
                position: relative;
                right: 8.6375rem;
                bottom: 0.2125rem;
                clear: both;
              }
            }
          }
          .content-img{
            height: 7.25rem;
            overflow: hidden;
            img{
              width: 12.5rem;
            }
          }
        }
      }
      a{
        margin-left: 5px;
        color: #63C6C2;
        text-decoration: none;
        font-size: 1rem;
        padding-bottom: 1.25rem;
      }
    }
  }
</style>

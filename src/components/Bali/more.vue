<template>
  <div class="more">
    <div class="more-box">
      <div class="Bright">
        <div class="title">
          巴厘岛婚礼亮点
        </div>
        <div class="img">
          <img src="../../../static/Bali/show-1.jpg" alt="">
          <div class="txt">
            婚礼晚宴
          </div>
        </div>
      </div>
      <div class="more-box-sec" v-for="n in 4" :key="n.id">
        <div class="title">
          更多海外婚礼
        </div>
        <div class="img-flex">
          <div class="img"><img src="../../../static/Bali/bali-min.jpg" alt=""><p>巴厘岛婚礼</p></div>
          <div class="img"><img src="../../../static/Bali/iceland-min.jpg" alt=""><p>冰岛婚礼</p></div>
        </div>
      </div>
      <div class="more-box-btm">
        <div class="title">
          无二之旅荣获欧洲婚礼联盟2018婚礼卓越成就奖
          <img src="https://www.uniqueway.com/assets/img/wedding/certificate.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .more{
    .more-box{
      .Bright{
        .title{
          font-size: 18px;
          text-align: center;
          margin: 20px 0 10px;
        }
        .img{
          position: relative;
          img{
            width: 70%;
          }
          .txt{
            font-weight: bold;
            color: #fff;
            text-align: center;
            width: 70%;
            background-color: #0005;
            padding: 10px 0;
            position: absolute;
            bottom: 0;
          }
        }
      }
      .more-box-sec{
        .title{
          font-size: 18px;
          text-align: center;
          margin: 20px 0 10px;
        }
        .img-flex{
          width: 90%;
          margin: auto;
          display: flex;
          justify-content: space-between;
          .img{
            width: 48%;
            position: relative;
            img{
              width: 100%;
            }
            p{
              color: #FFFFFF;
              font-size: 17px;
              font-weight: bold;
              position: absolute;
              top: 40%;
              left: 50%;
              transform: translateX(-50%);
            }
          }
        }
      }
      .more-box-btm{
        width: 90%;
        margin: auto;
        .title{
          font-size: 19px;
          text-align: center;
          margin: 20px 0 10px;
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>

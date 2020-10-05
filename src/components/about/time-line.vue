<template>
  <div class="time-line">
    <div class="time-line-box">
      <div class="time-line-box-flex" v-for="n in 3" :key="n.id">
        <div>
          <div class="time">2012</div>
          <div class="img"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/about/2012/1.png" alt=""></div>
          <div class="txt">
            几位热爱旅行的小伙伴聚集在北京为小圈子里热爱深度旅行的朋友们提供私人定制旅行服务无二之旅的前身
          </div>
        </div>
        <div>
          <div class="time">2013.7</div>
          <div class="img"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/about/2013/2.png" alt=""></div>
          <div class="txt">
            无二之旅注册品牌<br>公司在北京金融街<br>正式运营
          </div>
        </div>
      </div>
      <div class="time-line-box-txt">
        <div>
          <div class="time">2012</div>
          <div class="img"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/about/2012/1.png" alt=""></div>
          <div class="txt">
            《无二之旅》旅行微电影上线，获优酷土豆、爱奇艺、乐视、凤凰视频等各大视频网站首页推荐，并收到多项微电影节邀请。
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{

      }
    }
  }
</script>

<style lang="less" scoped>
  .time-line{
    margin-bottom: 0px;
    .time-line-box{
      width: 400px;
      margin: auto;
      height: 600px;
      background-color: #F4F5EF;
      background-image: url(../../../static/about/timeline_mobile.png);
      background-size: cover;
      .time-line-box-flex{
        width: 95%;
        margin: auto;
        margin-top: 25px;
        display: flex;
        justify-content: space-around;
        text-align: center;
        &>div{
          width: 50%;
        }
        .time{
          font-size: 1.25rem;
          font-weight: bold;
        }
        .img{
          img{
              width: 40%;
          }
        }
        .txt{
          font-size: 14px;
        }
      }
      .time-line-box-txt{
        padding-top: 20px;
        width: 80%;
        margin: auto;
        text-align: center;
        .time{
          font-size: 1.25rem;
          font-weight: bold;
        }
        .img{
          img{
              width: 20%;
          }
        }
        .txt{
          font-size: 14px;
        }
      }
    }
  }
</style>

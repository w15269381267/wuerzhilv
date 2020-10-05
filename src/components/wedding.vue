<template>
  <div class="wedding">
    <div class="wedding-box">
      <div class="wedding-box-head">
        <div class="txt">
          <div class="wedding-box-head-txt">
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/wedding/icon_logo_wedding@2x.png" alt="">
            <p>- 专业的海外婚礼 &amp; 婚拍团队 -</p>
            <h4>无二婚礼</h4>
          </div>
        </div>
      </div>
      <h2>走，我们去全世界结婚去！</h2>
    </div>
    <WeddingVideo></WeddingVideo>
    <div class="bottom-img">
      <div>无二之旅荣获欧洲婚礼联盟2018婚礼卓越成就奖 </div>
      <img src="https://www.uniqueway.com/assets/img/wedding/certificate.png" alt="">
    </div>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import WeddingVideo from "@/components/wedding/wedding-video.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default {
    components:{
      WeddingVideo,
      bottomFform,
      bottomNav

    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .wedding{
    width: 100%;
    background-color: #F5F4EF;
    .bottom-img{
      width: 90%;
      margin: 3.125rem auto 0;
      text-align: center;
      div{
        font-size: 24px;
      }
      img{
        width: 100%;
      }
    }
    .wedding-box{
      margin: 50px 0;
      &>h2{
        font-weight: normal;
        text-align: center;
        padding: 30px 0;
      }
      .wedding-box-head{
        width: 100%;
        height: 500px;
        background-image: url(/static/wedding/bg_wedding_container.jpg);
        background-size: cover;
        background-position: -560px;
        text-align: center;
        .txt{
          width: 80%;
          margin: auto;
          padding: 0.625rem;
          border: 1px solid #fff;
          position: relative;
          top: 30%;
        }
        .wedding-box-head-txt{
          background-color: #FFFFFFaa;

          img{
              width: 40%;
          }
          p{
            color: #B59988;
            margin: 5px 0;
          }
          h4{
            color: #462205;
            padding: 5px 0;
          }
        }
      }
    }
  }
</style>

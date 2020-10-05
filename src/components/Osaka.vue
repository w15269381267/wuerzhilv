<template>
  <div class="Osaka">
    <div class="Osaka-box">
      <div class="Osaka-box-head">
        <img src="https://images.cdn.uniqueway.com/uploads/2017/11/c477cf20-2404-486c-a532-da94803693ea.jpg" alt="">
        <div class="Osaka-box-head-txt">
          <img src="https://www.uniqueway.com/mix/mip/images/common/uniqueway.jpg" alt="">
          <div class="title">无二之旅</div>
          <div>定制旅行旗舰品牌</div>
        </div>
      </div>
    </div>
    <OsakaSec></OsakaSec>
    <JapanStrategy></JapanStrategy>
    <route></route>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import OsakaSec from "@/components/Osaka/Osaka-sec.vue"
  import JapanStrategy from "@/components/Osaka/JapanStrategy.vue"
  import route from "@/components/Osaka/route.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default {
    components:{
      OsakaSec,
      JapanStrategy,
      route,
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
  .Osaka{
    a{
      text-decoration: none;
    }
    p{
      font-size: 0.875rem;
      color: #C3BFBE;
      margin: 0.3125rem 0;
    }
    .Osaka-box{
      margin-top: 50px;
      .Osaka-box-head{
        position: relative;
        &>img{
          width: 100%;
        }
        .Osaka-box-head-txt{
          position: absolute;
          bottom: 30px;
          left: 20px;
          img{
            width: 40px;
            height: 40px;
            border-radius: 1.25rem;
            float: left;
          }
          div{
            width: 200px;
            color: #fff;
          }
          .title{
            font-weight: bold;
          }
        }
      }
    }
    .more{
      color: #63C6C2;
      font-size: 1.125rem;
      font-weight: bold;
      margin: 10px 0;
    }
  }
</style>

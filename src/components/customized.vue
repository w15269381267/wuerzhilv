<template>
  <div class="customized">
    <div class="customized-img">
      <img src="/static/customized/form_bg.jpg" alt="">
      <h2>想体验深度又小众的旅行？<br>你需要定制旅行——</h2>
      <div class="customized-bottom">
        <div><span></span>不跟团 超自由</div>
        <div><span></span>不跟团 超自由</div>
        <div><span></span>不跟团 超自由</div>
      </div>
    </div>
    <!-- 步骤表单 -->
    <router-view/>
    <div class="The-flagship">
      <h2>无二之旅，定制自由行旗舰品牌</h2>
      <p>让旅行有温度，我们一直在努力</p>
      <img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/mobile_intro_global_2.png" alt="">
      <img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/mobile_intro_global_1.png" alt="">
      <img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/mobile_intro_global_3.png" alt="">
    </div>
    <!-- 视频 留言 -->
    <teamVideo></teamVideo>
    <customerEvaluation></customerEvaluation>
  </div>
</template>

<script>
import teamVideo from "@/components/customized/team-video.vue"
import customerEvaluation from "@/components/customized/customer-evaluation.vue"
  export default {
    components:{
      teamVideo,
      customerEvaluation
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  .customized {
    width: 100%;

    .customized-img {
      margin-top: 50px;
      width: 100%;
      position: relative;

      img {
        width: 100%;
      }

      h2 {
        width: 70%;
        position: absolute;
        top: 5%;
        left: 5%;
        color: #fff;
      }

      .customized-bottom{
        width: 100%;
        display: flex;
        justify-content: space-around;
        background-color: #000;
        opacity: 0.5;
        position: absolute;
        bottom: 2%;
        span{
          display: inline-block;
          width: 14px;
          height: 14px;
          background-image: url(../../static/customized/info_item_icon.png);
          background-size: cover;
        }
        div{
          color: #fff;
        }
      }
    }
    .The-flagship{
      width: 100%;
      margin: 3.125rem auto;
      text-align: center;
      background-image: linear-gradient(0deg,transparent,rgba(0,0,0,.05));
      h2{
        padding-top: 2.25rem;
      }
      img{
        width:70%;
        margin: 2.875rem 0;
      }
    }
  }
</style>

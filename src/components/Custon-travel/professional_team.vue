<template>
  <div class="professional_team">
    <div class="title1">出国自由行，为什么选择无二之旅？</div>
    <div class="title2">一次自由行的费用 = 品质旅行 +</div>
    <div class="title3">专业团队全程服务</div>
    <div class="triangle"></div>
    <div class="exclusive_service">
      <div class="service">
        <div class="service-img">
           <img src="https://assets.cdn.uniqueway.com/assets/img/trip/service/plan.jpg" alt="">
        </div>
        <div class="service-title">专业全职定制师团队</div>
        <div class="service_sub">平均在当地生活2年以上，设计过500+条专属行程。</div>
        <div class="service_sub">不仅懂目的地，更懂如何自由行。</div>
      </div>
      <div class="service">
        <div class="service-img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/trip/service/answer.jpg" alt="">
        </div>
        <div class="service-title">专属旅行顾问团队</div>
        <div class="service_sub">全程1v1跟进服务，不必自己操心行前准备。</div>
        <div class="service_sub">让你直接联系到人，而不是层层转接的客服电话。</div>
      </div>
      <div class="service">
        <div class="service-img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/trip/service/24h.jpg" alt="">
        </div>
        <div class="service-title">24h出行保障团队</div>
        <div class="service_sub">服务过40w+客户，拥有丰富的紧急问题应对经验，</div>
        <div class="service_sub">出行7×24小时无时差全中文服务，即时响应。</div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .professional_team{
    width: 100%;
    text-align: center;
    .title1{
      margin: 3.125rem 0 0;
      color: #C1BBB8;
      font-size: 1rem;
    }
    .title2{
      margin: 0.625rem 0 1.25rem;
      font-size: 1.5rem;
    }
    .title3{
      margin: 0.625rem 0 2.5rem;
      font-size: 1.5rem;
      color: #63C6C2;
    }
    .triangle{
      margin: 0 auto 2.5rem;
      width: 0;
      height: 0;
      border-top: 0.625rem solid #63C6C2;
      border-left: 0.3125rem solid #63C6C200;
      border-bottom: 0.3125rem solid #63C6C200;
      border-right: 0.3125rem solid #63C6C200;
    }
    .exclusive_service{
      .service{
        margin: 3.25rem 0;
        img{
          width: 12.5rem;
          height: 12.5rem;
        }
        .service-title{
          font-size: 1.4rem;
          margin: 0 auto;
          width: 60%;
          height: 40px;
          line-height: 40px;
          background-image: url(/static/custom-travel/text_bg.jpg);
          -webkit-background-size: cover;
          background-size: cover;
        }
        .service_sub{
          color: #C1BBB8;
          font-size: 0.9rem;
          margin: 0.3125rem 0;
        }
      }
    }
  }
</style>

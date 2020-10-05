<template>
  <div class="Custormer-case">
    <div class="Custormer-case-box">
     <div class="Custormer-case-box-head">
       <div class="case-box-head-txt">
         <h3>你的旅行，会是什么温度？</h3>
         <p>一次美好的旅行，应该是有温度的。温度，来自不一样的风景，来自陪伴或遇见的人，来自旅途中发生的故事。当然，也来自我们</p>
       </div>
     </div>
     <div class="Custormer-case-box-sec" v-for="n in 11" :key="n.id">
       <img src="/static/Custormer-case/5.jpg" alt="">
      <div class="case-box-sec-txt">
        <p>87岁的奶奶，从来没踏出过宁夏偏远的小县城。她信奉了一辈子的天主教。走之前，她希望能够去梵蒂冈，见教皇一面。</p>
        <span class="costs">旅行总花费：</span><span class="cost_number">13250 RMB/人</span>
        <router-link to="/feeling">
          <div class="default-btn">
          感受他人的温度
        </div>
        </router-link>

      </div>
     </div>
    </div>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default{
    components:{
      bottomFform,
      bottomNav
    }
  }
</script>

<style lang="less" >
  *{
    margin: 0;
    padding: 0;
  }
  .Custormer-case{
    background-color: #F5F4EF;
    width: 100%;
    .Custormer-case-box{
      margin-top: 50px;
      .Custormer-case-box-head{
        width: 100%;
        height: 800px;
        background-image: url(/static/Custormer-case/their_story_banner.jpg);
        background-size: cover;
        background-position: -820px -60px;
        position: relative;
        .case-box-head-txt{
          position: absolute;
          bottom: 0;
          margin: auto;
          text-align: center;
          color: #fff;
          padding: 1.25rem;
          background-color: #0005;
          h3{
            font-weight: normal;
          }
          p{
            font-size: 0.875rem;
          }
        }
      }
      .Custormer-case-box-sec{
        margin: 1.875rem 0;
        img{
          width: 100%;
        }
        .case-box-sec-txt{
          margin: 20px auto;
          padding-bottom: 1.875rem;
          width: 90%;
          text-align: center;
          p{
            margin: 0.625rem;
          }
          .costs{
            color: #8CB0A8;
          }
          .cost_number{
            color: #FD8B69;
          }
          .default-btn{
            width: 50%;
            margin: 10px auto;
            border: 3px solid #7FCFCB;
            color: #7FCFCB;
            height: 40px;
            line-height: 2.5rem;
            border-radius: 1.4375rem;
            font-size: 1.125rem;
          }
          a{
            text-decoration: none;
          }
        }
      }
    }
  }
</style>

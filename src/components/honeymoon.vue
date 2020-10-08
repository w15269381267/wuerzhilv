<template>
  <div class="honeymoon">
    <div class="honeymoon-box">
      <div class="header">
        <img src="/static/honeymoon/banner.jpg" alt="">
      </div>
      <!-- 颜色分类 -->
      <colorBox></colorBox>
      <div class="Case-stories">
        <h2>案例故事</h2>
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/story_spain.jpg" alt="">
        <div class="Case-stories-txt">
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h4>听障夫妇的西班牙蜜月旅行</h4>
          <p>·听不见声音，不会英文和西班牙语只会唇语</p>
          <p>·有异域风情小镇有美食又有你的格拉纳达</p>
          <p>·有高迪有足球又有海的巴塞罗那</p>
        </div>
      </div>
    </div>
    <From></From>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  import colorBox from "@/components/honeymoon/color-box.vue"
  import From from "@/components/honeymoon/honeymoon-from.vue"
  export default {
    components:{
      bottomNav,
      colorBox,
      From
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .honeymoon{
    background-color: #FCF7F1;
    width: 100%;
    .honeymoon-box{
      .header{
        margin-top: 3.125rem;
        img{
          width: 100%;
        }
      }
      .Case-stories{
        padding: 5%;
        background-color: #fff;
        text-align: center;
        img{
          width: 100%;
        }
        .Case-stories-txt{
          margin-top: 1.25rem;
          &>div{
            span{
              float: left;
              display: inline-block;
              width: 6px;
              height: 6px;
              border-radius: 3px;
              background-color: #CCCCCC;
              &:first-child{
                background-color: #544641;
              }
            }
          }
        }
      }

    }
  }
</style>

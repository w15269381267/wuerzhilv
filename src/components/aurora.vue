<template>
  <div class="aurora">
    <div class="aurora-box">
      <div class="aurora-box-head">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/icon_aurora.png" alt="">
        <p>赴一场极光之约</p>
        <p><span class="search">追寻欧若拉的脚步，定制你的专属极光之旅</span></p>
      </div>
      <div class="aurora-box-head-txt">
        <div class="title">定制极光之旅</div>
        <ul>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/person.png" alt=""><p>设计个性极光行程</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/Fill.png" alt=""><p>预订特色极光体验</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/book.png" alt=""><p>制作专属极光路书</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/true.png" alt=""><p>7x24小时出行保障</p></li>
        </ul>
        <div class="aurora-box-head-txt-btn">
          <span>定制旅行是什么</span>
        </div>
      </div>
    </div>
    <recommendedTime></recommendedTime>
    <why></why>
    <bottomForm></bottomForm>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import recommendedTime from "@/components/aurora/recommended-time.vue"
   import bottomForm from "@/components/aurora/bottom-from.vue"
   import bottomNav from "@/components/honeymoon/bottom-nav.vue"
   import why from "@/components/family/why.vue"
  export default {
    components:{
      recommendedTime,
      bottomForm,
      bottomNav,
      why
    }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  .aurora{
    .aurora-box{
      width: 100%;
      margin-top: 50px;
      .aurora-box-head{
        width: 100%;
        height: 37vh;
        background-image: url(../../static/aurora/BG1.jpg);
        background-size: cover;
        background-position: 50% 50%;
        text-align: center;
        img{
          width: 17vw;
          margin: 50px 0 10px 0;
        }
        p{
          font-size: 30px;
          color: #fff;
          margin: 5px 0;
        }
        .search{
          display: inline-block;
          height: 27px;
          padding: 0 10px;
          line-height: 27px;
          font-size: 14px;
          font-weight: 400;
          background-image: url(../../static/aurora/border.png);
          background-size: cover;
          background-position: 50% 50%;
        }
      }
      .aurora-box-head-txt{
        width: 80%;
        margin:  20px auto;
        text-align: center;
        .title{
          font-size: 30px;
        }
        ul{
          overflow: hidden;
          box-sizing: border-box;
          width: 100%;
          li{
            width: 50%;
            list-style: none;
            float: left;
            margin: 15px 0;
            img{
              width: 30%;
            }
          }
        }
        .aurora-box-head-txt-btn{
          margin: 10px auto 50px;
          span{
            display: inline-block;
            height: 37px;
            line-height: 2.3125rem;
            padding: 0 10px;
            background-image: url(../../static/aurora/border_2.png);
            -webkit-background-size: cover;
            background-size: cover;
            background-position: 50% 50%;
          }
        }
      }
    }
  }
</style>

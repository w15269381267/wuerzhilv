<template>
  <div class="family">
    <div class="family-box">
      <div class="family-box-head">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/top_icon.png" alt="">
        <br>
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/family_trip.png" alt="">
        <p><span class="search">一份特别的礼物 · 陪你一起看世界</span></p>
      </div>
      <div class="family-box-head-txt">
        <div class="title">定制极光之旅</div>
        <ul>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/heart.jpg" alt=""><p>设计行程、繁琐预订<br>全都由专业定制师包办</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/comfortable.jpg" alt=""><p>设计行程、繁琐预订<br>全都由专业定制师包办</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/quality.jpg" alt=""><p>设计行程、繁琐预订<br>全都由专业定制师包办</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/safe.jpg" alt=""><p>设计行程、繁琐预订<br>全都由专业定制师包办</p></li>
        </ul>
        <div class="family-box-head-txt-btn">
          <span>定制旅行是什么</span>
        </div>
      </div>
    </div>
    <preschool></preschool>
    <recommended></recommended>
    <why></why>
    <experience></experience>
    <forms></forms>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import preschool from "@/components/family/preschool.vue"
  import recommended from "@/components/family/recommended.vue"
  import why from "@/components/family/why.vue"
  import experience from "@/components/family/experience.vue"
  import forms from "@/components/family/form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default {
    components:{
      preschool,
      recommended,
      why,
      experience,
      forms,
      bottomNav
    }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  .family{
    .family-box{
      width: 100%;
      margin-top: 50px;
      background-color: #F5F4EF;
      .family-box-head{
        width: 100%;
        height: 37vh;
        background-image: url(../../static/family/title_mobile.jpg);
        background-size: cover;
        background-position: 50% 50%;
        text-align: center;
        img{
          width: 30%;
        }
        .search{
          color: #fff;
          background-color: #0009;
          border-radius: 100px;
          border: 1px solid #fff;
        }
      }
      .family-box-head-txt{
        width: 80%;
        margin:  20px auto 0;
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
              width: 40%;
            }
          }
        }
        .family-box-head-txt-btn{
          margin: 10px auto 0;
          span{
            display: inline-block;
            margin: 10px auto 50px;
            height: 37px;
            line-height: 2.3125rem;
            padding: 0 10px;
            border: 2px solid black;
            border-radius: 100px;
            -webkit-background-size: cover;
            background-size: cover;
            background-position: 50% 50%;
          }
        }
      }
    }
  }
</style>

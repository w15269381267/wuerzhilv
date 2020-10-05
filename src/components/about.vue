<template>
  <div class="about">
    <div class="about-box">
      <div class="about-box-head">
        关于无二之旅
      </div>
      <nav>
        <span>关于我们</span>
      </nav>
      <div class="about-box-title">
        <p>无二之旅，国内专业的出国旅行定制公司，</p>
        <p>致力于为每位客户提供省心、自由、高性价比的海外自由行方案，让旅行有温度。</p>
        <span></span>
      </div>
      <div class="about-box-txt">
        <p  v-for="n in txt" :key="n.id">{{n}}</p>
      </div>
      <timeLine></timeLine>
    </div>
    <maps></maps>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  import timeLine from "@/components/about/time-line.vue"
  import maps from "@/components/about/map.vue"
  export default {
    components:{
      bottomNav,
      timeLine,
      maps
    },
    data(){
      return{
        txt:[
          "无二之旅，国内专业的出国旅行定制公司，",
          "2012年，无二之旅在北京诞生了。",
          "最初，我们只是为小圈子里的朋友们，提供个性化的定制旅行服务。",
          "但随着业务的发展，我们发现，原来有那么多不认识我们的朋友，也都在寻找着这种自由、省心、又有性价比的私人定制旅行方式。",
          "渐渐地，慕名而来的朋友越来越多。找我们定制旅行的朋友遍布大江南北，甚至还有很多旅居国外的朋友。我们欣喜的同时，也深感惶恐。",
          "这既是信任，也是责任。我们知道，将自己的旅行交给别人，真的是一件很重要的决定，我们能不能做到不辜负这种信任，我们能不能做到比预期的更好，这始终是激励我们向前的动力。"
        ]
      }
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .about{
    .about-box{
      width: 100%;
      margin-top: 50px;
      .about-box-head{
        width: 100%;
        height: 150px;
        background-image: url(https://assets.cdn.uniqueway.com/assets/img/welcome/about/banner.jpg);
        background-position: -200px 0;
        background-size: cover;
        text-align: center;
        color: #fff;
        font-size: 1.25rem;
        line-height: 150px;
      }
      nav{
        text-align: center;
        margin: 10px 0;
        border-bottom: 1px solid #EAEAEA;
        position: relative;
        span{
          color: #8CD6D3;
          margin-bottom: -1px;
          display: inline-block;
          width: 20%;
          border-bottom: 3px solid #8CD6D3;
        }
      }
      .about-box-title{
        padding: 10px 0 0;
        text-align: center;
        border-bottom: 1px solid #EAEAEA;
        span{
          position: relative;
          top: 26px;
          background-color: #fff;
          display: inline-block;
          width: 40px;
          height: 40px;
          border-bottom: 1px solid #EAEAEA;
          border-right:  1px solid #EAEAEA;
          transform: rotate(45deg)
        }
        p{
          width: 85%;
          margin: auto;
          color: #6B5F5B;
        }
      }
      .about-box-txt{
        margin: 50px 0;
        p{
          width: 70%;
          margin: 10px auto;
          color: #6B5F5B;
        }
      }
    }
  }
</style>

<template>
  <div class="Custom-division">
    <div class="Custom-division-box">
      <div class="Custom-division-box-head">
        <img src="https://assets.cdn.uniqueway.com/assets/img/our_story/mobile_icon.png" alt="" @click='checkVideoFun'>
      </div>
      <div class="Custom-division-box-head-txt">
        <div class="title">旅行定制师，让你的旅行更省心</div>
        <p>他们曾走遍山川湖海，看过大千世界，<br>
        现在会为你设计行程、落实预订、解决问题，<br>
        他们是真正懂旅行的人，也希望能带你走进最美的风景。</p>
      </div>
      	<div class='mask' v-if='videoState == true' @click='masksCloseFun'></div>
        <div class="videomasks" v-if="videoState == true">
          <video :src='videoSrc' controls='controls' autoplay>
          您的浏览器不支持 video 标签。
          </video>
        </div>
    </div>
    <div class="Custom-division-sec" v-for="n in 4" :key="n.id">
      <h5>让行走，丰盛你的生命和灵魂</h5>
      <div class="title">定制师 / 蔡韵</div>
      <a href=""><img src="https://assets.cdn.uniqueway.com/assets/img/our_story/1.png" alt=""></a>
      <p>东帝汶总统帮我倒了一杯茶，问了我一个问题，热带雨林深处的巫医对我说了她自己的秘密, 土库曼斯坦的那个边警狠狠的告诉我，下次不要再来这个国家，我在伊朗弄丢了朋友送的那个黑袍子，还有人要把他的古堡送我, 你问我去过那儿，准备好十天十夜来听我讲...</p>
      <router-link to="/CaiYun">
        <div class="btn">了解他的故事</div>
      </router-link>
    </div>
    <teams></teams>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import teams from "@/components/Custom-division/team.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  export default {
    components:{
      teams,
      bottomNav,
      bottomFform
    },
    data() {
     return {
     videoSrc:'',
       videoState:false,
     }
    },
    methods:{
      checkVideoFun(){
      this.videoState = true;
      this.videoSrc = "https://document.cdn.uniqueway.com/video/cctv.mp4";
      },
      masksCloseFun(){
      this.videoState = false;
      }
    }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  .Custom-division{
    a{
      width: 100%;
      display: block;
      margin: auto;
      text-decoration: none;
    }
    background-color: #F0F0F0;
    .Custom-division-box{
      margin-top: 50px;
      .Custom-division-box-head{
        width: 100%;
        height: 30vh;
        background-image: url(/static/Custom-division/banner_mobile.jpg);
        background-size: cover;
        background-position: 50% 50%;
        text-align: center;
        position: relative;
        img{
          width: 4.8125rem;
          height: 4.8125rem;
          position: absolute;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
      .Custom-division-box-head-txt{
        padding: 5%;
        background-color: #fff;
        .title{
          font-size: 20px;
          color: #63C6C2;
          margin: 10px 0;
        }
        p{
          font-size: 0.875rem;
          color: #C1BBB4;
          margin-bottom: 10px;
        }
      }
    }
    .Custom-division-sec{
      margin: 30px auto 0;
      padding: 5%;
      background-color: #fff;
      h5{
        font-size: 20px;
        font-weight: normal;
      }
      .title{
        font-size: 14px;
        margin: 10px 0;
        color: #C1BBB4;
      }
      a{
        display: inline-block;
        text-align: center;
        margin:  auto;
        img{
          width: 100%;
        }
      }
      p{
        font-size: 0.875rem;
        color: #C1BBB4;
        letter-spacing :2px;
      }
      .btn{
        width: 190px;
        height: 39px;
        line-height: 39px;
        text-align: center;
        border-radius: 100px;
        margin: 40px auto 0;
        color: #76CDC9;
        border: 2px solid #76CDC9;
      }
    }
  }
</style>
<style scoped>
.mask{
	position:fixed;
	top:0;
	left:0;
	bottom:0;
	right:0;
	z-index:10;
	background-color: #000000;
    opacity: 0.6;
}
.videomasks{
    width: 100%;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 20;
    transform: translate(-50%,-50%);
  }
  .videomasks video{
    width: 100%;
    height: 100%;
  }
</style>

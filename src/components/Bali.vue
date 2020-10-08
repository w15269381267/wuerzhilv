<template>
  <!-- 巴厘岛 -->
  <div class="Bali">
    <div class="Bali-box">
      <div class="Bali-box-head">
        <div class="Bali-box-head-img">
          <div class="title">
            巴厘岛 · BALIISLAND
          </div>
        </div>
        <div class="Bali-box-head-txt">
          <div class="border">
            <div>
              这片岛屿见证了无数明星的爱情，<br>现在正等待将你梦想中的婚礼画面，变成现实。
            </div>
          </div>
        </div>
        <div class="Bali-box-head-btn" @click="fun">
          免费咨询
        </div>
      </div>
      <!-- 教堂 -->
      <BaliSec></BaliSec>
      <!-- 更多 -->
      <more></more>
      <bottomFform></bottomFform>
      <bottomNav></bottomNav>
    </div>
  </div>
</template>

<script>
  import BaliSec from "@/components/Bali/Bali-sec.vue"
  import more from "@/components/Bali/more.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default {
    components:{
      BaliSec,
      more,
      bottomFform,
      bottomNav
    },
    methods:{
      fun(){
        this.consulting()
      }
    },
    inject:['consulting'],

  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  .Bali{
    .Bali-box{
      margin-top: 50px;
      .Bali-box-head{
        width: 100%;
        height: 350px;
        background-image: url(https://assets.cdn.uniqueway.com/assets/img/wedding/bali/banner.jpg);
        background-size: cover;
        background-position: -600px 0;
        text-align: center;
        .Bali-box-head-img{
          display: inline-block;
          width: 40%;
          height: 50px;
          line-height: 50px;
          color: #FFFFFF;
          background-image: url(../../static/wedding/icon_title_bg@2x.png);
          background-size: contain;
        }
        .Bali-box-head-txt{
          width: 90%;
          margin: auto;
          margin-top: 100px;
          .border{
            border: 1px solid #fff5;
            padding: 10px;
            div{
              background-color: #fff;
              padding: 10px 0;
              font-size: 14px;
              opacity: 0.6;
            }
          }
        }
        .Bali-box-head-btn{
          width: 25%;
          margin: 1.25rem auto 0;
          padding: 0.3125rem;
          background-color: #63C6C2;
          color: #fff;
          border-radius: 5px;
        }
      }
    }
  }
</style>

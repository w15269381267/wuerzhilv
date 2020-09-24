<template>
  <div class="selected">
    <header>
      <img src="https://images.cdn.uniqueway.com/uploads/2017/10/af878a3e-a37c-4cd2-9c71-443e96308fd9.jpg!small" alt="">
      <h2>穿行北欧三国，去看极光和圣诞童话</h2>
      <div class="selected-header-txt">
        <span class="txt-red">￥</span>
        <span class="txt-red txt-size">23999</span>
        <span>/人起（参考价）</span>
        <div>
          150人已制定
        </div>
      </div>
    </header>
    <hr>
    <div>
      <img src="/static/selected/service-intro.png" alt="">
    </div>
    <hr>
    <evaluate></evaluate>
    <hr>
    <div class="selected-nav">
      <div class="selected-nav-head">
        <div>线路详情</div>
        <div>费用说明</div>
        <div>预定须知</div>
      </div>
    </div>
    <hr class="min">
    <div class="selected-nav-txt">
      <h4><img src="/static/selected/recommended.png" alt="">推荐理由</h4>
      <p ref="selectedNavTxt">赫尔辛基、斯德哥尔摩、哥本哈根，一趟旅途走遍北欧三都，行程节奏适中；驯鹿雪橇、汽车极光团、入住北极星木屋别墅，多种姿势赏极光，保证你不会错过！蓝色星球水族馆、圣诞老人村、Tivoli游乐园和安徒生童话世界，让你也像孩子一样走进别样童话世界！</p>
      <div class="selected-nav-txt-btn" @click="open">展开</div>
      <div class="clear"></div>
    </div>
    <hr>
    <collapse></collapse>
    <bottomFform></bottomFform>
    <bottom></bottom>
  </div>
</template>

<script>
  import bottom from "@/components/selected/bottom.vue"
  import evaluate from "@/components/selected/evaluate.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import collapse from "@/components/selected/collapse.vue"

  export default {
    data(){
      return{
        draw:true
      }
    },
    components:{
      bottom,
      evaluate,
      bottomFform,
      collapse
    },
    methods:{
      open () {
        let _this = this.$refs.selectedNavTxt
        if(this.draw){
          _this.style.transition="all 0.5s"
          _this.style.height="120px"
          this.draw=!this.draw
        }else{
          _this.style.transition="all 0.5s"
          _this.style.height="100px"
          this.draw=!this.draw
        }
      }
    }
 }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  hr{
    width: 100%;
    height: 10px;
    background-color: #F4F3EE;
    border: none;
  }
  .min{
    height: 3px;
  }
  .selected{
    header{
      margin-top: 50px;
      width: 100%;
      img{
        width: 100%;
      }
      h2{
        width: 95%;
        margin: 20px auto;
        color: #544641;
      }
      .selected-header-txt{
        width: 95%;
        margin: 20px auto;
        margin-top: 20px;
        font-size: 14px;
        color: #B0A8A5;
        .txt-red{
          color: #F06E6E;
        }
        .txt-size{
          font-size: 20px;
          font-style: italic;
        }
        div{
          float: right;
          padding-top: 5px;
        }
      }
    }
    &>div{
      width: 90%;
      margin: 10px auto;
      &>img{
        width: 100%;
      }
    }
    .selected-nav{
      color: #877D7A;
      .selected-nav-head{
        height: 30px;
        line-height: 30px;
        display: flex;
        justify-content: space-around;
        font-weight: bold;
      }
    }
    .selected-nav-txt{
      img{
        width: 16px;
        margin: 0 5px;
      }
      p{
        height: 100px;
        font-size: 0.875rem;
        color: #B0A8A5;
      }
      .selected-nav-txt-btn{
        color: #50BDB9;
        float: right;
      }
      .clear{
        clear: both;
        margin-bottom: 20px;
      }
    }
  }
</style>

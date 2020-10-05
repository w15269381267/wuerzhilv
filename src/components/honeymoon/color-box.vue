<template>
  <div>
    <div class="color">
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/title-green.png" alt="">
      <div class="green-box" v-for=" n in 4">
        <div class="color-box-img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/Mauritius.jpg" alt="">
          <div class="color-box-img-txt">
            <h4>斐济·7天</h4>
            <h3>和爱人“上天入海”</h3>
          </div>
        </div>
        <div class="color-box-txt">
          <p class="green-color"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/HEART.svg" alt=""> 绿在哪：</p>
          <p class="green-color">玛玛奴卡群岛、南太平洋</p>
          <p class="introduce"><span class="special">高空跳伞、深潜、海钓</span>，全方位体验海洋的奇妙</p>
          <p class="introduce">·航行在碧绿纯净的海上，探寻《荒岛余生》风光</p>
          <p class="introduce">·海边四星级度假住宿代订，和爱人听着海浪声入眠</p>
          <p class="person"><span>￥18434</span>/人起</p>
          <div class="green-bgc" @click="fun">
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/couple_white.png" alt="">
            免费咨询
          </div>
        </div>
      </div>
    </div>
    <div class="color">
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/title-blue.png" alt="">
      <div class="green-box" v-for=" n in 4">
        <div class="color-box-img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/Greece.jpg" alt="">
          <div class="color-box-img-txt">
            <h4>斐济·7天</h4>
            <h3>和爱人“上天入海”</h3>
          </div>
        </div>
        <div class="color-box-txt">
          <p class="blue-color"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/heart_blue.svg" alt=""> 蓝在哪：</p>
          <p class="blue-color">蓝顶教堂、费拉小镇爱琴海</p>
          <p class="introduce"><span class="special">潜水、乘游艇、品葡萄酒</span>，营造彼此的独家记忆</p>
          <p class="introduce">·蓝顶教堂、最浪漫日落，体验异国的浪漫风情</p>
          <p class="introduce">·入住悬崖洞穴住宿代订，将爱琴海壮丽风光尽收眼底</p>
          <p class="person"><span>￥21880</span>/人起</p>
          <div class="blue-bgc" @click="fun">
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/couple_white.png" alt="">
            免费咨询
          </div>
        </div>
      </div>
    </div>

    <div class="color">
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/title-red.png" alt="">
      <div class="green-box" v-for=" n in 4">
        <div class="color-box-img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/Japan_red.jpg" alt="">
          <div class="color-box-img-txt">
            <h4>日本·11天</h4>
            <h3>上演东京浪漫爱情故事</h3>
          </div>
        </div>
        <div class="color-box-txt">
          <p class="red-color"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/heart_red.svg" alt=""> 红在哪：</p>
          <p class="red-color">伏见稻荷、东京铁塔</p>
          <p class="introduce"><span class="special">红色的甬道、东京铁塔，感受日本电影中那一抹红</span></p>
          <p class="introduce">·穿和服、吃日料、逛寺庙，体验满满的江户风情</p>
          <p class="introduce">·入住纯纯的日风住宿代订，和恋人沉浸在浪漫的和风中</p>
          <p class="person"><span>￥10990</span>/人起</p>
          <div class="red-bgc" @click="fun">
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/couple_white.png" alt="">
            免费咨询
          </div>
        </div>
      </div>
    </div>

    <div class="color">
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/title-grey.png" alt="">
      <div class="green-box" v-for=" n in 4">
        <div class="color-box-img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/mobile/Norway.jpg" alt="">
          <div class="color-box-img-txt">
            <h4>挪威+芬兰·11天</h4>
            <h3>世界最北邂逅极光童话</h3>
          </div>
        </div>
        <div class="color-box-txt">
          <p class="grey-color"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/heart_grey.svg" alt=""> 灰在哪：</p>
          <p class="grey-color">伏见稻荷、东京铁塔</p>
          <p class="introduce"><span class="special">汽车追极光、基站极光、邮轮极光</span>，极致浪漫的极光蜜月</p>
          <p class="introduce">·穿和服、吃日料、逛寺庙，体验满满的江户风情</p>
          <p class="introduce">·入住峡湾风光住宿代订，在世界最北听涛声入眠是什么体验？</p>
          <p class="person"><span>￥29880</span>/人起</p>
          <div class="grey-bgc" @click="fun">
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/couple_white.png" alt="">
            免费咨询
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      fun(){
        this.consulting()
      }
    },
    inject:['consulting'],
  }
</script>

<style lang="less" scoped>
  .color{
    &>img{
      width: 100%;
    }
    .green-box{
      width: 95%;
      margin: 0 auto 0.625rem;
      .color-box-img{
        position: relative;
          &>img{
          width: 100%;
        }
        .color-box-img-txt{
          color: #fff;
          position: absolute;
          bottom: 5%;
          left: 5%;
        }
      }
      .color-box-txt{
        background-color: #fff;
        padding: 20px 10px;
        position: relative;
        div{
          position: absolute;
          bottom: 7%;
          right: 5%;
          width: 120px;
          padding: 5px;
          font-size: 20px;
          box-sizing: border-box;
          border-radius: 5px;
          color: #fff;
          font-weight: bold;
          img{
            width: 20px;
          }
        }
        .green-color{
          color: #63C6C2;
        }
        .blue-color{
          color: #33B5E5;
        }
        .red-color{
          color: #F84000;
        }
        .grey-color{
          color: #96A4AC;
        }
        .green-bgc{
          background-color: #63C6C2;
        }
        .blue-bgc{
          background-color: #33B5E5;
        }
        .red-bgc{
          background-color: #F84000;
        }
        .grey-bgc{
          background-color: #96A4AC;
        }
        .introduce{
          font-size: 12px;
          color: #B0A8A5;
          .special{
            color: #F64B19;
          }
        }
        .person{
          margin-top: 10px;
          span{
            color: #F64B19;
            font-size: 1.45rem;
          }
        }
      }
    }
  }
</style>

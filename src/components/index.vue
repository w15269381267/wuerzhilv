<template>
  <div>
    <wc-swiper class="wc-swiper">
      <wc-slide class="swiper"><img src="/static/index/0305.jpg" alt=""></wc-slide>
      <wc-slide class="swiper"><img src="https://assets.cdn.uniqueway.com/mix/mip/images/home/banner2019-0730.png" alt=""></wc-slide>
    </wc-swiper>
    <nav class="box">

      <div class="trip-title">
        <router-link to="/CustomTravel" class="router-link">
          <h2>了解定制旅行<span></span></h2>
        </router-link>
      </div>
      <div>好的定制，可以不贵。</div>
      <div class="trip-process">
        <div class="intro">
          <img src="/static/index/profession.png" alt="">
          <div>专业定制师</div>
        </div>
        <div class="intro">
          <img src="/static/index/consultant.png" alt="">
          <div>1v1旅游顾问</div>
        </div>
        <div class="intro">
          <img src="/static/index/guideAPP.png" alt="">
          <div>专属路书&amp;App</div>
        </div>
        <div class="intro">
          <img src="/static/index/24h.png" alt="">
          <div>24出行保障</div>
        </div>
      </div>
    </nav>
    <hr>
    <section class="box firstSec">
      <div class="home-recommend">
        <h2>定制师推荐</h2>
        <div>100+专业定制师，为你挖掘更地道有趣的local玩法</div>
      </div>
      <div class="recommend-theme">
        <router-link to="/honeymoon" class="recommend-theme-link">
          <div class="honeymoon">
            蜜月旅行
          </div>
        </router-link>
        <router-link  to="/honeymoon" class="recommend-theme-link">
          <div class="aurora">
            极光之旅
          </div>
        </router-link>
        <router-link  to="/honeymoon" class="recommend-theme-link">
          <div class="family">
            亲自旅游
          </div>
        </router-link>
      </div>
      <div class="customized-selection">
        <div>
          <div class="route-list" v-for="list in lists">
            <router-link to="/selected" style="display: block;">
              <img :src="list.img" alt="">
              <div class="txt">
                <h4>{{list.h4}}</h4>
                <h3 class="text">{{list.h3}}</h3>
                <div>{{list.txt}}</div>
              </div>
              <div class="footer">
                <span>
                  <span class="rmb">￥</span>
                  <span class="highlight">{{list.highlight}}</span>
                   /人起
                  <span class="number">{{list.number}}</span>
                </span>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <a href="">查看更多路线...</a>
    </section>
    <hr>
    <section class="box commentSec">
      <h2>客户评价</h2>
      <div>好评率近100%，40万+客户体验，看看他们怎么说。</div>
      <div class="route-evaluate">
        <div class="evaluate-head">
          <img src="/static/index/default_avatar.png" alt="">
        </div>
        <div class="evaluate-message">
          <div class="content-header">
            <div class="left">
              <div class="name">猫xx</div>
              <div class="date">2019/9/27</div>
            </div>
            <div class="star">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <div>5.0</div>
            </div>
          </div>
          <div class="content-text">
            推荐无二之旅，定制的日本自由行特优秀，让你旅途无忧。最牛批的是群里的24小时行间保障师，随时帮你解答各种疑难杂症奇葩问题！有需要的可以联系她哦~
          </div>
          <div class="content-img">
            <img src="https://images.cdn.uniqueway.com/uploads/2019/09/LhJW1EcMv5X10GtdKVPPlmQm28FrTELj56JIwvmy.png" alt="">
          </div>
        </div>
      </div>
      <a href="">查看更多用于评价...</a>
    </section>
    <hr>
    <customized></customized>
    <slogan></slogan>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import customized from "@/components/index/customized.vue"
  import slogan from "@/components/index/slogan.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/index/bottom-nav.vue"
  export default {
    name: 'index',
    data () {
      return {
        lists:[
          {img:"https://images.cdn.uniqueway.com/uploads/2017/10/af878a3e-a37c-4cd2-9c71-443e96308fd9.jpg!small",
          h4:"穿行北欧三国，和孩子去看极光和圣诞童话",
          h3:"赫尔辛基-罗瓦涅米-萨利瑟尔-伊纳里-伊瓦洛-赫尔辛基-斯德哥尔摩-哥本哈根-欧登塞-哥本哈根",
          txt:"Tivoli游乐园·小美人鱼·安徒生童话屋",
          highlight:"23999",
          number:"150人已定制"
          },
          {
            img:"https://images.cdn.uniqueway.com/uploads/2014/12/cc2ca917-f308-425f-ae2e-c430176db9f4.jpg!small",
            h4:"初探神秘土耳其，瞭望欧亚奇迹",
            h3:"伊斯坦布尔-卡帕多西亚-棉花堡-费特希耶-伊斯坦布尔",
            txt:"滑翔伞·热气球·横跨亚欧",
            highlight:"13999",
            number:"135人已定制"
          },
          {img:"https://images.cdn.uniqueway.com/uploads/2017/10/af878a3e-a37c-4cd2-9c71-443e96308fd9.jpg!small",
          h4:"穿行北欧三国，和孩子去看极光和圣诞童话",
          h3:"赫尔辛基-罗瓦涅米-萨利瑟尔-伊纳里-伊瓦洛-赫尔辛基-斯德哥尔摩-哥本哈根-欧登塞-哥本哈根",
          txt:"Tivoli游乐园·小美人鱼·安徒生童话屋",
          highlight:"23999",
          number:"150人已定制"
          },
          {
            img:"https://images.cdn.uniqueway.com/uploads/2014/12/cc2ca917-f308-425f-ae2e-c430176db9f4.jpg!small",
            h4:"初探神秘土耳其，瞭望欧亚奇迹",
            h3:"伊斯坦布尔-卡帕多西亚-棉花堡-费特希耶-伊斯坦布尔",
            txt:"滑翔伞·热气球·横跨亚欧",
            highlight:"13999",
            number:"135人已定制"
          },
        ]
      }
    },
    components:{
      customized,
      slogan,
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
  .router-link{
    width: 100%;
    display: block;
    text-decoration: none;
    color: black;
  }
  hr{
    border: none;
    width: 100%;
    height: 0.5rem;
    background-color: #F4F3EE;
  }
  .wc-swiper{
    margin: 0;
    padding: 0;
    img{
      width: 100%;
      height: auto;
      touch-action: none
    }
    .swiper{
      width: 100%;
      height: 18.75rem;
    }
  }
  .box{
    width: 95%;
    font-size: 0.625rem;
    margin: 0.3125rem 0.625rem;
    padding-bottom: 0.625rem;
    h2{
      font-size: 1.5rem;
      margin-top: 1.25rem;
    }
    div{
      margin: 0.625rem 0;
    }
  }
  nav{
    .trip-title{
      margin: 1.25rem auto 0;
      display: flex;
      justify-content: space-between;
      span{
        display: inline-block;
        float: right;
        margin-top: 0.3rem;
        width: 2rem;
        height: 2rem;
        background-image: url(/static/index/arrowdoen.png);
        -webkit-background-size: cover ;
        background-size: cover ;
        transform:rotate(-90deg);
      }
    }
    .trip-process{
      margin: 0.9375rem auto 0.9375rem;
      display: flex;
      justify-content: space-between;
      text-align: center;
      img{
        width: 3rem;
        height: 3rem;
      }
    }
  }
  .firstSec{
    height: 550px;
    a{
      margin-left: 0.3125rem;
      color: #63C6C2;
      text-decoration: none;
      font-size: 1rem;
      padding-bottom: 1.25rem;
    }
    .recommend-theme{
      display: flex;
      justify-content: space-between;
      text-align: center;
      .recommend-theme-link{
        display: block;
        width: 30%;
        &>div{
          width: 100%;
        }
      }
      div{
        margin: 0.625rem auto 0.625rem;
        width: 30%;
        height: 3.875rem;
        line-height: 3.875rem;
        font-size: 1rem;
        font-weight: bold;
        border-radius: 0.3125rem;
        color: #fff;
        -webkit-background-size: cover ;
        background-size: cover ;
      }
      .honeymoon{
        background-image: url(/static/index/honeymoon.jpg);
      }
      .aurora{
        background-image: url(/static/index/aurora.jpg);
      }
      .family{
        background-image: url(/static/index/family.jpg);
      }
    }
    .customized-selection{
      width: 100%;
      overflow: auto;
      div{
        display: flex;
        width: 62.5rem;
        .route-list{
          display: block;
          margin: 0 0.3125rem;
          width: 15rem;
          height: 20.5rem;
          img{
            width: 15rem;
            height: 10rem;
          }
          .txt{
            width: 15rem;
            display: block;

            h4,h3{
              margin-top: 0.625rem;
              font-size: 1.25rem;
              overflow:hidden;
              white-space:nowrap;
              text-overflow:ellipsis;
            }
            h3{
              font-weight: normal;
              font-size: 1rem;
            }
            div{
              margin-top: 0.3125rem;
              color: #B6AEA2;
            }
          }
        }
        .footer{
          margin-top: 1.25rem;
          span{
            color: #B6AEA2;
            .rmb{
              color: red;
            }
            .highlight{
              font-size: 1.2rem;
              color: red;
            }
            .number{
              margin-left: 0.9375rem;
            }
          }
        }
      }
    }
  }
  .commentSec{
    .route-evaluate{
      display: flex;
      justify-content: space-around;
      .evaluate-head{
        width: 2.5rem;
        img{
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 1.25rem;
        }
      }
      .evaluate-message{
        margin: 0;
        display: block;
        width: 20.625rem;
        .content-header{
          &::after{
            display: block;
            content: "";
            clear: both;
          }
          .left{
            margin: 0;
            float: left;
            font-size: 0.875rem;
            div{
              margin: 0;
            }
          }
          .star{
            float: right;
            span{
              display: inline-block;
              width: 1.125rem;
              height: 1.125rem;
              background-image: url(/static/index/star.png);
              -webkit-background-size: cover;
              background-size: cover;

            }
            div{
              font-size: 1.2rem;
              display: inline-block;
              color: #5FC6C2;
              position: relative;
              right: 8.6375rem;
              bottom: 0.2125rem;
              clear: both;
            }
          }
        }
        .content-img{
          height: 7.25rem;
          overflow: hidden;
          img{
            width: 12.5rem;
          }
        }
      }
    }
    a{
      margin-left: 5px;
      color: #63C6C2;
      text-decoration: none;
      font-size: 1rem;
      padding-bottom: 1.25rem;
    }
  }
</style>

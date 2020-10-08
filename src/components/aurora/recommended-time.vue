<template>
  <div class="recommended-time">
    <div class="recommended-time-box">
      <div class="title"><span class="bg">北 极 光 攻 略</span>观赏极光的推荐时间</div>
      <p class="section_title_describe">极光可遇不可求，选对时间，可以更大概率邂逅极光<img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/aurora_x.png" alt=""></p>
      <div class="img-box">
        <div class="img-box-title bg">极光最佳观赏时间</div>
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/sheet_one.png" alt="">
        <div class="img-box-txt">
          <p>极光多爆发时间：11月-次年3月</p>
          <p>（一月是观赏极光的最佳时间）</p>
        </div>
      </div>
      <div class="img-box bottom">
        <div class="situation"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/arrow.png" alt="">机票代订预订情况</div>
        <div class="img-box-title bg">机票代订预订价格涨幅</div>
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/sheet_two.png" alt="">
        <div class="img-box-txt">
          <p>机票代订预定时间越晚，小心价格会越高哦！</p>
          <p>想要超值低价机票代订，那就尽快下手吧！</p>
        </div>
      </div>
    </div>
    <div class="experience">
      <div class="title"><span class="bg">北 极 光 攻 略</span>观赏极光的特色体验</div>
      <p class="section_title_describe">极光可遇不可求，选对时间，可以更大概率邂逅极光<img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/aurora_experience.png" alt=""></p>
      <div class="location">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/location.png" alt="">萨利色尔卡
        <p>芬兰的玻璃小屋发源地</p>
        <p class="bg"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/heart.png" alt=""> 躺在玻璃小屋看极光</p>
      </div>
      <div class="experience_bottom">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/rate.png" alt="">
        <p>十一月至次年二月旺季一房难求</p>
        <p>趁预订率还没到100%，赶紧抢到档期吧！</p>
      </div>
    </div>
    <div class="more">
      <div class="more-box">
        <h3>更多特色体验...</h3>
      </div>
      <div class="more-box-flex">
        <div>
          <div class="more-flex-box" v-for="n in 3">
              <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/car.jpg" alt="">
            <div>专业汽车追光团，</div>
            <div>带你寻找晴朗的旷野，</div>
            <div>更高概率看到极光!</div>
            <p class="bg"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/heart.png" alt="">汽车追光团</p>
          </div>
        </div>
      </div>
    </div>
    <div class="destination">
      <div class="title"><span class="bg">北 极 光 攻 略</span>观赏极光的推荐目的地</div>
      <p class="section_title_describe">你只需要决定出发，剩下的一切交给无二之旅就好<img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/aurora_z.png" alt=""></p>
      <div class="destination-flex">
        <div>
          <div class="destination-flex-box" v-for="n in 3">
            <div class="destination-title">Inari, Finland</div>
            <div class="destination-str">★ ★ ★ ★</div>
            <div class="destination-bottom">芬兰·伊纳里</div>
            <div>一年大约有200个晴朗的夜晚</div>
          </div>
        </div>
      </div>
    </div>
    <div class="route">
      <div class="title"><span class="bg">北 极 路 线</span>观赏极光的推荐线路</div>
      <div v-for="n in 4" :key="n.id">
        <div class="route-box">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/mobile_family.png" alt="">
          <div class="route-box-txt">
            <p>一路向北</p>
            <h3>芬兰7天梦幻之旅</h3>
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/one_fifth.jpg" alt="">
            <p>芬兰除了可以看到极光，还拥有独特的冰雪风光，一家人可以一同畅游童话里的冰雪王国。</p>
            <p><span class="black"><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/time.png" alt=""> 推荐时长：</span>7天6晚，长度适中，适合带孩子出行。</p>
            <div class="btn" @click="fun">免费咨询</div>
          </div>
        </div>
      </div>
    </div>
    <div class="wedding">
      <div class="title"><span class="bg">北 极 婚 礼</span>冰雪中的极致浪漫</div>
      <p class="section_title_describe">给你一场独一无二的极地婚礼<img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/aurora_experience.png" alt=""></p>
      <div class="wedding-flex">
        <div>
          <div class="wedding-flex-box" v-for="n in 3">
            <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/sweden_wedding.jpg" alt="">
            <div class="white">
              <div class="w-tltle">瑞典冰屋婚礼</div>
              <p class="first">冰块雕砌的房间中</p>
              <p>凝固住最美的时光</p>
            </div>
            <div class="gray">
              <div class="g-title">玻璃穹顶小屋</div>
              <p>躺在床上看漫天星辰和北极光</p>
              <div class="g-title">冰雪婚礼</div>
              <p>冰教堂典礼仪式+雪地庄园婚宴 </p>
              <div class="g-title">桑拿&amp;热水浴缸</div>
              <p>庆典后可蒸桑拿和泡热水澡</p>
            </div>
          </div>
        </div>
      </div>
      <div class="btn" @click="fun">免费咨询</div>
    </div>
    <div class="story">
      <div class="title"><span class="bg">极 光 案 例</span>看看他们的定制旅行故事</div>
      <p class="section_title_describe">在无二之旅定制旅行的感受，不妨看看他们怎么说<img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/aurora/mobile/aurora_x.png" alt=""></p>
      <div class="img"><span>查看他们的故事</span></div>
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
  .recommended-time{
    width: 100%;
    background-color: #F4F3EE;
    text-align: center;
    .btn{
      display: inline-block;
      margin: 20px 0;
      padding: 10px 20px;
      border-radius: 10px;
      margin-bottom: 20px;
      color: #fff;
      background-color: #F64B19;
    }
    .bg{
      display: inline-block;
      background-image: linear-gradient(90deg,#1af0ff,#6bdb0a);
     border-radius: 100px;
     color: #fff;
     padding: 2px 10px;
    }
    .section_title_describe{
      display: inline-block;
      font-size: 14px;
      padding: 5px;
      color: #918682;
      border: 1px solid #DAD5CE;
      border-radius: 100px;
      position: relative;
      img{
        width: 20%;
        position: absolute;
        top: -10px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    .title{
      font-size: 20px;
      padding: 30px 0 30px;
      span{
        font-size: 14px;
      }
    }
    .recommended-time-box{
      .img-box{
        width: 80%;
        margin: 20px auto;
        padding: 30px 0 0;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
        img{
          width: 80%;
        }
        .img-box-txt{
          background-color: #F4F3EE;
          padding: 20px 0;
        }
      }
      .bottom{
        position: relative;
        top: -10px;
      }
      .situation{
        display: inline-block;
        position: absolute;
        top: -5px;
        font-size: 14px;
        background-color: #fff;
        border-radius: 100px;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
        z-index: 10;
        img{
          width: 10%;
          transform: rotate(90deg);
        }
      }
    }
    .experience{
      height: 700px;
      padding-top: 12%;
      background-image: url(../../../static/aurora/time.jpg);
      -webkit-background-size: cover;
      background-size: cover;
      background-position: 50% 50%;
      color: #fff;
      .section_title_describe{
        color: #fff;
      }
      .location{
        display: inline-block;
        margin: 40px 0 0;
        font-size: 1.5625rem;
        img{
          width: 10%;
        }
        p{
          font-size: 14px;
          margin: 10px 0;
        }
        .bg{
          position: relative;
          padding: 0 7px 0 20px;
          img{
            position: absolute;
            left: 5px;
            top: 2px;
          }
        }
      }
      .experience_bottom{
        margin: 30px 0 0;
        img{
          width: 60%;
          margin-bottom: 30px;
        }
        p{
          margin: 10px 0;
        }
      }
    }
    .more{
      width: 100%;
      margin: 3.125rem 0 1.25rem;
      .more-box{
        width: 90%;
        margin: 0.625rem auto 0.3125rem;
      }
      h3{
        text-align: left;
      }
      .more-box-flex{
        width: 90%;
        margin: auto;
        overflow: auto;
        text-align: left;
        &>div{
          width: 1000px;
          display: flex;
          .more-flex-box{
            width: 80%;
            text-align: center;
            position: relative;
            img{
              width: 80%;
            }
            &>div{
              width: 80%;
              padding: 2px 0;
              margin: auto;
              font-size: 0.875rem;
              background-color: #fff;
            }
            p{
              font-size: 14px;
              position: absolute;
              top: 63%;
              left: 50%;
              transform: translateX(-50%);
              img{
                width: 10%;
              }
            }
          }
        }
      }
    }
    .destination{
      background-color: #fff;
      .destination-flex{
        width: 90%;
        margin: 10px auto;
        overflow: auto;
        text-align: left;
        &>div{
          width: 1000px;
          display: flex;
          .destination-flex-box{
            margin: 0 10px;
            width: 100%;
            height: 500px;
            background-image: url(../../../static/aurora/fenlan.jpg);
            -webkit-background-size: cover;
            background-size: cover;
            color: #FFFFFF;
            text-align: center;
            .destination-title{
              margin: 50px 0 20px;
            }
            .destination-bottom{
              margin: 70% 0 10%;
            }
          }
        }
      }
    }
    .route{
      &>div{
        margin-bottom: 20px;
      }
      .route-box{
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
        width: 90%;
        margin: auto;
        background-color: #FBFAF7;
        text-align: left;
        img{
          width: 50%;
          margin-left: 0;
          margin-left: 10px;
        }

        .route-box-txt{
          width: 90%;
          margin: auto;
          text-align: center;
          &>img{
            width: 100%
          }
          p{
            margin: 5px 0;
            color: #918682;
            font-size: 15px;
          }
          .black{
            color: #000;
            img{
              width: 4%;
            }
          }
        }
      }
    }
    .wedding{
      background-image: url(../../../static/aurora/wedding-bg.jpg);
      background-size: cover;
      background-position: 50% 50%;
      color: #fff;
      .section_title_describe{
        color: #fff;
      }
      .wedding-flex{
        width: 90%;
        margin: 10px auto;
        overflow: auto;
        text-align: left;
        &>div{
          width: 1000px;
          display: flex;
          .wedding-flex-box{
            margin: 0 10px;
            width: 30%;
            text-align: center;
            color: #716561;
            img{
              width: 100%;
            }
            p{
              font-size: 12px;
              padding: 2px 0;
            }
            .white{
              margin-top: -5px;
              background-color: #fff;
              position: relative;
              .w-tltle{
                display: inline-block;
                color: black;
                border-radius: 100px;
                padding: 0 5px;
                box-shadow: 0 1px 2px 0 rgba(0,0,0,.2);
                background-color: #fff;
                position: absolute;
                top: -5px;
                left: 50%;
                transform: translateX(-50%);
              }
              .first{
                padding-top: 20px;
              }
            }
            .gray{
              background-color: #F4F3EE;
              .g-title{
                color: black;
              }
            }
          }
        }
      }
    }
    .story{
      background-color: #fff;
      .img{
        width: 90%;
        height: 27vh;
        margin: 20px auto 0;
        background-image: url(../../../static/aurora/case.jpg);
        background-size: cover;
        span{
          color: #fff;
          position: relative;
          top: 40%;
          padding: 0 5px;
          border: 2px solid #fff;
          border-radius: 100px;
        }
      }
    }
  }
</style>

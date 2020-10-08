<template>
  <div class="preschool">
    <div class="preschool-box">
      <div class="preschool-box-head">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/preschool_child.png" alt=""><br>
        <div>学龄前小朋友·<span>可以这样玩</span></div>
      </div>
      <nav>
        <ul>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/nature.png" alt=""><br><p>初探大自然</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/animal.png" alt=""><br><p>亲近小动物</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/pleasure.png" alt=""><br><p>童真乐趣</p></li>
          <li><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/soothing.png" alt=""><br><p>节奏舒缓</p></li>
        </ul>
      </nav>
      <div class="preschool-box-txt" v-for="n in 3" :key="n.id">
        <h2>日本·6天</h2>
        <h2>冲绳童趣自然之旅</h2>
        <div class="nav">
          <span>适合3~7岁孩子</span>
          <span>海岛</span>
          <span>全程包车</span>
          <span>五星住宿代订</span>
        </div>
        <div class="img"><img src="../../../static/family/Okinawa.jpg" alt=""><span><img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/location.png" alt="">日本冲绳亲子游</span></div>
        <div class="txt1">
          <p>• 悠闲海岛冲绳，世界一级沙滩，美日混搭异国风情</p>
          <p>• 水族馆、万座毛、菠萝小火车，充分接触大自然</p>
          <p>• <span>全程包车+五星豪华度假住宿代订</span>,多彩儿童娱乐项目</p>
        </div>
        <div class="person">
          <div class="left">￥10180<span>/人起</span></div>
          <div class="right" @click="fun">免费咨询</div>
        </div>
        <div class="lightspot">
          <div class="title">行程亮点</div>
          <p>• 在冲绳美丽海水族馆感受真正的《大鱼海棠》；</p>
          <p>• 五星级住宿代订——冲绳万丽度假村（或同级别住宿代订）5晚；</p>
          <p>• 探索“琉球王国”集齐图章，召唤宝藏；</p>
          <p>• 游览趣味十足的美国村，在日落海滩戏水漫步。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    methods:{
      fun(){
        this.consulting()
      }
    },
    inject:['consulting'],
  }
</script>

<style lang="less" scoped>
  .preschool{
    .preschool-box{
      background-color: #FCF7F1;
      .preschool-box-head{
        text-align: center;
        img{
          width: 20%;
        }
        div{
          width: 90%;
          margin: auto;
          background-color: #5DB31A;
          font-size: 25px;
          font-weight: bold;
          color: #fff;
          border-radius: 100px;
          span{
            font-weight: normal;
          }
        }
      }
      nav{
        text-align: center;
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
            p{
              display: inline-block;
              padding: 3px 7px;
              border-radius: 100px;
              border: 2px solid #DDD5C9;
            }
          }
        }
      }
      .preschool-box-txt{
        padding: 20px 0 0;
        width: 90%;
        margin: 0 auto 20px;
        background-color: #fff;
        box-shadow: 0 8px 13px 0 rgba(0,0,0,.1);
        color:#622A14;
        h2{
          text-align: center;
        }
        .nav{
          span{
            font-size: 14px;
            margin: 0 0.3125rem 20px;
            padding: 3px 5px;
            border-radius: 6.25rem;
            background-color: #FCF7F1;
          }
        }
        .img{
          text-align: center;
          margin-top: 20px;
          position: relative;
          &>img{
            width: 90%;
            border-radius: 5px;
          }
          span{
            color: #fff;
            img{
              width: 16px;
            }
            position: absolute;
            left: 10%;
            bottom: 5%;
            padding: 5px;
            background-color: #0009;
            border-radius: 100px;
          }
        }
        .txt1{
          width: 90%;
          margin: auto;
          font-size: 0.875rem;
          span{
            color: red;
          }
        }
        .person{
          width: 90%;
          margin: 10px auto 20px;
          font-size: 25px;
          overflow: hidden;
          .left{
            float: left;
            color: red;
            span{
              font-size: 16px;
              color: #622A14;
            }
          }
          .right{
            float: right;
            font-size: 20px;
            font-weight: bold;
            background-color: #63C6C2;
            color: #FFFFFF;
            padding: 5px 10px;
            border-radius: 100px;
          }
        }
        .lightspot{
          width: 100%;
          padding: 5% 5%;
          margin: 0 auto;
          font-size: 0.875rem;
          box-sizing: border-box;
          background-color: #FCF7F1;
        }
      }
    }
  }
</style>

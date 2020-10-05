<template>
  <div class="JapanStrategy">
    <hr>
    <div class="JapanStrategy-box">
      <div class="Strategy">
        <h3>精选日本攻略</h3>
        <nav>
          <span>定制旅行</span>
          <span>定制师</span>
          <span>客户评价</span>
          <span>亲子游</span>
          <span>蜜月游</span>
        </nav>
        <section>
          <div class="Strategy-flex" v-for="n in 3" :key="n.id">
            <div class="Strategy-img">
              <img src="https://images.cdn.uniqueway.com/uploads/2020/02/47GAforat5KlFcPHHRXAY1xLY9yGdQB92fZs1Dkw.jpeg!small" alt="">
            </div>
            <div class="Strategy-txt">
              <h4>春天去哪里玩？春天出国旅游攻略合集！</h4>
              <p>11月03日</p>
              <span>点击阅读</span>
            </div>
          </div>
        </section>
        <div class="more">查看更多攻略...</div>
        <div class="text">获取你的旅行方案和攻略路书</div>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .JapanStrategy{
    hr{
      background-color: #F4F3EE;
      height: 5px;
      border: none;
    }
    .JapanStrategy-box{
      width: 90%;
      margin: auto;
      h3{
        font-size: 20px;
        margin: 20px 0;
      }
      span{
        padding: 1px 5px;
        background-color: #F4F3EE;
        border-radius: 15px;
      }
      .Strategy-flex{
        display: flex;
        justify-content: space-around;
        margin: 10px 0;
        .Strategy-img{
          width: 40%;
          img{
            width: 100%;
          }
        }
        .Strategy-txt{
          width: 60%;
          margin-left: 20px;
          position: relative;
          h4{
            font-size: 18px;
            margin-top: 5px;
          }
          p{
            position: absolute;
            bottom: 5px;
            left: 0;
          }
          span{
            position: absolute;
            bottom: 5px;
            right: 0;
          }
        }
      }
      .more{
        color: #63C6C2;
        font-size: 1.125rem;
        font-weight: bold;
        margin: 10px 0;
      }
      .text{
        padding: 0.625rem;
        width: 90%;
        background-color: #63C6C2;
        color: #fff;
        margin: auto;
        text-align: center;
        border-radius: 20px;
        margin-bottom: 20px;
      }
    }
  }
</style>

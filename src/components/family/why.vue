<template>
  <div class="why">
    <div class="why-box">
      <div class="title">出国亲子游<span>·推荐国家</span></div>
      <div class="why-box-flex">
        <div>
          <div class="why-flex-box" v-for="n in 3">
             <div class="flex-title">不跟团 才自由</div>
            <div class="txt">
              <p>•时间，随你定。</p>
              <p>•节奏，随你定。</p>
              <p>玩法，随你定。</p>
              <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/free.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .why{
    .why-box{
      text-align: center;
      background-color: #FCF7F1;
      .title{
        color: #622A14;
        font-size: 25px;
        padding: 30px 0;
        span{
          font-weight: bold;
        }
      }
      .why-box-flex{
        width: 90%;
        margin: auto;
        overflow: auto;
        text-align: left;
        &>div{
          width: 1000px;
          display: flex;
          .why-flex-box{
            margin-top: 30px;
            margin-bottom: 30px;
            padding: 30px 0 30px 20px;
            box-sizing: border-box;
            width: 70%;
            text-align: left;
            position: relative;
            margin-right: 10px;
            background-color: #fff;
            position: relative;
            img{
              position: absolute;
              top: 50%;
              right: 0;
              transform: translateY(-50%);
            }
            .flex-title{
              position: absolute;
              top: -10px;
              left: 50%;
              transform: translateX(-50%);
              color: #FFFFFF;
              background-color: #63C6C2;
              padding: 3px 6px;
              border: 3px solid #FFFFFF;
              border-radius: 100px;
              box-shadow: 0 0 6px 0 rgba(0,0,0,.2);
            }
          }
        }
      }
    }
  }
</style>

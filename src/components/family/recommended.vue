<template>
  <div class="recommended">
    <div class="recommended-box">
      <div class="title">出国亲子游<span>·推荐国家</span></div>
      <div class="recommended-box-flex">
        <div>
          <div class="recommended-flex-box" v-for="n in 3">
            <img src="../../../static/family/Japan.jpg" alt="">
            <div class="txt">
              <p>•飞行时间短，不用倒时差；</p>
              <p>•亲子设施完善；</p>
              <p>•传统文化风情与现代科技兼具；</p>
              <p>•各类水族馆、动物园、主题乐园…体验丰富</p>
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
  .recommended{
    .recommended-box{
      text-align: center;
      background-color: #F5F4EF;
      .title{
        color: #622A14;
        font-size: 25px;
        padding: 20px 0;
        span{
          font-weight: bold;
        }
      }
      .recommended-box-flex{
        width: 90%;
        margin: auto;
        overflow: auto;
        text-align: left;
        &>div{
          width: 1000px;
          display: flex;
          .recommended-flex-box{
            width: 70%;
            text-align: center;
            position: relative;
            margin-right: 10px;
            img{
              width: 100%;
            }
            &>div{
              width: 80%;
              padding: 2px 0;
              margin: auto;
              font-size: 0.875rem;
            }
            .txt{
              width: 100%;
              position: absolute;
              bottom: 1%;
              left: 50%;
              transform: translateX(-50%);
              text-align: left;
              color: #fff;
              background-color: #0009;
              p{
                margin: 5px;
              }
            }
          }
        }
      }
    }
  }
</style>

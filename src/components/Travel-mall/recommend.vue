<template>
  <div class="recommend">
    <div class="recommend-box">
      <h2>定制师推荐</h2>
      <p>100+专业定制师，为你挖掘更地道有趣的local玩法。</p>
      <div class="recommend-box-imgs">
        <div class="recommend-box-imgs-left">
          <router-link to="/selected">
            <img src="/static/Travel-mall/customizer-card.jpg" alt="">
            <div class="recommend-box-imgs-txt">
              <h3>网红打卡地</h3>
              <div>揭开土耳其神秘面纱，</div>
              <div>抖音同款get！</div>
            </div>
          </router-link>
        </div>

        <div class="recommend-box-imgs-right">
          <div class="recommend-right-top">
            <router-link to="/selected">
              <img src="/static/Travel-mall/customizer-nation.jpg" alt="">
              <div class="recommend-box-imgs-txt">
                <h3>欧洲去哪玩</h3>
                <div>10种玩法，不一样的法意瑞</div>
              </div>
            </router-link>
          </div>
          <div class="recommend-right-bottom">
            <div class="recommend-right-bottom1">
              <router-link to="/selected">
                <img src="/static/Travel-mall/customizer-cherry.png" alt="">
                <div class="recommend-box-imgs-txt">
                  <h3>日本</h3>
                  <h3>樱花季</h3>
                </div>
              </router-link>
            </div>
            <div class="recommend-right-bottom2">
              <router-link to="/selected">
                <img src="/static/Travel-mall/customizer-aurora.jpg" alt="">
                <div class="recommend-box-imgs-txt">
                  <h3>北极之光</h3>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="less" scoped>
  .recommend{
    width: 100%;
    margin-bottom: 3.125rem;
    .recommend-box{
      width: 90%;
      margin: 0 auto;
    }
    .recommend-box-imgs{
      display: flex;
      justify-content: space-around;
      .recommend-box-imgs-txt{
        position: absolute;
        left: 0.325rem;
        bottom: 0.3625rem;
        color: #fff;
      }

      .recommend-box-imgs-left{
        width: 45%;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          border-radius: 0.3125rem;
        }
      }
      .recommend-box-imgs-right{
        display: block;
        width: 53%;
        position: relative;
        img{
          width: 100%;
          height: 100%;
          border-radius: 0.3125rem;
        }
        .recommend-right-top{
          position: relative;
        }
        .recommend-right-bottom{
          display: flex;
          justify-content: space-between;
          &>div{
            width: 49%;
            height: 100%;
          }
          .recommend-right-bottom1{
            position: relative;
          }
          .recommend-right-bottom2{
            position: relative;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="Special-accommodation">
    <div class="Special-accommodation-box">
      <h3>特惠住宿代订</h3>
      <p>精选资源：奢华高端 清新舒适 特色主题，</p>
      <p>全网最低价，另有独家福利！</p>
      <div class="Special-box" v-for="n in 3">
        <div class="Special-box-list">
          <div class="Special-box-list-img">
            <img src="/static/Travel-mall/gRs9lL3NVWg5EaSdkwq6K1DJzlr9imqjYVmLi5CN.jpeg" alt="">
          </div>
          <div class="Special-box-list-txt">
            <h4>Hanging Gardens of Bali</h4>
            <p>不只住宿，住宿代订也能玩出几十种花样</p>
            <div class="price">
              <span>起/人</span>
              <span class="num">10</span>
              <span class="icon">%</span>
              <div class="custom-mode">立即咨询</div>
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
  .Special-accommodation{
    width: 100%;
    .Special-accommodation-box{
      width: 90%;
      margin: auto;
    }
    .Special-box{
      margin: 0.725rem auto;
      background-color: #F8F7F2;
      .Special-box-list{
        display: flex;
        margin: auto;
        justify-content: space-around;
      }
      .Special-box-list-img{
        width: 40%;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .Special-box-list-txt{
        margin-left: 10px;
        position: relative;
        span{
          font-size: 0.875rem;
        }
        .icon{
          color: #F06E6E;
          font-style: italic;
        }
        .num{
          color: #F06E6E;
          font-size: 1.25rem;
          font-style: italic;
        }
        .custom-mode{
          width: 70px;
          height: 25px;
          line-height: 25px;
          text-align: center;
          background-color: #fff;
          border-radius: 5px;
          font-size: 0.875rem;
          position: absolute;
          right: 5px;
          bottom: 5px;
        }
      }
    }
  }
</style>

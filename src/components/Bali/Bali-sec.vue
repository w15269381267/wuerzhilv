<template>
  <div class="Bali-sec">
    <div class="Bali-sec-box">
      <div class="title">
        巴厘岛婚礼场地
      </div>
      <div class="sec" v-for="n in 3" :key="n.id">
        <div class="img">
          <div class="block"><!-- 轮播图 -->
              <el-carousel trigger="click" height="150px" :autoplay="false">
                <el-carousel-item>
                  <img src="../../../static/Bali/place1-1.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../../../static/Bali/place1-2.jpg" alt="">
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../../../static/Bali/place1-3.jpg" alt="">
                </el-carousel-item>
              </el-carousel>
            </div>
        </div>
        <div class="txt">
          <h3>悦榕庄白鸽教堂</h3>
          <p>白鸽教堂外形别具一格，住宿代订知名度高，晚宴可以在悬崖餐厅举行，私密性佳。<br>
          白鸽教堂坐落在海平面70公尺的海崖之上， 纯白的屋顶一侧以上千只象征爱与和平的白鸽装饰， 祝福新人们永浴爱河、 白头偕老。 <br>
           教堂背依宽阔的印度洋， 你将和最爱的人们在这里共享人生中最幸福难忘的瞬间。
          </p>
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
  .Bali-sec{
    background-color: #F5F4EF;
    .Bali-sec-box{
      padding: 20px 0;
      text-align: center;
      .title{
        font-size: 20px;
        padding: 20px 0;
      }
      .img{
        img{
          width: 90%;
          margin: auto;
        }
      }
      .txt{
        width: 90%;
        margin: 0 auto 10px;
        padding: 0 0 10px;
        background-color: #fff;
        h3{
          padding: 10px 0;
        }
      }
    }

  }
</style>

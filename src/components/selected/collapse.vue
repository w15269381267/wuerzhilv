<template>
  <!-- 折叠面板 -->
  <div class="collapse">
    <el-collapse accordion>
      <el-collapse-item v-for="n in 6">
        <template slot="title">
          <span class="collapse-title"><span class="collapse-title-bgc">D{{n}}</span> 万塔(赫尔辛基大区) - 赫尔辛基</span>
        </template>
        <div class="bgc">
          <div class="collapse-txt">万塔(赫尔辛基大区)<span class="place"><img src="/static/selected/city.svg" alt=""></span></div>
          <div class="collapse-txt">
            赫尔辛基万塔机场
            <span class="place">
              <img src="/static/selected/airport.svg" alt="">
            </span>
            <div class="collapse-img">
              <div class="left">
                <img src="https://images.cdn.uniqueway.com/uploads/2014/11/5334fb66-7efb-4507-b1c7-d28962531a37.jpg!small" alt="">
              </div>
              <div class="right">
                <div><img src="https://images.cdn.uniqueway.com/uploads/2014/11/3eca7a2b-055c-47c4-9f34-db9ee0d96ebf.jpg!small" alt=""></div>
                <div><img src="https://images.cdn.uniqueway.com/uploads/2014/11/845527b6-a7a9-457f-8394-c654e838a29c.jpg!small" alt=""></div>
              </div>
            </div>
          </div>
          <div class="collapse-txt">赫尔辛基<span class="place"><img src="/static/selected/city.svg" alt=""></span></div>
          <div class="collapse-txt">斯堪迪克斯蒙肯塔住宿代订<span class="place"><img src="/static/selected/attractions.svg" alt=""></span>
          <p>这家住宿代订地理位置优越，距离赫尔辛基中央火车站以及主要购物街步行5分钟左右就能到达，出行特别方便，住宿代订周边有不少餐厅方便去用餐。住宿代订内的装修风格现代，而且住宿代订内的设施齐全，桑拿浴室和健身房都有，可以去里面休闲锻炼。住宿代订的屋顶有露台，可以坐在上面休息看看城市的景色。这里真的是住在赫尔辛基市中心不错的选择！</p>
          <div class="collapse-img">
            <div class="left">
              <img src="https://images.cdn.uniqueway.com/uploads/2014/12/7086fec4-8790-4620-84fd-75d1f7d92bb2.jpg!small" alt="">
            </div>
            <div class="right">
              <div><img src="https://images.cdn.uniqueway.com/uploads/2014/12/e82e2b81-e362-4eeb-a8af-dd25212542f9.jpg!small" alt=""></div>
              <div><img src="https://images.cdn.uniqueway.com/uploads/2017/12/f853c2d9-ea13-4bbd-aa10-3a129d88950c.jpg!small" alt=""></div>
            </div>
          </div>
          </div>
          <div class="collapse-txt">斯堪迪克斯蒙肯塔住宿代订<span class="place"><img src="/static/selected/attractions.svg" alt=""></span>
          <p>这家住宿代订地理位置优越，距离赫尔辛基中央火车站以及主要购物街步行5分钟左右就能到达，出行特别方便，住宿代订周边有不少餐厅方便去用餐。住宿代订内的装修风格现代，而且住宿代订内的设施齐全，桑拿浴室和健身房都有，可以去里面休闲锻炼。住宿代订的屋顶有露台，可以坐在上面休息看看城市的景色。这里真的是住在赫尔辛基市中心不错的选择！</p>
          <div class="collapse-img">
            <div class="left">
              <img src="https://images.cdn.uniqueway.com/uploads/2014/12/7086fec4-8790-4620-84fd-75d1f7d92bb2.jpg!small" alt="">
            </div>
            <div class="right">
              <div><img src="https://images.cdn.uniqueway.com/uploads/2014/12/e82e2b81-e362-4eeb-a8af-dd25212542f9.jpg!small" alt=""></div>
              <div><img src="https://images.cdn.uniqueway.com/uploads/2017/12/f853c2d9-ea13-4bbd-aa10-3a129d88950c.jpg!small" alt=""></div>
            </div>
          </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item disabled v-for="n in 5">
          <template slot="title">
            <span class="collapse-title"><span class="collapse-title-bgc new-bgc">D{{n+6}}</span> 斯德哥尔摩</span>
            <span class="collapse-title-btn">免费咨询</span>
          </template>
        </el-collapse-item>
    </el-collapse>
    <div class="">

    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .collapse{
    .bgc{
      background-color: #F9F9F6;
    }
    .collapse-title{
      font-weight: bold;
      font-size: 16px;
      height: 30px;
      line-height: 30px;
      .collapse-title-bgc{
        display: inline-block;
        font-size: 14px;
        width: 30px;
        height: 30px;
        border-radius: 30px;
        text-align: center;
        color: #fff;
        background-color: #5FC6C2;
      }
      .new-bgc{
        background-color: #CCCCCC;
      }
    }
    .collapse-title-btn{
      margin-left: 30%;
      color: #5FC6C2;
    }
    .collapse-txt{
      font-size: 1rem;
      font-weight: bold;
      margin-left: 15px;
      padding: 15px 30px;
      border-left: 1px solid #D6D1CA;
      position: relative;
      p{
        font-size: 10px;
        color: #918682;
      }
      span{
        display: inline-block;
        width: 32px;
        height: 32px;
        border-radius: 16px;
        line-height: 2rem;
        text-align: center;
        background-color: #fff;
        position: absolute;
        left: -15px;
        top: 8px;
        img{
          width: 100%;
        }
      }
      .collapse-img{
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        .left{
          width: 59%;
          img{
            width: 100%;
            height: 130px;
          }
        }
        .right{
          width: 39%;
          height: 100%;
          img{
            width: 100%;
            height: 61px;
          }
        }
      }
    }
  }
</style>

<template>
  <div>
    <div class="strategy-sec">
      <div v-for="n in 5" :key="n.id">
        <router-link to="/Osaka">
          <div class="strategy-sec-box">
          <div class="left">
            <h4>{{txt.h4}}</h4>
            <div class="time">{{txt.time}}</div>
          </div>
          <div class="right">
            <img :src="txt.img" alt="">
          </div>
        </div>
        </router-link>

        <hr>
      </div>
    </div>
    <div class="block">
      <el-pagination
      background
        layout="prev, pager, next"
        :total="10"
        prev-text="上一页"
        next-text="下一页"
        >
      </el-pagination>
    </div>
  </div>

</template>

<script>
  export default {
    props:["txt"]
  }
</script>

<style lang="less" scoped>
  .strategy-sec{
    width: 100%;
    background-color: #fff;
    a{
      text-decoration: none;
      color: black;
    }
    hr{
      background-color: #F4F3EE;
      height: 5px;
      border: none;
    }
    .strategy-sec-box{
      width: 90%;
      margin: auto;
      padding: 20px 0 18px;
      display: flex;
      justify-content: space-between;
      .left{
        width: 65%;
      }
      .right{
        width: 35%;
        img{
          width: 100%;
          border-radius: 5px;
        }
      }
    }
  }
</style>

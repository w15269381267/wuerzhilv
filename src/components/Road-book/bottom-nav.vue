<template>
  <div class="bottom-nav">
    <div class="indexnav">
      <a>
        <router-link to="/">
          <img src="/static/index/home-off.png" alt="">
          <div>首页</div>
        </router-link>
      </a>
      <a>
        <router-link to="/CustomTravel">
          <img src="/static/index/trip-off.png" alt="">
          <div>定制旅行</div>
        </router-link>
      </a>
      <a>
        <router-link to="">
          <img src="/static/index/form-onclick.png" alt="" @click="fun">
          <div>免费咨询</div>
        </router-link>
      </a>
      <a>
        <router-link to="/TravelMall">
          <img src="/static/index/mall-off.png" alt="">
          <div>旅行商城</div>
        </router-link>
      </a>
      <a>
        <router-link to="/RoadBook">
          <img src="/static/index/guideBook-on.png" alt="">
          <div>我的路书</div>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        consultingService: false
      }
    },
    inject:['consulting'],
    methods:{
      fun(){
        this.consulting()
      }
    }
  }
</script>

<style lang="less">
  .bottom-nav{
    background-color: #fff;
    width: 100%;
    height: 3.125rem;
    line-height: 3.125rem;
    z-index: 100;
    position: fixed;
    bottom: 0;
    color: #918682;
    .indexnav{
      width: 90%;
      margin: auto;
      position: relative;
      left: 3%;
      display: flex;
      justify-content: space-between;
      text-align: center;
      a{
        margin-top: 0.2125rem;
        display: block;
        line-height: 0;
        text-decoration: none;
        img{
          height: 1.625rem;
        }
        div{
          margin-top: 0.5rem;
          font-size: 0.875rem;
          height: 1.625rem;
          color: #918682;
        }
        &:nth-child(3){
          position: relative;
          top: -1.4375rem;
          img{
            height: 3.125rem;
          }
        }
      }
    }
  }
</style>
<style>
  .nobtn{
    width: 80px;
    background-color: #5FC6C2 !important;
    border-radius: 0.9375rem !important;
  }
  .el-button span{
    color: #fff !important;
  }
  .el-message-box__content{
    margin-top: 0.625rem;
  }
  .el-message-box__header{
    display: none;
  }
  .el-message-box__message{
    position: relative;
    top: 5px;
  }
  .el-message-box {
    width: 200px;
    height: 90px;
  }
</style>


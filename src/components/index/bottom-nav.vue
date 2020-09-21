<template>
  <div class="bottom-nav">
    <div class="indexnav">
      <a v-for="(navlist,index) in navlists">
        <router-link :to="navlist.src">
          <img :src="navlist.img" alt="">
          <div>{{navlist.txt}}</div>
        </router-link>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        navlists:[
          {img:"/static/index/home-on.png",txt:"首页",src:"/"},
          {img:"/static/index/trip-off.png",txt:"定制旅行",src:"/CustomTravel"},
          {img:"/static/index/form-onclick.png",txt:"免费咨询",src:""},
          {img:"/static/index/mall-off.png",txt:"旅行商城",src:""},
          {img:"/static/index/guideBook-off.png",txt:"我的路书",src:""},
        ]
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

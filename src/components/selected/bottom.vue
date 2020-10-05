<template>
  <div class="bottom">
    <div class="price">
      <span class="bottom-red">￥</span>
      <span class="bottom-red size">23999</span>
      <span>/人起（参考价）</span>
    </div>
    <div class="consult">
      <img src="https://www.uniqueway.com/mix/mip/images/common/advisory_icon_white.png" alt="">
      <span @click="fun">免费咨询</span>
    </div>
  </div>
</template>

<script>
  export default {
    inject:['consulting'],
    methods:{
      fun(){
        this.consulting()
      }
    }
  }
</script>

<style lang="less" scoped>
  .bottom{
    margin: 0;
    width: 100%;
    height: 3.125rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    .price{
      width: 60%;
      font-size: 0.875rem;
      color: #918682;
      line-height: 3.125rem;
      padding-left: 0.25rem;
      background-color: #fff;
      .bottom-red{
        color: #F06E6E;
      }
      .size{
        font-size: 1.25rem;
        font-style: italic;
      }
    }
    .consult{
      width: 40%;
      color: #FFF;
      line-height: 50px;
      background-color: #5FC6C2;
      text-align: center;
      img{
        width: 1.25rem;
        position: relative;
        top: 0.3125rem;
      }
    }
  }
</style>

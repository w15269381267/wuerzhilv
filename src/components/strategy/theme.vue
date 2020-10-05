<template>
  <div class="theme">
    <div class="theme-box">
      <h2>主题旅行</h2>
      <div class="theme-box-flex">
        <div class="box">
          <div><router-link to="/honeymoon"><img src="/static/strategy/theme-aurora.png" alt=""></router-link></div>
          <div><router-link to="/honeymoon"><img src="/static/strategy/theme-kids.png" alt=""></router-link></div>
          <div><router-link to="/honeymoon"><img src="/static/strategy/theme-honey.png" alt=""></router-link></div>
          <div><router-link to="/honeymoon"><img src="/static/strategy/theme-graduate.png" alt=""></router-link></div>
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
  .theme{
    width: 100%;
    background-color: #fff;
    margin: 20px 0;
    padding: 10px 0;
    .theme-box{
      width: 90%;
      margin: auto;
    }
    .theme-box-flex{
      width: 100%;
      overflow: auto;
      .box{
        width: 1000px;
        display: flex;
        img{
          margin: 5px 0 0;
          width: 90%;
          border-radius: 5px;
        }
      }
    }
  }
</style>

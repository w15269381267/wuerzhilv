<template>
  <div class="honeymoon">
    <div class="honeymoon-box">
      <div class="header">
        <img src="/static/honeymoon/banner.jpg" alt="">
      </div>
      <colorBox></colorBox>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  import colorBox from "@/components/honeymoon/color-box.vue"
  export default {
    components:{
      bottomNav,
      colorBox
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .honeymoon{
    background-color: #FCF7F1;
    width: 100%;
    .honeymoon-box{
      .header{
        margin-top: 3.125rem;
        img{
          width: 100%;
        }
      }
    }
  }
</style>

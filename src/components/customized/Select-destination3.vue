<template>
  <div class="Select-destination3">
    <div class="Select-destination2-box">
      <div class="destination3-img">
        <img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/submit_success.png" alt="">
      </div>
      <div class="destination3-img-txt">
        <h3>提交成功</h3>
        <p>请保持电话畅通，留意旅行顾问的来电~</p>
      </div>
    </div>
    <div class="destination-plan">
      <div>填写旅行要求</div>
      <div>填写联系方式</div>
      <div>获得制定方案</div>
    </div>
    <div class="destination-plan-end">
      <img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/mobile_success.png" alt="">
    </div>
  </div>
</template>

<script>
  export default{

  }
</script>

<style lang="less" scoped>
  .Select-destination3{
    width: 100%;
    .Select-destination2-box{
      width: 90%;
      margin: 30px auto  60px;
      display: flex;
      justify-content: space-around;
      .destination3-img{
        width: 30%;
        img{
          width: 100%;
        }
      }
    }
    .destination-plan{
      margin-top: 1.25rem;
      display: flex;
      justify-content: space-around;
      div{
        font-size: 10px;
        color: #BDBDBD;
        text-align: center;
        padding: 5px 0;
        width: 33%;
        border-top: 3px solid #63C6C2;
      }
    }
    .destination-plan-end{
      width: 90%;
      margin: 6.25rem auto;
      img{
        width: 100%
      }
    }
  }
</style>

<template>
  <div class="bottom-form">
    <form action="">
      <h2>你只需要决定出发</h2>
      <div>剩下的一切交给无二之旅就好</div>
      <div class="step">
        <img src="/static/index/step1.png" alt="">
        <img src="/static/index/step2.png" alt="">
        <img src="/static/index/step3.png" alt="">
      </div>
      <div class="ipt">
        <input type="text" placeholder="请填写手机号" v-model="phone2">
        <input type="text" placeholder="请填写目的地" v-model="destination2">
        <textarea placeholder="你的旅行要求"></textarea>
      </div>
      <div class="btn">
        <button class="sub" @click="subBtn2">提交要求</button>
      </div>
    </form>
    <div class="remarks">
      <div>@ 2019 Uniqueway inc</div>
      <div>京ICP备16058485号</div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        phone2:"",
        destination2:""
      }
    },
    methods:{
      subBtn2 () {
        if (!this.phone2) {
          this.$alert("请填写手机号",{
            center:true,
            confirmButtonText:"ok"
          })
        }else if (!this.destination2) {
          this.$alert("请填写目的地",{
            center:true,
            confirmButtonText:"ok"
          })
        }else{
          this.$alert("您的信息提交成功！我们会在一个工作日内联系您",{
            center:true,
            confirmButtonText:"ok"
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  div{
    margin: 0.625rem 0 0.625rem;
    color: #B6AEA2;
  }
  .bottom-form{
    width: 100%;
    min-height: 25rem;
    background-image: url(/static/index/mobile_bottom_form.jpg);
    -webkit-background-size: cover;
    background-size: cover;
    form{
      padding: 1.25rem 0.625rem;
      width: 90%;
      min-height: 12.5rem;
      border-radius: 0.3125rem;
      margin: auto;
      background-color: #F9F9F6;
      position: relative;
      top: 1.25rem;
      h2{
        color: #544641;
      }
      .step{
        display: flex;
        justify-content: space-around;
        img{
          width: 4.125rem;
          height: 4.125rem;
        }
      }
      .ipt{
        input{
          padding: 0 0.3125rem;
          margin: 0.625rem 0 0.625rem;
          width: 97%;
          height: 2.5rem;
          font-size: 1.25rem;
          border: 0.0625rem solid #F3F2EE;
        }
        textarea{
          padding: 0.3125rem;
          margin: 0.625rem 0 0.625rem;
          width: 100%;
          height: 4.5rem;
          font-size: 1.7rem;
          color: #B6AEA2;
          box-sizing: border-box;
          border: 0.0625rem solid #F3F2EE;
          resize:none;
        }
      }
      .btn{
        .sub{
          outline: none;
          margin-top: 1.25rem;
          width: 100%;
          height: 3rem;
          border-radius: 1.5rem;
          border: none;
          background-color: #5FC6C2;
          color: #fff;
          font-size: 1.2rem;

        }
      }
    }
  }
  .remarks{
    font-size: 0.7rem;
    margin-top: 1.875rem;
    margin-bottom: 3.125rem;
    width: 100%;
    height: 3.75rem;
    line-height: 2.5rem;
    display: flex;
    justify-content: space-around;
    background-color: #544641;
  }
</style>
<style>
  .el-button{
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

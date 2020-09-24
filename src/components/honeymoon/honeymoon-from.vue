<template>
  <div class="bottom-form">
    <form action="">
      <div class="step">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/honeymoon/white.png" alt="">
      </div>
      <h2>定制属于自己的蜜月旅行</h2>
      <div class="ipt">
        <input type="text" placeholder="姓名" v-model="phone2">
        <input type="text" placeholder="手机" v-model="destination2">
        <textarea placeholder="备注内容"></textarea>
      </div>
      <div class="btn">
        <button class="sub" @click="subBtn2">免费咨询</button>
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
          this.$alert("请填写姓名",{
            center:true,
            confirmButtonText:"ok"
          })
        }else if (!this.destination2) {
          this.$alert("请填写手机号",{
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
    background-image: url(/static/honeymoon/bg.jpg);
    -webkit-background-size: cover;
    background-size: cover;
    form{
      box-sizing: border-box;
      width: 80%;
      margin: auto;
      padding-top: 50px;
      text-align: center;
      img{
        width: 50%;
      }
      h2{
        color: #fff;
      }
      input,textarea{
        box-sizing: border-box;
        padding: 0 10px 0 10px;
        border: none;
        border-radius: 5px;
        width: 90%;
        height: 40px;
        margin: 10px 0;
        font-size: 18px;
      }
      textarea{
        height: 70px;
        padding-top: 10px;
      }
      .sub{
        width: 50%;
        height: 40px;
        border-radius: 20px;
        border: none;
        background-color: #63C6C2;
        color: #fff;
        outline: none;
        font-size: 1.5625rem;
        font-weight: bold;
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

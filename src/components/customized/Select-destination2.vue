<template>
  <div class="Select-destination2">
    <div class="Select-destination2-box">
     <h3>填写联系方式</h3>
     <p>提交成功后，旅行顾问将在1个工作日内与你联系</p>
    </div>
    <div class="destination-plan">
      <div>填写旅行要求</div>
      <div>填写联系方式</div>
      <div>获得制定方案</div>
    </div>
    <div class="destination-from">
      <label for="">
        <h6>你的姓名</h6>
      <input type="text" placeholder="填写姓名" v-model="user">
      </label>
      <label for="">
        <h6>手机号码</h6>
      <input type="text" placeholder="填写手机号码" v-model="phone">
      </label>
      <label for="">
        <h6>微信号</h6>
      <input type="text" placeholder="微信号" v-model="WeChat">
      </label>
    </div>
    <div class="subBtn" @click="subBtn">
        <input type="button" value="免费咨询">
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        WeChat:"",
        phone:"",
        user:"",
        link:""
      }
    },
    methods:{
      subBtn(){
        let patt1=/^1[3-9]\d{9}$/g
        if (this.user==0) {
          this.$alert("请填写你的姓名",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else if (!patt1.test(this.phone)) {
          this.$alert("请填写你的手机号",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else if (this.WeChat==0) {
          this.$alert("请填写你的微信号",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else{
          this.$router.push('/customized/SelectDestination3')
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .Select-destination2{
    width: 100%;
    .Select-destination2-box{
      width: 90%;
      margin: 30px auto  60px;
      h3{
        font-size: 1.775rem;
        margin-bottom: 10px;
        font-weight: normal;
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
        border-top: 3px solid #E4E7EC;
        &:first-child,&:nth-child(2){
          border-top: 3px solid #63C6C2;
          color: #63C6C2;
        }
      }
    }
    .destination-from{
      width: 90%;
      margin: 20px auto;
      h6{
        font-weight: normal;
        margin: 0.3125rem 0;
      }
      input{
        width: 100%;
        height: 40px;
        margin-bottom: 20px;
        font-size: 1.125rem;
        border: 1px solid #E4E7EC;
        padding: 0 15px;
        outline: none;
        box-sizing: border-box;
        &:focus{
          border: 1px solid #66B1FF;
        }
      }
    }
    .subBtn{
      margin: 10px 0;
      input{
        width: 100%;
        height: 50px;
        color: #fff;
        font-size: 20px;
        background-color: #63C6C2;
        border: none;
        outline: none;
      }
    }
  }
</style>
<style>
  .el-input,.el-input--suffix,.el-input__inner,.el-cascader{
    margin: auto;
    width: 100% !important;
  }
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

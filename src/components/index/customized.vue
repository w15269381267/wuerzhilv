<template>
  <div class="box customized">
    <h2>没有喜欢的路线？直接私人定制</h2>
    <div>提交要求>免费咨询>专人定制>轻松出行</div>
    <form action="">
      <div class="ipt">
        <div><input type="text" class="destination" placeholder="目的地" v-model="destination"></div>
        <div class="ipt2">
          <input type="text" class="use" placeholder="姓名" v-model="use">
          <input type="text" class="phone" placeholder="手机号" v-model="phone">
          <button class="sub" @click="subBtn">提交要求</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        destination:"",
        phone:"",
        use:""
      }
    },
    methods:{
      subBtn () {
        if (!this.destination) {
          this.$alert("目的地不能为空",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else if (!this.use) {
          this.$alert("姓名不能为空",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else if (!this.phone) {
          this.$alert("电话不能为空",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else{
          this.$alert("您的信息提交成功！我们会在一个工作日内联系您",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  .customized{
    width: 85%;
    height: 17.5rem;
    margin: 0 auto 1.25rem;
    background-color: #F8F7F2;
    .ipt{
      margin-top: 1.25rem;
      text-align: center;
      .destination{
        margin: 10px auto;
        font-size: 1.25rem;
        width: 90%;
        height: 2.5rem;
        border: none;
      }
    }
    .ipt2{
      margin-top: 1.25rem;
      text-align: center;

      .use{
        border: none;
        width: 35%;
        height: 2.5rem;
        font-size: 1.25rem;
      }
      .phone{
        border: none;
        width: 53%;
        height: 2.5rem;
        font-size: 1.25rem;
      }
    }
    .sub{
      outline: none;
      margin-top: 1.25rem;
      width: 90%;
      height: 3rem;
      border-radius: 1.5rem;
      border: none;
      background-color: #5FC6C2;
      color: #fff;
      font-size: 1.2rem;
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

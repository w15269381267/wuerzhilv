<template>
  <div class="Select-destination">
    <div class="Select-destination-box">
      <h2>选择目的地</h2>
      <div class="block">
        <span class="demonstration"></span>
        <el-cascader
          v-model="value"
          :options="options"
          :show-all-levels="false"
          @change="handleChange"></el-cascader>
      </div>
      <div class="destination-btn">
        <input type="button" value="热门">
        <input type="button" value="日本" @click="rbBtn">
        <input type="button" value="泰国" @click="tgBtn">
        <input type="button" value="新加坡" @click="xjpBtn">
        <input type="button" value="意大利" @click="ydlBtn">
      </div>
    </div>
    <div class="destination-plan">
      <div>填写旅行要求</div>
      <div>填写联系方式</div>
      <div>获得制定方案</div>
    </div>
    <div class="destination-from">
      <h6>出发日期</h6>
      <div class="block">
        <span class="demonstration"></span>
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
      <div class="num">
        <div class="left">
          <h6>出发城市</h6>
        <input type="text" placeholder="请输入城市" class="txt" v-model="txt"><span></span>
        </div>
        <div class="right">
          <h6>人数</h6>
          <input type="button" value="-" @click="number>1?number-=1:1"><input type="button" :value="number" class="number"><input type="button" value="+" @click="number+=1">
        </div>
      </div>
      <div class="other">
        <h6>其他要求</h6>
        <textarea placeholder="想去的城市景点、住宿代订要求、人均预算等……需求越充分，沟通越高效哦:)"></textarea>
      </div>
      <div class="subBtn" @click="subBtn">
          <input type="button" value="下一步">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        txt:"",
        input1:'',
        value1: '',
        number:1,
        value:[],
        link:"",
        options:[
          {
            value:'yazhou',
            label:'亚洲',
            children: [
              {
                value: 'abl',
                label: '阿拉伯联合酋长国'
              },
              {
                value: 'rb',
                label: '日本'
              },
              {
                value: 'tw',
                label: '台湾'
              },
              {
                value: 'tg',
                label: '泰国'
              },
              {
                value: 'xjp',
                label: '新加坡'
              },
              {
                value: 'jpz',
                label: '柬埔寨'
              },
              {
                value: 'yz',
                label: '越南'
              }
            ]
          },
          {
            value:'oz',
            label:'欧洲',
            children: [
              {
                value: 'ydl',
                label: '意大利'
              },
              {
                value: 'fg',
                label: '法国'
              },
              {
                value: 'rs',
                label: '瑞士'
              },
              {
                value: 'xl',
                label: '希腊'
              },
              {
                value: 'xby',
                label: '西班牙'
              },
              {
                value: 'dg',
                label: '德国'
              },
              {
                value: 'jk',
                label: '捷克'
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleChange(value) {

      },
      rbBtn(){
        this.value=["yazhou","rb"]
      },
      tgBtn(){
        this.value=["yazhou","tg"]
      },
      xjpBtn(){
        this.value=["yazhou","xjp"]
      },
      ydlBtn(){
        this.value=["oz","ydl"]
      },
      subBtn(){
        if (this.value.length==0) {
          this.$alert("请选择目的地",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else if (this.value1.length==0) {
          this.$alert("请选择日期",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else if (this.txt.length==0) {
          this.$alert("请选择出发城市",{
            center:true,
            confirmButtonText:"ok",
            confirmButtonClass:"nobtn"
          })
        }else{
          this.$router.push('/customized/SelectDestination2')
        }
      }

    }
  }
</script>

<style lang="less" scoped>
  .Select-destination{
    width: 100%;
    margin-top: 1.875rem;
    .Select-destination-box{
      width: 90%;
      margin: auto;
      h2{
        font-weight: normal;
        margin-bottom: 20px;
      }
      .destination-btn{
        margin-top: 1.25rem;
        input{
          margin: 0 5px;
          border: none;
          outline: none;
          padding: 0.3125rem;
          &:first-child{
            background-color: #fff;
            border: none;
            outline: none;
          }
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
        border-top: 3px solid #E4E7EC;
        &:first-child{
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
        margin: 0.625rem auto;
      }
      .txt{
        width: 90%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #E4E7EC;
        padding: 0 15px;
        outline: none;
        box-sizing: border-box;
        &:focus{
          border: 1px solid #66B1FF;
        }
      }
      .num{
        display: flex;
        justify-content: space-between;
        .left{
          width: 60%;
          position: relative;
          span{
            display: inline-block;
            width: 15px;
            height: 15px;
            background-image: url(/static/customized/city_icon.png);
            background-size: cover;
            position: absolute;
            bottom: 15px;
            left: 1px;

          }
        }
        .right{
          input{
            height: 40px;
            width: 30px;
            margin: 0;
            background-color: #fff;
            border: 1px solid #E4E7EC;
            outline: none;
          }
          .number{
            width: 60px;
          }
        }
      }
      .other{
        textarea{
          width: 100%;
          height: 70px;
          padding: 5px;
          box-sizing: border-box;
          border: 1px solid #E4E7EC;
          border-radius: 5px;
          outline: none;
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

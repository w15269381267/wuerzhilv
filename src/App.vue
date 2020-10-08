<template>
  <div id="app">
    <header>
      <el-row type="flex" justify="center" align="middle" class="c1" >
        <el-col :span="8"><div class="grid-content bg-purple">
          <router-link to="/">
            <img src="/static/common/logo_uniqueway.png" class="logo_uniqueway">
          </router-link>

        </div></el-col>
          <el-col :span="4" :offset="8"><div class="grid-content bg-purple">
             <input type="button" value="免费咨询" class="consult-btn" @click="consulting">
          </div></el-col>
          <el-col :span="2" :offset="1"><div class="grid-content bg-purple">
            <el-button size="small" icon="el-icon-s-operation" class="nav-btn" @click="show = !show"></el-button>
          </div></el-col>
      </el-row>
      <transition name="el-zoom-in-top">
        <div v-show="show" class="transition-box">
          <router-link to="/"><div @click="show = !show">首页</div></router-link>
          <router-link to="/CustomTravel"><div @click="show = !show">定制旅行</div></router-link>
          <router-link to="/RoadBook"><div @click="show = !show">路书</div></router-link>
          <router-link to="/CustomerCase"><div @click="show = !show">客户案例</div></router-link>
          <router-link to="/evaluation"><div @click="show = !show">客户评价</div></router-link>
          <router-link to="/TravelMall"><div @click="show = !show">旅行商场</div></router-link>
          <router-link to="/strategy"><div @click="show = !show">旅行攻略</div></router-link>
          <router-link to="/strategy"><div @click="show = !show">旅行指南</div></router-link>
          <router-link to="/wedding"><div @click="show = !show">海外婚礼</div></router-link>
          <router-link to="/about"><div @click="show = !show">关于我们</div></router-link>
        </div>
      </transition>
    </header>
    <div class="all">
      <router-view/>
    </div>
    <el-dialog
      title=""
      :visible.sync="consultingService"
      width="70%"
      center class="consultingService">
      <span class="pc-img"></span>
      <input type="text" placeholder="填写目的地" v-model="destination3">
      <input type="text" placeholder="填写手机号码" v-model="phone3">
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="subBtn" class="consulting">免费咨询</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      show:false,
      consultingService: false,
      destination3:'',
      phone3:""
    }
  },
  methods:{
    consulting(){
      this.consultingService=true
    },
    subBtn(){
      if (!this.phone3) {
        this.$alert("请填写手机号",{
          center:true,
          confirmButtonText:"ok",
          confirmButtonClass:"nobtn"
        })
      }else if (!this.destination3) {
        this.$alert("请填写目的地",{
          center:true,
          confirmButtonText:"ok",
          confirmButtonClass:"nobtn"
        })
      }else{
        this.$alert("您的信息提交成功！我们会在一个工作日内联系您",{
          center:true,
          confirmButtonText:"ok",
          confirmButtonClass:"nobtn",
        })
        this.consultingService = false
        this.phone3=""
        this.destination3=""
      }
    }
  },
  provide(){
    return{
      consulting:this.consulting
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  a{
    text-decoration: none;
    color: #000;
  }
  header{
    background-color: #fff;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    .c1{
      height: 3.125rem;
    }
    .logo_uniqueway{
      width: 9.375rem;
      // margin: 10px auto;
    }
    .nav-btn{
      width: 2.5rem;
      height: 1.875rem;
      position: relative;
      right: 10px;
    }
    .consult-btn{
      position: relative;
      right: 10px;
      width: 5rem;
      height: 1.875rem;
      outline: none;
      border: none;
      color: #fff;
      background-color: #F64B19;
      border-radius: 0.3125rem;
    }
    .transition-box{
      width: 100%;
      height: 100%;
      text-align: center;
      background-color: #fff;
      font-size: 1.5rem;
      position: fixed;
      top:3.125rem ;
      div{
        height: 2rem;
        margin: 1.875rem;
      }
    }
  }
  .all{
    *{
      margin: 0;
      padding: 0;
    }
  }
  .consultingService{
    text-align: center;
    .pc-img{
      display: inline-block;
      width: 100%;
      height: 140px;
      background-image: url(/static/index/pc.jpg);
      -webkit-background-size: cover;
      background-size: cover;
      background-repeat: no-repeat;
    }
    input{
      background-color: #F8F7F2;
      margin: 0.3125rem 0;
      width: 100%;
      height: 40px;
      border: none;
      font-size: 1.3625rem;
    }
    .consulting{
      width: 60%;
    }
  }
}
</style>

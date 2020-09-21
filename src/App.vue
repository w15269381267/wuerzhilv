<template>
  <div id="app">
    <header>
      <el-row type="flex" justify="center" align="middle" class="c1" >
        <el-col :span="8"><div class="grid-content bg-purple">
          <img src="/static/common/logo_uniqueway.png" class="logo_uniqueway">
        </div></el-col>
          <el-col :span="4" :offset="8"><div class="grid-content bg-purple">
             <input type="button" value="免费咨询" class="consult-btn">
          </div></el-col>
          <el-col :span="2" :offset="1"><div class="grid-content bg-purple">
            <el-button size="small" icon="el-icon-s-operation" class="nav-btn" @click="show = !show"></el-button>
          </div></el-col>
      </el-row>
      <transition name="el-zoom-in-top">
        <div v-show="show" class="transition-box">
          <div>首页</div>
          <div>定制旅行</div>
          <div>路书</div>
          <div>客户案例</div>
          <div>客户评价</div>
          <div>旅行商场</div>
          <div>旅行公路</div>
          <div>旅行指南</div>
          <div>海外婚礼</div>
          <div>关于我们</div>
        </div>
      </transition>
    </header>
    <div class="all">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      show:false,
    }
  }
}
</script>

<style lang="less" scoped>
#app {
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
    }
    .consult-btn{
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
}
</style>

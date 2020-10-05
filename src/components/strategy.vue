<template>
  <div class="strategy">
    <div class="strategy-box">
      <nav>
        <ul>
          <li @click="Asia" value="Japan">日本</li>
          <li @click="Asia" value="Asia">亚洲</li>
          <li>英国</li>
          <li>北欧</li>
          <li>欧洲</li>
          <li>澳大利亚</li>
          <li>日本</li>
          <li>亚洲</li>
          <li>英国</li>
          <li>北欧</li>
          <li>欧洲</li>
          <li>澳大利亚</li>
        </ul>
        <h4 @click="show">目的地<span><img src="/static/strategy/arrowdoen.png" alt="" class="h4-img"></span></h4>
        <transition name="el-zoom-in-top">
          <div v-show="show2" class="top">
           <el-row>
             <el-col :span="8"><div @click="Asia" value="Japan">日本</div></el-col>
             <el-col :span="8"><div @click="Asia" value="Asia">亚洲</div></el-col>
             <el-col :span="8"><div>英国</div></el-col>
           </el-row>
           <el-row>
             <el-col :span="8"><div>北欧</div></el-col>
             <el-col :span="8"><div>欧洲</div></el-col>
             <el-col :span="8"><div>澳大利亚</div></el-col>
           </el-row>
           <el-row>
             <el-col :span="8"><div>日本</div></el-col>
             <el-col :span="8"><div>亚洲</div></el-col>
             <el-col :span="8"><div>英国</div></el-col>
           </el-row>
           <el-row>
             <el-col :span="8"><div>北欧</div></el-col>
             <el-col :span="8"><div>欧洲</div></el-col>
             <el-col :span="8"><div>澳大利亚</div></el-col>
           </el-row>
          </div>
        </transition>
      </nav>
      <div class="strategy-box-img">
        <router-link to="/RoadBook">
          <img src="https://images.cdn.uniqueway.com/uploads/2018/11/Cpxwi7jEURUZxoRBfGKbDgjQwqT6MFgieRKrR9Ih.png" alt="">
        </router-link>
        
      </div>
    </div>
    <strategySec :txt="txt"></strategySec>
    <theme></theme>
    <selects></selects>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import strategySec from "@/components/strategy/strategy-sec.vue"
  import theme from "@/components/strategy/theme.vue"
  import selects from "@/components/strategy/select.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default {
    data(){
      return{
        show2:false,
        txt:""
      }
    },
    components:{
      strategySec,
      theme,
      selects,
      bottomFform,
      bottomNav
    },
    methods:{
      show(){
        this.show2=!this.show2
        let img1=document .querySelector(".h4-img");
        if (this.show2){
          img1.style.transform="rotate(180deg)"
        }else{
          img1.style.transform="rotate(0deg)"
        }
      },
      Asia(){
        var bourn=event.toElement.getAttribute("value")
        this.axios({
          method: 'get',
          url: '/static/strategy/sec.json',
        }).then(res => {
          this.txt=res.data[bourn]
        }).catch(err => {
          console.log(err)
        })
      }
    },
    beforeMount() {
      this.axios({
        method: 'get',
        url: '/static/strategy/sec.json',
      }).then(res => {
        this.txt=res.data.Japan
      }).catch(err => {
        console.log(err)
      })
    },
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .strategy{
    width: 100%;
    background-color: #F4F3EE;
    .strategy-box{
      margin-top: 3.225rem;
      overflow: hidden;
      nav{
        position: relative;
        background-color: #fff;
        ul{
          display: flex;
          list-style: none;
          padding: 5px 0;
          width: 2000px;
          text-align: center;
          li{
            width: 70px;
          }
        }
        h4{
          position: absolute;
          top: 0;
          right: 0;
          background-color: #fff;
          span{
            display: inline-block;
            width: 20px;
            img{
              width: 100%;
            }
          }
        }
        .top{
          text-align: center;
          div{
            margin: 5px 0;
          }
        }
      }
      .strategy-box-img{
        width: 100%;
        text-align: center;
        margin: 30px 0;
        img{
          width: 90%;
        }
      }
    }
  }
</style>

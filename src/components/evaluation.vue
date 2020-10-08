<template>
  <div class="evaluation">
    <div class="evaluation-box">
      <div class="evaluation-box-head">
        <h1>无二之旅怎么样？听听他们怎么说。</h1>
        <div class="evaluation-box-head-txt">
          <p>自2012年成立，无二之旅已为数以万计的客户定制出国自由行，</p>
          <p>收到了很多令我们欣慰与感动的好评，也有因我们的疏漏留下的批评建议。</p>
          <p>谢谢所有鼓励与督促的声音，</p>
          <p>我们会坚持初心，将定制旅行做得更好。</p>
        </div>
      </div>
      <div class="evaluation-label">
        <ul>
          <li>好玩不贵、有性价比 <span>(396)</span></li>
          <li><router-link to="/RoadBook">路书</router-link>写得好详细 <span>(598)</span></li>
          <li>非常棒的一次体验 <span>(175)</span></li>
          <li><router-link to="/CustomDivision">定制师</router-link>贴心、细心 <span>(294)</span></li>
        </ul>
        <ul>
          <li @click="Japan">日本</li>
          <li @click="Zealand">新西兰</li>
          <li @click="Japan">法国</li>
          <li @click="Zealand">西班牙</li>
        </ul>
        <ul>
          <li @click="January">1月</li>
          <li @click="January">2月</li>
          <li @click="January">3月</li>
          <li @click="January">4月</li>
          <li @click="January">5月</li>
          <li @click="January">6月</li>
          <li @click="January">7月</li>
          <li @click="January">8月</li>
          <li @click="January">9月</li>
          <li @click="January">10月</li>
          <li @click="January">11月</li>
          <li @click="January">12月</li>
        </ul>
      </div>
    </div>
    <!-- 留言板 -->
    <all :txt="alls"></all>
    <div class="block">
      <el-pagination
      background
        layout="prev, pager, next"
        :total="nums"
        prev-text="上一页"
        next-text="下一页"
        @current-change="num">
      </el-pagination>
    </div>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  import all from "@/components/evaluation/all.vue"
  export default {
    beforeMount() {
      this.axios({
        method: 'get',
        url: '/static/evaluation/all.json',
      }).then(res => {
        this.alls = res.data.n1
      }).catch(err => {
        console.log(err)
      })
    },
    methods:{
      num(v){
        this.axios({
          method: 'get',
          url: '/static/evaluation/all.json',
        }).then(res => {
          this.alls = res.data["n"+v]
        }).catch(err => {
          console.log(err)
        })
      },
      Japan(){
        this.axios({
          method: 'get',
          url: '/static/evaluation/all.json',
        }).then(res => {
          this.alls = res.data.Japan
          this.nums=10
        }).catch(err => {
          console.log(err)
        })
      },
      Zealand(){
        this.axios({
          method: 'get',
          url: '/static/evaluation/all.json',
        }).then(res => {
          this.alls = res.data.Zealand
          this.nums=10
        }).catch(err => {
          console.log(err)
        })
      },
      January(){
        this.axios({
          method: 'get',
          url: '/static/evaluation/all.json',
        }).then(res => {
          this.alls = res.data.January
          this.nums=10
        }).catch(err => {
          console.log(err)
        })
      }
    },
    components:{
      all,
      bottomFform,
      bottomNav
    },
    data(){
      return{
        alls:"",
        nums:20
      }
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .evaluation{
    width: 100%;

    background-color: #F5F4EF;
    .evaluation-box{
      margin-top: 50px;
      width: 100%;
      .evaluation-box-head{
        width: 100%;
        height: 350px;
        background-image: url(/static/evaluation/pingjia_banner.jpg);
        background-size: cover;
        background-position: -650px;
        color: #fff;
        text-align: center;
        h1{
          font-weight: normal;
          margin: 30px;
          padding-top: 20px;
        }
        .evaluation-box-head-txt{
          width: 90%;
          box-sizing: border-box;
          padding: 30px;
          height: 200px;
          margin: auto;
          background-color: #0005;
          border-radius: 0 100px 100px 100px;
          p{
            margin-bottom: 5px;
          }
        }
      }
      .evaluation-label{
        background-color: #F5F4EF;
        padding-bottom: 20px;
        a{
          text-decoration: none;
        }
        ul{

          li{
            display: inline-block;
            background-color: #fff;
            padding: 5px;
            margin: 5px;
            span{
              color: red;
            }
          }
        }
      }

    }
  }
</style>

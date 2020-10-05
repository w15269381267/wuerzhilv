<template>
  <div class="customer-evaluation">
    <div class="customer-evaluation-box">
      <h2>客户评价</h2>
      <span>在无二之旅定制旅行是怎样的体验？<br>
        5年来，已有301012位客户选择无二之旅定制旅行，听听他们怎么说——
      </span>
    </div>
    <div class="ing-nav">
      <span><img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/customer_review/1.png" alt="" @click="one"></span>
      <span @click="two"><img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/customer_review/2.png" alt=""></span>
      <span><img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/customer_review/1.png" alt="" @click="one"></span>
      <span><img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/customer_review/2.png" alt="" @click="two"></span>
      <span><img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/customer_review/1.png" alt="" @click="one"></span>
    </div>
    <div class="ing-nav-txt">
        {{txt}}
   </div>
   <div class="customer-evaluation-bottom">
     <div><img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/footer/uniqueway_word.png" alt=""><span>旅行从未如此简单</span></div>
   </div>
  </div>
</template>

<script>
  export default{
    data(){
      return {
        txt:"感谢策划无二之旅的筹划，花艺师打造的我的大花门梦幻的晚宴，浪漫的礼花。感谢所有到场的亲朋好友，感谢所有的工作人员摄影团队、化妆团队以及助手住宿代订乐队、策划团队，他们都是国内的行业顶尖，特别敬业。感谢我们伴郎帅的不行，伴娘美得不像话，也谢谢我的团队把我所有的一切料理的特别好！"
      }
    },
    methods:{
      two(){

        this.txt="捷奥之行后的小惊喜，收到了无二之旅的专属护照。旅途的线路、交通、住宿等全权交给无二之旅定制，省了很多心却又能享受自由行，完美！带上护照，拿着无二专属护照凹照型，揣着路书，你只需要决定什么时候出发、去哪里，就会享受一段UNIQUE TRAVEL ！"

      },
      one(){
        this.txt="感谢策划无二之旅的筹划，花艺师打造的我的大花门梦幻的晚宴，浪漫的礼花。感谢所有到场的亲朋好友，感谢所有的工作人员摄影团队、化妆团队以及助手住宿代订乐队、策划团队，他们都是国内的行业顶尖，特别敬业。感谢我们伴郎帅的不行，伴娘美得不像话，也谢谢我的团队把我所有的一切料理的特别好！"
      }
    }
  }
</script>

<style lang="less" scoped>
  .customer-evaluation{
    width: 100%;
    .customer-evaluation-box{
      width: 80%;
      margin: auto;
      padding-top: 50px;
      text-align: center;
      h2{
        font-weight: normal;
      }
      span{
        font-size: 14px;
      }
    }
    .ing-nav{
      width: 80%;
      margin: auto;
      padding-top: 50px;
      padding-bottom: 50px;
      display: flex;
      justify-content: space-between;
      span{
        display: block;
        width: 40px;
        height: 40px;
        img{
          width: 100%;
        }
      }
    }
    .ing-nav-txt{
      width: 80%;
      margin: auto;
      padding-bottom: 50px;
    }
    .customer-evaluation-bottom{
      width: 100%;
      margin-top: 50px;
      background-color: #544641;
      padding: 10px;
      box-sizing: border-box;
      img{
        height: 20px;
      }
      span{
        margin-left: 9.5rem;
        color: #fff;
        font-size: 14px;
      }
    }

  }
</style>

<template>
  <div class="remarks">
    <div class="Price-include box">
      <h3>费用包含</h3>
      <img src="/static/selected/route_money.jpg" alt="">
      <div class="remarks-txt">
        机票代订
        <p>全程含税机票待定</p>
      </div>
    </div>
    <div class="Services-include box">
      <h3>服务包括</h3>
      <div class="remarks-txt">
        1、基础服务
        <p>
          <span>旅行顾问：</span><br>
        我们为每位客户提供专属旅行顾问，客户可针对该线路全程免费咨询。
        </p>
        <p>
          <span>路书：</span><br>
          每一款定制旅行产品，都附有专属路书，路书是无二之旅专为您制作的出国旅游攻略，行程安排、最短线路、租车手续、餐厅推荐等全在书中，解决旅途中99%的问题。它很万能，而且私密。<a href="">（点击查看路书范例）</a>
        </p>
        <p>
          <span>行程保障：</span><br>
          无二之旅提供出行全程保障服务，当您在境外遇到问题，可随时联系您的行后保障团队，或拨打我们的24小时紧急电话。
        </p>
        <p>
          <span>行程修改：</span><br>
          您可主动要求我们为您修改产品中的住宿代订、景点、活动等元素，满意后再交付全款。
        </p>
        <p>
          <span>代办签证：</span><br>
          我们可为持有中华人民共和国护照的客户（请确定出行时，护照有效期仍有半年以上）代办目的地签证，如您自备签证，签证费用将从定制旅行产品中减免。
        </p>
        <p>
          <span>WiFi租赁：</span><br>
          高质量随身WiFi（机场自提）
        </p>
        <p>
          <span>境外保险：</span><br>
          短期旅游保险（以具体行程为准）
        </p>
        2.可选服务
        <p>
          <span>(根据具体情况报价）</span><br>
          包车（中文司机/外文司机）、多人团出行（6人以上）、GPS租赁、接送机服务、海外婚礼、海外拍摄
        </p>
      </div>
    </div>
    <div class="Cost-description box">
      <h3>费用说明</h3>
      <ol class="remarks-txt">
        <li v-for="n in lists">{{n}}</li>
      </ol>
      <div class="remarks-txt">
        <h3>费用不包含</h3>
        <p>具体内容请 咨询旅行顾问 咨询不收取任何费用）</p>
        <p>
          *费用包含全程可预订的景点活动
        </p>
      </div>

    </div>
    <hr>
      <div class="Ordering-Information box">
        <div class="remarks-txt">
          <h3>预订须知</h3>
          <ol class="over">
            <li v-for="n in lists" :key="n.id">{{n}}</li>
          </ol>
        </div>
        <a @click="look">{{show?"收起":"查看更多..."}}</a>
      </div>
    <hr>
    <div class="Customization-process box">
        <h3>定制流程</h3>
          <div class=" flex" v-for="n in 4" :key="n.id">
            <div class="flex-img"><img src="/static/selected/process1.png" alt=""></div>
            <div class="txt">
              <h4>免费咨询</h4>
              <p>提交旅行需求， 旅行顾问将尽快与您联系</p>
            </div>
          </div>
    </div>
    <hr>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        lists:[
          "本产品起价价格是按双人出行共住一间房核算的最低单人价格。产品价格会根据您所选择的出发日期、出行人数、入住住宿代订房型、航班或交通以及所选附加服务的不同而有所差别。",
          "本产品组合中提供机票代订类内容仅为国际段往返机票代订及境外交通机票代订，因客户所在城市无合适的国际航班所造成的国内交通费需要增补差价。",
          "部分国家与城市住宿代订需缴纳城市税金，具体金额以住宿代订入住时为准，我司不为代收操作，需直接交予住宿代订前台，敬请悉知。建议届时留取适量现金以便缴纳相关费用。",
          "本产品组合中提供的目的地住宿代订费用部分仅包含基本住宿代订预订费（部分住宿代订包含早餐，因住宿代订餐饮、洗衣、理发、电话、饮料、烟酒、付费电视、行李搬运、邮寄等产生的私人费用不在产品价格中。",
          "出入境的行李海关课税，及超重行李的托运费、管理费等其他【费用包括】中没有提及的项目所产生的费用，均不包含在产品价格中。",
          "在上述“基础服务”之外产生的其他服务费用，均不包含在产品价格中。如有增项需求，需增补差价。"
        ],
        show:false
      }
    },
    methods:{
      look(){
        var over=document.querySelector(".over")
        if (!this.show) {
          over.style.overflow="visible"
          over.style.height="300px"
          this.show=!this.show
        }else{
          over.style.overflow="hidden"
          over.style.height="280px"
          this.show=!this.show
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  .remarks{
    width: 100%;
    padding-top: 1.25rem;
    h3{
      font-size: 1.17em;
      margin: 0.625rem 0;
      color: #544641;
    }
    a{
      margin: 10px 0;
      color: #5FC6C2;
      text-decoration: none;
    }
    .Ordering-Information{
      .over{
        overflow: hidden;
        height: 280px;
      }
    }
    .flex{
      display: flex;
      margin: 1.875rem 0;
      color: #544641;
      .flex-img{
        margin: 0;
        width: 20%;
        img{
          width: 100%;
        }
      }
      p,li{
        margin: 0.625rem 0;
        color: #918682;
        font-size: 0.625rem;
        list-style-position: inside;
      }
      .txt{
        margin-top: 15px;
      }
    }
    .remarks-txt{
      margin: 1.875rem 0;
      color: #544641;
      p,li{
        margin: 0.625rem 0;
        color: #918682;
        font-size: 0.625rem;
        list-style-position: inside;
      }
    }
    .box{
      margin: 1rem 0;
      width: 90%;
      margin: auto;
      img{
        width: 100%;
      }
    }
  }
</style>

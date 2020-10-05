<template>
  <div class="Osaka-sec">
    <div class="Osaka-sec-box">
      <div class="title">
        大阪黑门市场：最具有当地历史文化的美食市场
      </div>
      <div class="msg">
        <span><img src="../../../static/Osaka/place_icon.png" alt="">日本</span>
        <span class="right">2017-11-03 12:13:47 发布</span>
      </div>
      <div class="btn">
        不想做攻略？点击了解定制自由行！<span></span>
      </div>
      <div v-bind:class="{ expansion : active }" class="sec">
        <div v-for="n in txts" :key="n.id">
          <p>{{n.txt1}}</p>
          <p>{{n.txt2}}</p>
          <img :src="n.img" alt="">
        </div>
        <div class="show-btn" @click="active=!active">
          {{active?"收起":"展开攻略全文"}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        active:false,
        txts:[
          {
            txt1:"大阪黑门市场被称作浪花食堂的鲜鱼市场，主要以各种鱼、海鲜为主，还有水果、干货等其他店铺，共计170多家，是日本(日本6日旅游路线)许多饭店采购食材的主要场所，类似于东京都内有名的筑地市场，而取自濑户内海的海鲜水产则比起东京有过之而无不及。随着观光业的发展，吸引了大批来日本旅行的游客前来黑门市场参观品尝。",
            txt2:"",
            img:"https://images.cdn.uniqueway.com//uploads/2017/11/ksaik3mdszo2ztx1uk9itpuw1wr5fm18.jpg"
          },
          {
            txt1:"大阪黑门市场邻近大阪难波周边，是条相当受欢迎的商店街。除了游客外，当地人也会到这里选购价格实惠、品质新鲜的食材。与食物相比，黑门市场的历史与文化才是吸引观光客的主要原因。",
            txt2:"历史悠久的黑门市场",
            img:"https://images.cdn.uniqueway.com//uploads/2017/11/xrklsbuapmhswws01vsafz1usw6mw72v.jpg"
          },
          {
            txt1:"大阪黑门市场有超过170年的历史，是大阪历史最悠久的市场之一。这里不仅是大阪美食的聚集地，也保存了大阪丰富的饮食文化。",
            txt2:"并列的餐厅",
            img:"https://images.cdn.uniqueway.com//uploads/2017/11/n79ecfxuy4mxb3u9dq2habmqtp3z2sok.jpg"
          },
          {
            txt1:"在大阪黑门市场内有超过150间餐厅，供应了关西地区各种美食，不论是章鱼烧和关东煮，或是其他美味的日本料理，都能在黑门市场吃的到。",
            txt2:"当地人的最爱",
            img:"https://images.cdn.uniqueway.com//uploads/2017/11/c7avksp83xmldut5qw93dyu2izhe2y7q.jpg"
          }
        ]
      }
    }

  }
</script>

<style lang="less" scoped>
  .Osaka-sec{
    border: 1px solid #0000;
    border-radius: 10px 10px 0 0;
    background-color: #fff;
    position: relative;
    top: -20px;
    padding-bottom: 20px;
    .Osaka-sec-box{
      width: 90%;
      margin: auto;
      .title{
        margin: 20px auto 10px;
        font-size: 30px;
        font-weight: bold;
        color: #544641;
      }
      .msg{
        color: #A09793;
        img{
          width: 18px;
          height: 18px;
          position: relative;
          top: 2px;
        }
        .right{
          float: right;
        }
      }
      .btn{
        width: 90%;
        margin: auto;
        height: 25px;
        line-height: 25px;
        border-radius: 22.5px;
        text-align: center;
        padding: 0.625rem;
        background-color: #63C6C2;
        color: #fff;
        span{
          display: inline-block;
          width: 10px;
          height: 16px;
          margin-left: 10px;
          background-image: url(../../../static/Osaka/ic_chevron_right.png);
          -webkit-background-size: ;
          background-size: contain;
          background-repeat: no-repeat;
          position: relative;
          top: 3px;
        }
      }
      .sec{
        height: 400px;
        overflow: hidden;
        position: relative;
        .show-btn{
          width: 100%;
          height: 40px;
          line-height: 2.5rem;
          font-size: 20px;
          text-align: center;
          position: absolute;
          bottom: 0;
          background-image: linear-gradient(to bottom,#ffffff99,#fff0);
          color: #63C6C2;
        }
        p{
          line-height: 25px;
          margin-bottom: 30px;

        }
        img{
          width: 100%;
          margin: 0 0 30px;
        }
      }
      .expansion{
        height: 100%;
        overflow: visible;
      }
    }
  }
</style>

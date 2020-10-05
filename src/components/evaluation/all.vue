<template>
  <div class="all">
    <div class="box" >
      <div class="all-box" v-for="n in txt">
        <div class="all-box-head">
          <div class="left">
            <img :src="n.head" alt="">
          </div>
          <div class="right">
            <h5><span><img src="/static/evaluation/icon-destination.png" alt=""></span> {{n.countries}}</h5>
            <div class="stars">{{n.name}}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            </div>
          </div>
        </div>
        <div class="all-box-sec">
          <p>{{n.p}}</p>
          <img :src="n.img" alt="">
        </div>
        <div class="all-box-bottom">
          <div class="time">{{n.time}}</div>
          <span v-for="n in n.txt">私家定制</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    props:["txt"],
  }
</script>

<style lang="less" scoped>
  .all{
    width: 95%;
    margin: auto;

    .all-box{
      margin: 20px 0;
      padding: 20px;
      background-color: #fff;
      .all-box-head{
        display: flex;
        justify-content: space-between;
        .left{
          width: 20%;
          img{
            width: 100%;
            border-radius: 50%;
          }
        }
        .right{
          width: 70%;
          padding-top: 10px;
          h5{
            font-size: 16px;
            color: #C4BEB4;
          }
          span{
            img{
              width: 12px;
            }
          }
          .stars{
            span{
              display: inline-block;
              width: 15px;
              height: 15px;
              background-image: url(../../../static/evaluation/rank_selected.png);
              background-size: cover;
            }
          }
        }
      }
      .all-box-sec{
        p{
          margin: 10px 0;
          color: #C4BEB4;
        }
        img{
          width: 30%;
        }
      }
      .all-box-bottom{
        .time{
          display: inline-block;
          font-size: 14px;
          color: #C4BEB4;
        }
        span{
          display: inline-block;
          background-color: #F5F4EF;
          color: #D4CFC6;
          margin-top: 2px;
          padding: 0px 10px;
          border-radius: 10px;
        }
      }
    }
  }
</style>

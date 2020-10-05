<template>
  <div class="Wedding-video">
    <div class="Wedding-video-box" v-for="n in 4" :key="n.id">
      <div class="Wedding-video-box-head">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/wedding/icon_play@2x.png" alt="" @click="plays">
      </div>
      <div class="Wedding-video-box-txt">
        <img src="/static/wedding/icon_title_bg@2x.png" alt="">
        <h3>丹麦·DENMARK</h3>
        <h2>丹麦童话婚礼</h2>
        <h4>[ 丹麦驻地摄影师 专业旅拍 &amp; 婚纱摄影 ]</h4>
        <router-link to="/Bali"><div class="btn">丹麦婚礼</div></router-link>
        <div class="img">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/wedding/wedding_item_half_img2@2x.jpg" alt="">
          <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/wedding/wedding_item_half_img3@2x.jpg" alt="">
        </div>
        <div class="txt">
          <p>丹麦——一个处处洋溢着童话气息的国度。在这里举办的婚礼，也浪漫得有些不真实。</p>
          <p>当你伴着悠扬琴声走向真正的天鹅湖，或是踏入安徒生本人亲自设计的宴会厅，那感觉一定就像穿越进了小时候最爱的那篇童话，而这次，你才是真正的女主角。</p>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="dialogTableVisible" class="bg" width="100%" center v-if="dialogTableVisible">
      <video src="https://document.cdn.uniqueway.com/video/DenMarkFunenWedding.mp4" controls autoplay>
      </video>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        dialogTableVisible:false
      }
    },
    methods:{
      plays(){
        this.dialogTableVisible=true;
        // let s1=document.querySelector("video")
        // s1.load()
      }
    }
  }
</script>

<style lang="less">
  .Wedding-video {
    background-color: #fff;
    .bg{
      margin: 0;
      padding: 0;
      video{
        width: 100%;
      }
    }
    .Wedding-video-box {
      .Wedding-video-box-head {
        width: 100%;
        height: 220px;
        background-image: url(/static/wedding/wedding_item_half_img1@2x.jpg);
        -webkit-background-size: ;
        background-size: cover;
        position: relative;

        img {
          width: 20%;
          border-radius: 50%;
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translateY(-50%);
        }
      }

      .Wedding-video-box-txt {
        text-align: center;
        a{
          text-decoration: none;
        }
        img {
          width: 40%;
        }

        h3 {
          position: relative;
          top: -65px;
          color: #fff;
        }

        h4 {
          font-weight: normal;
          color: #9F9692;
        }

        .btn {
          background-color: #63C6C2;
          width: 30%;
          margin: auto;
          color: #fff;
          padding: 5px;
          border-radius: 5px;
        }

        .img {
          width: 90%;
          margin: 20px auto;
          display: flex;
          justify-content: space-between;

          img {
            width: 45%;
          }
        }
        .txt{
          width: 90%;
          margin: auto;
          text-align: left;
          font-size: 15px;
          color: #9F9692;
          padding-bottom: 50px;
        }
      }
    }
  }
</style>

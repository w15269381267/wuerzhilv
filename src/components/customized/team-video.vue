<template>
  <div class="team-video">
    <div class="video">
      <h2>专业定制师团队</h2>
      <div>100+位资深专业定制师，多年海外生活经历。<br>懂旅行，才能给你更好的旅行。</div>
      <video src="https://document.cdn.uniqueway.com/video/cctv.mp4" controls></video>
      <div>央视纪录片《特殊职业·旅行定制师》</div>
    </div>
    <div class="team-video-txt">
      <wc-swiper class="wc-swiper" autopaly="fales" style="width: 100%;">
        <wc-slide class="swiper" v-for="n in 2 " :key="n.id">
          <div class="team-video-txt-head">
            <div class="team-video-txt-head-left">
              <img src="https://assets.cdn.uniqueway.com/assets/img/new_consult/adviser-dahai.jpg" alt="">
            </div>
            <div class="team-video-txt-head-right">
              <h3>定制师 大海</h3>
              <div>家住圣托里尼</div>
            </div>
          </div>
          <div class="team-video-txt-end">每年夏天我都要忙着采摘葡萄，还要制作浓烈的Raki酒，花园每天也要去整理，还要拉着那头蠢蠢的驴子去买蓝色油漆，橄榄也是要摘的，到了晚上，还要去那家约好的餐厅弹奏钢琴，餐厅的味道嘛，我可从来都不推荐给谁。
          </div>
        </wc-slide>
      </wc-swiper>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .team-video{
    width: 100%;
    background-color: #F9F9F6;
    .video{
      width: 90%;
      margin: 0 auto;
      padding: 3.125rem 0 3.125rem;
      text-align: center;
      h2{
        margin: 20px 0 20px 0 ;
      }
      div{
        margin: 1.75rem 0 3.75rem;
      }
      video{
        width: 100%;
      }
    }
    .team-video-txt{
      width: 90%;
      margin: auto;
      .team-video-txt-head{
        display: flex;
        justify-content: space-around;
        .team-video-txt-head-left{
          width: 20%;
          img{
            width: 100%;
            border-radius: 50%;
          }
        }
        .team-video-txt-head-right{
          width: 60%;
          padding-top: 10px;
        }
      }
      .team-video-txt-end{
        width: 90%;
        margin: 1.25rem auto;
        font-size: 14px;
      }
    }
  }
</style>

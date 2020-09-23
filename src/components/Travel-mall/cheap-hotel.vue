<template>
  <div class="cheap-hotel">
    <div class="cheap-hotel-box">
      <h3>海外婚礼婚拍</h3>
      <p>专业团队+驻地摄影师，陪你去全世界结婚</p>
    </div>
    <div class="cheap-hotel-box-flex">
      <div>
        <div class="cheap-hotel-flex-box" v-for="n in 3">
          <img src="https://images.cdn.uniqueway.com/uploads/2018/01/3138f96f-a605-48ad-94e5-9701a1f23e3d.jpg" alt="">
          <div>【新西兰婚礼】登上雪山，在湖泊的见证下，大声说“我愿意”</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="less" scoped>
  .cheap-hotel{
    width: 100%;
    margin: 3.125rem 0 1.25rem;
    .cheap-hotel-box{
      width: 90%;
      margin: 0.625rem auto 0.3125rem;
    }
    .cheap-hotel-box-flex{
      width: 90%;
      margin: auto;
      overflow: auto;
      &>div{
        width: 1000px;
        display: flex;
        .cheap-hotel-flex-box{
          width: 80%;
          img{
            width: 80%;
          }
          &>div{
            width: 80%;
          }
        }
      }
    }
  }
</style>

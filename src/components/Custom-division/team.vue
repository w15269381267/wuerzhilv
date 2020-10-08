<template>
  <div class="team">
    <div class="team-box">
      <div class="title">更多定制师团队</div>
      <div class="team-box-flex">
        <div>
          <div class="team-flex-box" v-for="n in 6">
            <img src="https://images.cdn.uniqueway.com/uploads/2017/05/3828fbbd-6f52-42e0-ac29-b8f7820e736e.jpg!w360" alt="">
            <div class="txt">
              定制师 大海
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped lang="less">
  .team{
    background-color: #fff;
    margin-top: 30px;
    .team-box{
      width: 90%;
      margin: auto;
      .title{
        padding: 10px 0;
      }
    }
    .team-box-flex{
      width: 90%;
      margin: auto;
      overflow: auto;
      text-align: left;
      &>div{
        min-width: 1000px;
        display: flex;
        .team-flex-box{
          width: 200px;
          position: relative;
          margin-right: 10px;
          img{
            width: 100%;
          }
          &>div{
            width: 80%;
            padding: 2px 0 0;
            margin: auto;
            font-size: 0.875rem;
          }
          .txt{
            width: 100%;
            text-align: left;
            padding-bottom: 20px;
            color: #726662;
            background-color: #fff;
            p{
              margin: 5px;
            }
          }
          .btn{
            width: 30%;
            margin: 0 auto 0;
            text-align: center;
            font-size: 20px;
            background-color: #63C6C2;
            color: #FFFFFF;
            font-weight: bold;
            padding: 5px 10px;
            border-radius: 100px;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="experience">
    <div class="experience-box">
      <div class="experience-box-head">
        <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/theme/family/custom.png" alt="">
        <p class="title"><span>定制亲子旅行</span>·体验过就知道</p>
      </div>
      <div class="recommended-box-flex">
        <div>
          <div class="recommended-flex-box" v-for="n in 3">
            <img src="../../../static/family/story_one.jpg" alt="">
            <div class="txt">
              <p>只有1岁半的小宝宝，真的可以去北极圈旅行吗？虽然有爸爸全力支持，还有奶奶当后勤部长，但带着这个小家伙出去旅行，心里还是有些忐忑。还好有无二之旅帮我计划好了一切，各方面都考虑得特别周到。当抱着宝宝看到天边极光起舞时，觉得一切都值得。</p>
              <div class="btn" @click="fun">免费咨询</div>
            </div>
          </div>
        </div>
      </div>
      <p class="word">这是带着宝宝一起的第一次旅行，对我们来说意义非凡。而一路上美妙的旅行体验，让我们回来就迫不及待地计划起了下次的行程~ 想牵着他的手继续感受：这世界有多大、有多美。</p>
    </div>
  </div>
</template>

<script>
  export default {
    methods:{
      fun(){
        this.consulting()
      }
    },
    inject:['consulting'],
  }
</script>

<style lang="less" scoped>
  .experience{
    .experience-box{
      text-align: center;
      background-color: #F4F3EE;
      padding-bottom: 20px;
      .experience-box-head{
        img{
          width: 30%;
        }
        .title{
          color: #622A14;
          font-size: 25px;
          padding: 0px 0 20px;
          span{
            font-weight: bold;
          }
        }
      }
      .recommended-box-flex{
        width: 90%;
        margin: auto;
        overflow: auto;
        text-align: left;
        &>div{
          width: 1000px;
          display: flex;
          .recommended-flex-box{
            width: 70%;
            text-align: center;
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
      .word{
        width: 90%;
        margin: 20px auto 0;
        text-align: left;
      }
    }
  }
</style>

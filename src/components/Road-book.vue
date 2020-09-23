<template>
  <div class="Road-book">
    <header>
      <img src="/static/Road-book/banner.png" alt="">
      <div>-路书，你的专属“隐形导游”-</div>
    </header>
    <section>
      <h3>每位无二之旅的顾客，</h3>
      <h3>都会有一本属于自己的路书，</h3>
      <p>它是旅行定制师专为你制作的出国旅游攻略。</p>
      <p>从封面到每一页，全部为你量身定制。</p>
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/guidebook/mobile/pic01.jpg" alt="">
    </section>
    <div class="Road-book-img">
      <img src="/static/Road-book/bg02.jpg" alt="">
      <div class="Road-book-img-txt right"></div>
      <div class="img-txt right">
        <h4>景点，怎么玩才地道？</h4>
        <div class="img-txt-p">玩转当地特色活动，</div>
        <div class="img-txt-p">探索有趣的街头小店，</div>
        <div class="img-txt-p">最原汁原味的local体验，</div>
        <div class="img-txt-p">路书都备好了。</div>
      </div>
    </div>
    <section>
      <h3>美食，该怎么找？</h3>
      <p>定制师会综合线路、口碑来为你推荐地道餐厅，</p>
      <p>推荐菜品也贴心附上，再也不用发愁“吃什么”。</p>
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/LOGO.svg" alt="">
    </section>
    <div class="Road-book-img">
      <img src="/static/Road-book/bg03.jpg" alt="">
      <div class="Road-book-img-txt left"></div>
      <div class="img-txt left">
        <h4>外语不好，怎么办？</h4>
        <div class="img-txt-p"> 重要信息中英文对照，</div>
        <div class="img-txt-p">常用对话、菜品翻译，</div>
        <div class="img-txt-p">带着路书自由行，</div>
        <div class="img-txt-p">玩得更踏实。</div>
      </div>
    </div>
    <section>
      <h3>路书里还有……</h3>
      <p>怎么排队更快，哪个角度拍照更好看，</p>
      <p>定制师独家的锦囊妙计，都写在里面。</p>
      <img src="https://assets.cdn.uniqueway.com/assets/img/welcome/LOGO.svg" alt="">
    </section>
    <section>
      <h3>给旅行一点“仪式感”</h3>
      <p>只要翻开路书，就能想起那一天有趣的事。</p>
      <p>不仅是专属攻略，更是浓缩着回忆的旅行纪念。</p>
      <img src="/static/Road-book/bg04.jpg" alt="">
    </section>
    <div class="book">
      <div class="book-box">
        <div class="bookTitle">无二之旅书路案例</div>
        <div class="lookBook">查看书路</div>
        <img src="http://document.cdn.uniqueway.com/guidebook/1.jpg" alt="">
      </div>
    </div>
  <bottomFform></bottomFform>
  <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomNav from "@/components/Road-book/bottom-nav.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  export default {
    components:{
      bottomNav,
      bottomFform
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  h2{
    margin: 0.625rem 0;
  }
  p{
    font-size: 0.875rem;
    color: #C3BFBE;
    margin: 0.3125rem 0;
  }
  .Road-book{
    width: 100%;
    header{
      margin-top: 50px;
      position: relative;
      img{
        width: 100%;
      }
      div{
        width: 290px;
        font-size: 1.25rem;
        color: #fff;
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translateX(-50%);
      }
    }
    section{
      width: 90%;
      margin: 3.125rem auto;
      text-align: center;
      img{
        margin-top: 1.25rem;
        width: 100%;
      }
    }
    .Road-book-img{
      width: 100%;
      position: relative;
      img{
        width: 100%;
      }
      .right{
        position: absolute;
        top: 10%;
        right: 0;
      }
      .left{
        position: absolute;
        top: 10%;
        left: 0;
      }
      .Road-book-img-txt{
        box-sizing: border-box;
        padding: 10px;
        color: #fff;
        width: 50%;
        height: 150px;
        background-color: #000;
        opacity: 0.5;

      }
      .img-txt{
        color: #fff;
        margin: 1.25rem auto 1.25rem;
        padding-right: 5%;
        padding-left: 5%;
        h4{
          margin-top: 10px;
        }
        .img-txt-p{
          color: #E4E0E0;
          font-size: 14px;
        }
      }
    }
    .book{
      width: 100%;
      background-color: #F5F4EF;
      .book-box{
        width: 50%;
        margin: auto;
        text-align: center;
        img{
          width: 100%;
        }
        .bookTitle{
          padding: 1.25rem 0;
          font-size: 1.25rem;
        }
        .lookBook{
          height: 3.125rem;
          line-height: 1.875rem;
          box-sizing: border-box;
          padding: 0.625rem 0;
          margin-bottom: 1.25rem;
          border: 0.0625rem solid #57B7B3;
          color: #57B7B3;
          border-radius: 25px;
        }
      }
    }
  }
</style>

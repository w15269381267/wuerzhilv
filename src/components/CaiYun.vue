<template>
  <div class="CaiYun">
    <div class="CaiYun-box">
      <header>
        <div class="bgh">
          <h2>让行走，丰盛你的生命和灵魂－出国旅游案例</h2>
          <p>东帝汶总统帮我倒了一杯茶，问了我一个问题；</p>
          <p>土库曼斯坦的那个边警狠狠的告诉我，</p>
          <p>下次不要再来这个国家；</p>
          <p>我在伊朗弄丢了朋友送的那个黑袍子；</p>
          <p>还有人要把他的古堡送我。 </p>
          <p>你问我去过那儿，准备好十天十夜来听我讲。</p>
        </div>
      </header>
      <section>
        <p>在看到她前，你一定不会想到，原来还有这样的女孩，原来还有这样的人生。她认真的生活着她所热爱的生活，即使放在整个中国范围内，你也无法忽视她的独特魅力。</p>
        <img src="https://images.cdn.uniqueway.com/uploads/29e87fc1-8a1a-4a28-8c53-7c578dc7a8af.jpg!w700" alt="">
        <div class="txt" v-for="n in 5" :key="n.id">
          <div class="title">
            走变中国
          </div>
          <hr>
          <p>出生于旅行世家，于少年时代即完成了游历中国的壮举。</p>
          <img src="https://images.cdn.uniqueway.com/uploads/289c61fe-b38e-48fe-be8c-d0792dd25701.jpg!w700" alt="">
        </div>
      </section>
    </div>
    <bottomNav></bottomNav>
    <bottomFform></bottomFform>
  </div>
</template>

<script>
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  export default {
    components:{
      bottomNav,
      bottomFform,
    }
  }
</script>

<style lang="less">
*{
  margin: 0;
  padding: 0;
}
  .CaiYun{
    .CaiYun-box{
      margin-top: 50px;
      background-color: #F0F0F0;
      header{
        width: 100%;
        height: 100vh;
        background-image:url(https://images.cdn.uniqueway.com/uploads/9b3d6d8d-554f-444d-9411-152902dbfebb.jpg!w1500);
        background-size: cover;
        background-position: 50% 50%;
        text-align: center;
        color: #fff;
        position: relative;
        h2{
          width: 80%;
          margin: 0 auto;
          padding: 10px 0;
        }
        p{
          padding: 5px 0;
        }
        .bgh{
          background-color: #0009;
          position: absolute;
          bottom: 0;
        }
      }
      section{
        width: 90%;
        margin: auto;
        p{
          padding: 20px 0;
          color: #999999;
        }
        img{
          width: 100%;
        }
        .title{
          font-size: 20px;
          padding: 20px 0 5px;
        }
        hr{
          border: none;
          height: 1px;
          background-color: #999999;
        }
      }
    }
  }
</style>

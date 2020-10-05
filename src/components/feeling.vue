<template>
  <div class="feeling">
    <div class="feeling-box">
      <div class="feeling-box-head">
        <div class="feeling-box-head-txt">
          <h1>87岁奶奶，意大利梵蒂冈朝圣之旅－出国旅游案例</h1>
          <p>87岁的奶奶，从来没踏出过宁夏偏远的小县城。她信奉了一辈子的天主教。</p>
          <p>走之前，她希望能够去梵蒂冈，见教皇一面。</p>
        </div>
      </div>
      <div class="feeling-box-sec">
        <p>她那天早晨起的很早，在床边坐了很久的时间，大女儿叫了好几遍也没有理会，用完早餐，她叫住64岁的大女儿，说出了埋在自己心底已久的愿望。</p>
        <p>“我想去一次梵蒂冈。”</p>
        <p>母亲突然地这样一句话，已经64岁的大女儿却并不感到惊讶。想要去看一眼这座上帝的国度，为自己一辈子的信仰做一个最后的总结，母亲的心愿很简单，也很坚定。</p>
        <p>大女儿放下正要准备洗的碗筷，想了很久，给在大城市工作的儿子打了电话，大女儿问儿子，该怎么办？</p>
        <p>儿子说，砸锅卖铁，也要满足姥姥的心愿。</p>
        <p>但却并没有那么简单。儿子一家旅行社一家旅行社的去问，得到的却是一次次的拒绝。87岁了，身体撑不住怎么办？农村户口+白本，签证下不来怎么办？再说了，根本就没有适合的旅行产品，总不能单独为老奶奶研发一条吧！</p>
        <p>后来，儿子发了狠，直接买了机票代订来北京想办法。</p>
        <p>再后来，二零一四年九月二日，星期二，飞往罗马的SU3202次班机缓缓的降落在菲乌米奇诺机场，她的第一次旅行，也是最后一次旅行，便在亚平宁半岛热烈的阳光下，拉开了帷幕。</p>
        <img src="https://images.cdn.uniqueway.com/uploads/92039860-cfee-49b1-bfdf-7cdb784c5464.jpg!w700" alt="">
        <p>奶奶人生中第一次坐飞机，长途飞行的疲劳，并不能削弱奶奶的好奇与期待。</p>
        <img src="https://images.cdn.uniqueway.com/uploads/a908e216-f771-4ae9-b8d0-d9f9b25d0125.jpg!w700" alt="">
      </div>
    </div>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomFform from "@/components/index/bottom-form.vue"
  import bottomNav from "@/components/honeymoon/bottom-nav.vue"
  export default{
    components:{
      bottomFform,
      bottomNav
    }
  }
</script>

<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  .feeling{
    background-color: #F0F0F0;
    .feeling-box{
      margin-top: 3.125rem;
      .feeling-box-head{
        width: 100%;
        height: 700px;
        background-image:url(https://images.cdn.uniqueway.com/uploads/40e9d11e-f919-4700-a056-7170e0b2bfcf.jpg!w1500);
        background-size: cover;
        background-position: -300px;
        position: relative;
        .feeling-box-head-txt{
          position: absolute;
          bottom: 0;
          margin: auto;
          text-align: center;
          color: #fff;
          padding: 1.25rem;
          background-color: #0005;
          h1{
            font-weight: normal;
            margin-bottom: 10px;
          }
          p{
            font-size: 0.875rem;
            margin-bottom: 10px;
          }
        }
      }
      .feeling-box-sec{
        padding: 20px;
        p{
          margin: 1.25rem auto;
          color: #999999;
        }
        img{
          width: 100%;
        }
      }
    }
  }
</style>

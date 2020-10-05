<template>
  <div>
    <div class="custom-travel">
      <div class="banner2">
        <h2>- 定制旅行 -</h2>
        <div>自由·省心·有保障，好的定制，可以不贵。</div>
      </div>
    </div>
    <Team></Team>
    <bottomNav></bottomNav>
    <content1></content1>
  </div>

</template>

<script>
  import Team from "@/components/Custon-travel/professional_team.vue"
  import bottomNav from "@/components/Custon-travel/bottom-nav.vue"
  import content1 from "@/components/Custon-travel/content.vue"
  export default {
    data () {
      return{

      }
    },
    components:{
      Team,
      bottomNav,
      content1
    }
  }
</script>

<style lang="less" >
  *{
    margin: 0;
    padding: 0;
  }
  .custom-travel{
    margin-top: 3.125rem;
    width: 100%;
    height: 140px;
    background-image: url(/static/custom-travel/banner.png);
    -webkit-background-size: cover;
    background-size: cover;
    .banner2{
      color: #fff;
      text-align: center;
      position: relative;
      top: 45px;

    }
  }
</style>

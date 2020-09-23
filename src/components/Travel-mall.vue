<template>
  <div class="travel-mall">
    <header>
      <img src="/static/Travel-mall/ucPR91Vy3fwe847fKGRCmVVtc4NNOLaEO60Njd2V.jpeg" alt="">
      <nav>
        <div class="nav-img">
          <router-link to="" class="nav-img-link">
            <div class="travel-nav-img"><img src="/static/Travel-mall/trip.png" alt=""><div>定制旅行</div></div>
          </router-link>

          <div class="travel-nav-img"><img src="/static/Travel-mall/wedding.png" alt=""><div>海外婚礼</div></div>
          <div class="travel-nav-img"><img src="/static/Travel-mall/air.png" alt=""><div>特惠住宿待定</div></div>
        </div>
        <div class="travel-nav-div"></div>
      </nav>
      <router-link to="/CustomTravel">
        <div class="custom"><img src="/static/Travel-mall/adbanner.png" alt=""></div>
      </router-link>
    </header>
    <recommend></recommend>
    <selected></selected>
    <customized></customized>
    <cheapHotel></cheapHotel>
    <SpecialAccommodation></SpecialAccommodation>
    <bottomFform></bottomFform>
    <bottomNav></bottomNav>
  </div>
</template>

<script>
  import bottomNav from "@/components/Travel-mall/bottom-nav.vue"
  import recommend from "@/components/Travel-mall/recommend.vue"
  import selected from "@/components/Travel-mall/selected.vue"
  import customized from "@/components/index/customized.vue"
  import bottomFform from "@/components/index/bottom-form.vue"
  import cheapHotel from "@/components/Travel-mall/cheap-hotel.vue"
  import SpecialAccommodation from "@/components/Travel-mall/Special-accommodation.vue"
  export default {
    components:{
      bottomNav,
      recommend,
      selected,
      customized,
      bottomFform,
      cheapHotel,
      SpecialAccommodation
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
  .travel-mall{
    header{
      margin-top: 3.125rem;
      width: 100%;
      &>img{
        width: 100%;
      }
      &>nav{
        width: 100%;
        height: 50px;
        margin: 0 auto;
        text-align: center;
        position: relative;
        top: -43px;
        .nav-img{
          .nav-img-link{
            text-decoration: none;
            color: black;
          }
          width: 80%;
          margin: 0 auto;
          display: flex;
          justify-content: space-around;
          z-index: 3;
          position: relative;
          .travel-nav-img{
            font-size: 0.8375rem;
            width: 70px;
            img{
              width: 50px;
            }
            div{
              text-align: left;
            }
          }
        }
        .travel-nav-div{
          width: 100%;
          height: 50px;
          border-radius: 1.25rem;
          position: absolute;
          top: 30px;
          background-color: #fff;
          z-index: 2;
        }
      }
      .custom{
        width: 90%;
        margin: 0 auto;
        img{
          width: 100%;
        }
      }
    }
  }
</style>

<template>
  <div class="Bali-sec">
    <div class="Bali-sec-box">
      <div class="title">
        巴厘岛婚礼场地
      </div>
      <div class="sec" v-for="n in 3" :key="n.id">
        <div class="img">
          <swiper class="swiper-slide" ref="mySwiper" :options="swiperOptions">
            <swiper-slide><img src="../../../static/Bali/place1-1.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../../static/Bali/place1-2.jpg" alt=""></swiper-slide>
            <swiper-slide><img src="../../../static/Bali/place1-3.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <!-- 分页器 -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- 左右箭头 -->
            <div class="swiper-button-prev" slot="button-prev" @click="next"></div>
            <div class="swiper-button-next" slot="button-next" @click="prev"></div>
          </swiper>
        </div>
        <div class="txt">
          <h3>悦榕庄白鸽教堂</h3>
          <p>白鸽教堂外形别具一格，住宿代订知名度高，晚宴可以在悬崖餐厅举行，私密性佳。<br>
          白鸽教堂坐落在海平面70公尺的海崖之上， 纯白的屋顶一侧以上千只象征爱与和平的白鸽装饰， 祝福新人们永浴爱河、 白头偕老。 <br>
           教堂背依宽阔的印度洋， 你将和最爱的人们在这里共享人生中最幸福难忘的瞬间。
          </p>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
  import 'swiper/swiper-bundle.css'
  export default {
    data(){
      return{
        swiperOptions: {
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        }
      }
    },
    components:{
      Swiper,
      SwiperSlide
    },
    directives: {
      swiper: directive
    },
    computed:{
      swiper() {
        return this.$refs.mySwiper.$swiper
      }
    },
    methods:{
      prev(){
        this.$refs.mySwiper.$swiper.slidePrev()
      },
      next(){
        this.$refs.mySwiper.$swiper.slideNext()
      },
    }
  }
</script>

<style lang="less" scoped>
  .Bali-sec{
    background-color: #F5F4EF;
    .Bali-sec-box{
      padding: 20px 0;
      text-align: center;
      .title{
        font-size: 20px;
        padding: 20px 0;
      }
      .img{
        img{
          width: 90%;
        }
      }
      .txt{
        width: 90%;
        margin: 0 auto 10px;
        padding: 0 0 10px;
        background-color: #fff;
        h3{
          padding: 10px 0;
        }
      }
    }

  }
</style>

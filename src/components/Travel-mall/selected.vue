<template>
  <div class="selected">
    <div class="selected-box">
      <h2>为你精选</h2>
      <p>专业定制师特别设计，好评率99.9%</p>
    </div>
    <nav>
      <div class="selected-nav-top">
        <span>热门分类</span>
        <span class="bgc">日本</span>
        <span class="bgc">法意</span>
        <span class="bgc">东欧</span>
        <span class="bgc">西班牙</span>
        <span class="bgc">北欧</span>
      </div>
      <div class="selected-nav-bottom">
          <div v-for=" list in lists" :key="list.id">
            <router-link to="/honeymoon">
              <img :src="list.img" alt="">
              <div>{{list.txt}}</div>
            </router-link>
          </div>
      </div>
    </nav>
    <div class="selected-mall" v-for=" table in tables" :key="table.id">
      <div class="selected-mall-list">
        
        <div class="selected-mall-list-img">
          <router-link to="/selected">
            <img :src="table.img" alt="">
          </router-link>
        </div>
        <div class="selected-mall-list-txt">
          <h3>{{table.h3}}</h3>
          <div class="price">
            <span class="icon">¥</span>
            <span class="num">{{table.num}}</span>
            <span>起/人</span>
            <div class="custom-mode">{{table.custom}}</div>
          </div>
        </div>

      </div>

    </div>
    <h4>更多路线</h4>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        lists:[],
        tables:[]
      }
    },
    beforeMount () {
      this.axios({
        method: 'get',
        url: '/static/Travel-mall/Travel.json',
      }).then(res => {
        this.lists = res.data.lists
        this.tables = res.data.tables
      }).catch(err => {
        console.log(err)
      })
    }
  }
</script>

<style lang="less" scoped>
  .selected{
    width: 100%;
    margin-bottom: 3.125rem;
    .selected-box{
      width: 90%;
      margin: 0 auto;
    }
    h4{
      text-align: center;
      margin: 20px 0;
      color: #58BAB7;
    }
    nav{
      width: 100%;
      margin: 0 auto;
      background-color: #F8F7F2;
      .selected-nav-top{
        width: 90%;
        font-size: 0.775rem;
        text-align: center;
        span{
          margin: 0.3125rem auto 0;
          display: inline-block;
          width: 50px;
          height: 20px;
          border-radius: 0.625rem;
        }
        .bgc{
          background-color: #fff;
        }
      }
      .selected-nav-bottom{
        margin: 0 auto;
        padding: 5px 0 10px;
        width: 90%;
        display: flex;
        justify-content: space-around;
        &>div{
          width: 24%;
          position: relative;
          div{
            font-weight: bold;
            color: #FFFFFF;
            position: absolute;
            top: 30%;
            left: 50%;
            transform: translateX(-50%);
          }
        }
        img{
          width: 100%;
          border-radius: 5px;
        }
      }
    }
    .selected-mall{
      margin-top: 10px;
      width: 100%;
      background-color: #fff;
      .selected-mall-list{
        display: flex;
        width: 90%;
        margin: auto;
        justify-content: space-between;
        .selected-mall-list-img{
          margin: 10px auto;
          width: 40%;
          img{
            width: 100%;
          }
        }
        .selected-mall-list-txt{
          margin-left: 10px;
          .price{
            position: relative;
            span{
              font-size: 0.875rem;
            }
            .icon{
              color: #F06E6E;
              font-style: italic;
            }
            .num{
              color: #F06E6E;
              font-size: 1.25rem;
              font-style: italic;
            }
            .custom-mode{
              font-size: 0.875rem;
              position: absolute;
              right: 0;
              bottom: 0;
            }
          }
        }
      }
    }
  }
</style>

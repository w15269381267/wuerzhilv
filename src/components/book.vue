<template>
  <div class="box_box">
    <div class="book">
      <div class="page page4">
        <div class="page_content"><img src="../../static/book/5.jpg" alt=""></div>
        <div class="page_footer">
          <div @click="prevPage($event)">上一页</div> / <div @click="nextPage($event)">共4页</div>
        </div>
      </div>
      <div class="page page3">
        <div class="page_content"><img src="../../static/book/4.jpg" alt=""></div>
        <div class="page_footer">
          <div @click="prevPage($event)">上一页</div> / <div @click="nextPage($event)">共4页</div>
        </div>
      </div>
      <div class="page page2">
        <div class="page_content"><img src="../../static/book/3.jpg" alt=""></div>
        <div class="page_footer">
          <div @click="prevPage($event)">上一页</div> / <div @click="nextPage($event)">共4页</div>
        </div>
      </div>
      <div class="page page1">
        <div class="page_content"><img src="../../static/book/1.jpg" alt=""></div>
        <div class="page_footer">
          <div @click="prevPage($event)">上一页</div> / <div @click="nextPage($event)">共4页</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
    }
  },
  mounted(){
  },
  methods:{
    // 上一页
    prevPage(e){
      // 获取到 class 名为 page 的元素下一个兄弟元素
      let a = e.currentTarget.parentNode.parentNode.nextElementSibling;
      if(a != null){
        a.style.transform = 'perspective(2000px) rotateY(0deg)';
      }
    },
    // 下一页
    nextPage(e){
      // 获取到 class 名为 page 的元素
      let a = e.currentTarget.parentNode.parentNode;
      // 获取到 class 名为 page 的元素上一个兄弟元素
      let b = e.currentTarget.parentNode.parentNode.previousElementSibling;
      if(b != null){
        a.style.transform = 'perspective(2000px) rotateY(-180deg)';
      }
    },
  },
}
</script>

<style lang="less" scoped>
.box_box{
  width: 100% !important;
  height: 800px !important;
  position: relative;
  .book{
    position: relative;
    width: 100%;
    height: 600px;
    border: 1px solid #000;
    transform-style: preserve-3d;
    margin: 100px auto;
  }
  .page {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: left;
    transform-style: preserve-3d;
    backface-visibility: hidden;
    transform: perspective(1500px) rotateY(0deg);
    transition: transform 1s ease-in;
    // background: plum;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    img{
      width: 100%;
    }
    .page_content{
      text-align: center;
    }
    .page_footer{
      display: flex;
      align-items: center;
      text-align: right;
      justify-content: flex-end;
      padding: 10px 10px 10px 0px;
      div{
        cursor: pointer;
      }
    }
  }
}
</style>

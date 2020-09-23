import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import CustomTravel from "@/components/Custom-travel.vue"
import TravelMall from "@/components/Travel-mall.vue"
import RoadBook from "@/components/Road-book.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path:"/CustomTravel",
      name:"CustomTravel",
      component: CustomTravel
    },
    {
      path:"/TravelMall",
      name:"TravelMall",
      component: TravelMall
    },
    {
      path:"/RoadBook",
      name:"RoadBook",
      component: RoadBook
    }
  ]
})

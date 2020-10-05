import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import CustomTravel from "@/components/Custom-travel.vue"
import TravelMall from "@/components/Travel-mall.vue"
import RoadBook from "@/components/Road-book.vue"
import honeymoon from "@/components/honeymoon.vue"
import selected from "@/components/selected.vue"
import customized from "@/components/customized.vue"
import SelectDestination from "@/components/customized/Select-destination.vue"
import SelectDestination2 from "@/components/customized/Select-destination2.vue"
import SelectDestination3 from "@/components/customized/Select-destination3.vue"
import CustomerCase from "@/components/Customer-case.vue"
import feeling from "@/components/feeling.vue"
import evaluation from "@/components/evaluation.vue"
import wedding from "@/components/wedding.vue"
import strategy from "@/components/strategy.vue"
import about from "@/components/about.vue"
import Bali from "@/components/Bali.vue"
import Osaka from "@/components/Osaka.vue"
import book from "@/components/book.vue"

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
    },
    {
      path:"/honeymoon",
      name:"honeymoon",
      component: honeymoon
    },
    {
      path:"/selected",
      name:"selected",
      component: selected
    },
    {
      path:"/customized",
      name:"customized",
      component: customized,
      children:[
        {
          path:"/customized/",
          name:"SelectDestination",
          component: SelectDestination,
        },
        {
          path:"/customized/SelectDestination2",
          name:"SelectDestination2",
          component: SelectDestination2,
        },
        {
          path:"/customized/SelectDestination3",
          name:"SelectDestination3",
          component: SelectDestination3,
        }
      ]
    },
    {
      path:"/CustomerCase",
      name:"CustomerCase",
      component: CustomerCase
    },
    {
      path:"/feeling",
      name:"feeling",
      component: feeling
    },
    {
      path:"/evaluation",
      name:"evaluation",
      component: evaluation
    },
    {
      path:"/wedding",
      name:"wedding",
      component: wedding
    },
    {
      path:"/strategy",
      name:"strategy",
      component: strategy
    },
    {
      path:"/about",
      name:"about",
      component: about
    },
    {
      path:"/Bali",
      name:"Bali",
      component: Bali
    },
    {
      path:"/Osaka",
      name:"Osaka",
      component: Osaka
    },
    {
      path:"/book",
      name:"book",
      component: book
    }
  ]
})

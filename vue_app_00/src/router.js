import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Login from './views/Login.vue'
import Details from './views/Details.vue'
import LonginesProduct from './views/LonginesProduct.vue'
import Qiye from './views/Qiye.vue'
import LonginesRed12 from './views/LonginesRed12.vue'
import Card from './views/Card.vue'
Vue.use(Router)
export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/login",component:Login},
    {path:"/longinesproduct",component:LonginesProduct},
    {path:"/details",component:Details},
    {path:"/qiye",component:Qiye},
    {path:"/longinesred12",component:LonginesRed12},
    {path:"/card",component:Card},
  ]
})

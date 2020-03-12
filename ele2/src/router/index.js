import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Goods from '@/components/goods/Goods';
import Ratings from '@/components/ratings/Ratings';
import Seller from '@/components/seller/Seller';
import NotFoundComponent from '@/components/notFound.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Goods
  },
  {
    path: '/goods',
    name: 'goods',
    component: Goods
  },
  {
    path: '/ratings',
    name: 'ratings',
    component: Ratings
  },
  {
    path: '/seller',
    name: 'seller',
    component: Seller
  },
  { path: '*', component: NotFoundComponent }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

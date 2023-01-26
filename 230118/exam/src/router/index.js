import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateComponent from '@/components/CreateComponent.vue'
import detail from '@/components/detailComponent.vue'
import notFound from '@/components/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/create/:index?',
    name: 'create',
    component: CreateComponent
  },
  {
    path: '/detail/:idx',
    name: 'detail',
    component: detail
  },
  {
    path: '*',
    name: 'notFound',
    component: notFound
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

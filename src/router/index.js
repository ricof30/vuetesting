import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Main from '../views/Main.vue'
import Template from '../views/Template.vue'


const routes = [
  // {
  //   path: '/home',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/manage',
    name: 'template',
    component: Template
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

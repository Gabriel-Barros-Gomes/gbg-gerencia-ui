import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../core/views/core/Home.vue'
import About from '../core/views/core/About.vue'

import Login from '../core/views/core/auth/Login.vue'
import Sign from '../core/views/core/auth/Sign.vue'

import RouteRegister from '../core/views/core/dashboard/registers/RouteRegister.vue'
import UserRegister from '../core/views/core/dashboard/registers/UserRegister.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/auth/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/auth/sign',
    name: 'Sign',
    component: Sign
  },
  {
    path: '/dashboard/route-register',
    name: 'RouteRegister',
    component: RouteRegister
  },
  {
    path: '/dashboard/user-register',
    name: 'UserRegister',
    component: UserRegister
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

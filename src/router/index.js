import Account from '../views/Account.vue'
import Friends from '../views/Friends.vue'
import Home from '../views/Home.vue'
import Photos from '../views/Photos.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/account',
    name: 'My Account',
    component: Account
  },
  {
    path: '/photos',
    name: 'Photos',
    component: Photos
  },
  {
    path: '/friends',
    name: 'Friends',
    component: Friends
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

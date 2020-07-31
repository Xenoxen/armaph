import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import SignUp from '@/views/Register.vue'
Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main,
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'sign-up',
        component: SignUp
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router

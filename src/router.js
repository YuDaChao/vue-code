import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/props'
    },
    {
      path: '/props',
      name: 'props',
      component: () => import('./components/props')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('./components/events')
    }
  ]
})

export default router

import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Service from '@/components/Service'
import Bootstrap from '@/components/Bootstrap'
import User from '@/components/User'
import residents from '@/components/Residents/residents'
import supplies from '@/components/Supplies/supplies'
import QuickCharges from '@/components/Residents/QuickCharges'
import Nav from '@/components/Nav'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/callservice',
      name: 'Service',
      component: Service
    },
    {
      path: '/bootstrap',
      name: 'Bootstrap',
      component: Bootstrap
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
    {
      path: '/home',
      name: 'Nav',
      component: Nav
    },
    {
      path: '/residents',
      name: 'Resident',
      component: residents
    },
    {
      path: '/supplies',
      name: 'Supplies',
      component: supplies
    },
    {
      path: '/quickcharges',
      name: 'QuickCharges',
      component: QuickCharges
    }
  ],
  mode: 'history'
})

import Vue from 'vue'
import Router from 'vue-router'
import Inventory from '@/components/Inventory'
import Home from '@/components/Home'
import Order from '@/components/Order'
import Promos from '@/components/Promos'
import Shipping from '@/components/Shipping'
import BootstrapVue from 'bootstrap-vue'


Vue.use(Router)
Vue.use(BootstrapVue);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/promos',
      name: 'promos',
      component: Promos
    },
    {
      path: '/shipping',
      name: 'shipping',
      component: Shipping
    }
  ]
})

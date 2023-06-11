import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './views/HomeView.vue'
import ProductList from './views/ProductList.vue'
import ProductDetails from './views/ProductDetails.vue'
import Cart from './views/CartView.vue'
import Checkout from './views/CheckoutView.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/products',
      name: 'products',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'product-details',
      component: ProductDetails
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: Checkout
    }
  ]
})

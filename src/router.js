import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/HomeView.vue'
import ProductList from './views/ProductList.vue'
import ProductDetails from './views/ProductDetails.vue'
import Cart from './views/CartView.vue'
import Checkout from './views/CheckoutView.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'ProductList',
        component: ProductList
    },
    {
        path: '/product/:id',
        name: 'ProductDetails',
        component: ProductDetails
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/checkout',
        name: 'Checkout',
        component: Checkout
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

<template>
  <div>
    <h1>Your Cart</h1>
    <div v-for="item in cart" :key="item.product.id">
      <h2>{{ item.product.name }}</h2>
      <p>Quantity: {{ item.quantity }}</p>
    </div>
    <router-link to="/checkout">Proceed to Checkout</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cart: [
        { product: { id: 1, name: 'Product 1', description: 'This is product 1' }, quantity: 1 },
        // ... add more items here
      ],
    }
  },
}
</script>

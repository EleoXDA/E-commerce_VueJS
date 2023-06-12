<template>
  <div>
    <h1>{{ product.name }}</h1>
    <p>{{ product.description }}</p>
    <button @click="addToCart">Add to Cart</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: { id: 1, name: 'Product 1', description: 'This is product 1' },
    }
  },
  methods: {
    addToCart() {
      // Add product to cart
    },
  },
}
</script>

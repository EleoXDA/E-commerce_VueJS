<template>
  <div>
    <h1>Our Products</h1>
    <div v-for="product in products" :key="product.id">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <router-link :to="'/product/' + product.id">View Details</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: 'Product 1', description: 'This is product 1' },
        // ... add more products here
      ],
    }
  },
}
</script>

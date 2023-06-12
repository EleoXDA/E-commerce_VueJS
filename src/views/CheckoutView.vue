<template>
  <div>
    <h1>Checkout</h1>
    <form @submit.prevent="submitOrder">
      <label>
        Name:
        <input type="text" v-model="name" required>
      </label>
      <label>
        Address:
        <input type="text" v-model="address" required>
      </label>
      <!-- Add more fields as needed -->
      <button type="submit">Submit Order</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      address: '',
    }
  },
  methods: {
    submitOrder() {
      // Submit order
    },
  },
}
</script>

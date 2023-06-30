<template>
  <header>
    <h1>My E-commerce Store</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/products">Products</router-link>
      <router-link to="/cart">Cart</router-link>
    </nav>
  </header>
</template>

<script>
  export default {
    name: 'HeaderView',
  };
</script>

<style>
  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--bg-color);
    color: var(--font-color);
  }

  nav {
    display: flex;
    gap: 20px;
  }
</style>

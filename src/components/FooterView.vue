<template>
  <footer>
    <p>©2023 My E-commerce Store. All rights reserved.</p>
    <button @click="$emit('toggle-theme')">Toggle Theme</button>
  </footer>
</template>

<script>
  export default {
    name: 'FooterView',
  };
</script>

<style>
  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
  }
</style>

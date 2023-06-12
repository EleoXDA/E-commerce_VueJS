<template>
  <main>
    <section class="featured-items">
      <div class="grid-item" v-for="item in items" :key="item.id">
        <img :src="item.image" :alt="item.title" />
        <h3>{{ item.title }}</h3>
        <p>{{ item.description }}</p>
        <p>{{ item.price }}</p>
      </div>
    </section>
  </main>
</template>

<script>
import items from '@/data/items.js';

export default {
  name: 'FeaturedItems',
  data() {
    return {
      items,
    };
  },
};
</script>

<style>
main {
  flex-grow: 1;
  padding: 20px;
}

.featured-items {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}
</style>

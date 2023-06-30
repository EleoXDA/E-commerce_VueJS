<template>
  <div>
    <main>
      <section class="featured-items">
        <div class="grid-item" v-for="item in items" :key="item.id">
          <img :src="item.image" :alt="item.title" />
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <p>{{ item.price }}</p>
        </div>
      </section>
     <p>Check out our <router-link to="/products">products</router-link>.</p>
    </main>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            id: 1,
            title: 'Item 1',
            description: 'Description for item 1',
            price: 10.99,
            image: 'https://example.com/item1.jpg',
          },
          {
            id: 2,
            title: 'Item 2',
            description: 'Description for item 2',
            price: 19.99,
            image: 'https://example.com/item2.jpg',
          },
        ],
      };
    },
  };
</script>
<style>
  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  header {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: #f5f5f5;
  }

  nav {
    display: flex;
    gap: 20px;
  }

  main {
    flex-grow: 1;
    padding: 20px;
  }

  .featured-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #f5f5f5;
  }
</style>
<template>
  <div id="app" :class="theme">
    <HeaderView/>
    <FeaturedItems />
    <FooterView @toggle-theme="toggleTheme" />
  </div>
</template>

<script>
import HeaderView from '@/components/HeaderView.vue';
import FeaturedItems from '@/components/FeaturedItems.vue';
import FooterView from '@/components/FooterView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    FeaturedItems,
    FooterView,
  },
  data() {
    return {
      theme: 'light',
    };
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
    },
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--bg-color);
  color: var(--font-color);
  transition: background-color 0.5s ease, color 0.5s ease;
}


:root.light {
  --bg-color: #fff;
  --font-color: #000;
}

:root.dark {
  --bg-color: #000;
  --font-color: #fff;
}

body {
  background-color: var(--bg-color);
  color: var(--font-color);
  transition: background-color 0.5s ease, color 0.5s ease;
}
</style>

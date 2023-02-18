<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const goBlog = () => {
  router.push('/blog');
};
</script>

<template>
  <div class="wrap">
    <TheHeader />
    <nav>
      <router-link to="/">ホーム</router-link>
      <router-link to="about">アバウト</router-link>
      <span @click="goBlog">Blog</span>
      <router-link to="/blog/1">Blog1</router-link>
      <router-link to="/blog/2">Blog2</router-link>
    </nav>
    <main class="main"><router-view /></main>
    <TheFooter />
  </div>
</template>

<style>
.wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  width: 370px;
  margin: 0 auto;
}

.main {
  flex: 1;
  width: 100%;
}
</style>

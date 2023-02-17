<script setup>
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
</script>

<template>
  <div class="wrap">
    <TheHeader />
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

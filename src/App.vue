<script setup>
import HelloWorld from './components/HelloWorld.vue';
</script>

<template>
  <div class="wrap">
    <div>ヘッダー</div>
    <div class="main">メイン</div>
    <div>フッター</div>
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

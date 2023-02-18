<script setup>
import { useRoute } from 'vue-router';
import { ref, watch } from 'vue';
const route = useRoute();
const id = ref(route.params.id);
console.log('watch外:', id);

watch(route, () => {
  id.value = route.params.id;
  console.log('watch内:', id.value);
});
</script>

<template>
  <p>blogPage</p>
  <p>blog idは{{ id }}</p>
</template>

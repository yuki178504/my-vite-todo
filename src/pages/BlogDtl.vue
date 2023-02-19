<script setup>
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute();
const id = route.params.id;

const dtl = ref({});

const fetchData = async () => {
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/posts/' + id
  );
  dtl.value = await response.json();
};
fetchData();
console.log(dtl);
</script>

<template>
  <div>
    <h1 class="title">{{ dtl.title }}</h1>
    <div class="dtl">{{ dtl.body }}</div>
  </div>
  <div>{{ id }}</div>
</template>

import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';

const routes = [
  {
    path: '/',
    name: 'MainTodo',
    component: MainTodo,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

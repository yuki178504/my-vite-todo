import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '/src/pages/MainTodo.vue';
import About from '/src/pages/About.vue';
import NotFound from '/src/pages/NotFound.vue';
import Blog from '/src/pages/Blog.vue';

const routes = [
  {
    path: '/',
    name: 'MainTodo',
    component: MainTodo,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/blog/:id',
    name: 'BlogId',
    component: () => import('/src/pages/Blog.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

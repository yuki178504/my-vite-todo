import { createRouter, createWebHistory } from 'vue-router';
import MainTodo from '../pages/MainTodo.vue';
import About from '../pages/About.vue';
import NotFound from '../pages/NotFound.vue';
import Blog from '../pages/Blog.vue';
import BlogId from '../pages/Blog.vue';

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
    component: BlogId,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

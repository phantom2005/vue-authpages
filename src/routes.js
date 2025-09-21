import { createRouter, createWebHistory } from "vue-router";
import Login from './pages/login.vue'
import Register from './pages/register.vue'

const router = createRouter({
  history: createWebHistory(),  // for testing, remove import.meta.env.BASE_URL
  routes: [
    
    { path: "/login", component: Login },
    { path: "/register", component: Register }
  ]
});

export default router;

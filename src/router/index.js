import { createWebHistory, createRouter } from 'vue-router'
import Blog from '../components/Blog.vue'
import Admin from '../components/Admin.vue'

const routes = [
  {
    path: '/',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

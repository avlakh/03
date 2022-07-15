import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/SiteWorks',
    name: 'SiteWorks',
    component: () => import('../views/SiteWorks.vue')
  },
  {
    path: '/SiteFeatures',
    name: 'SiteFeatures',
    component: () => import('../views/SiteFeatures.vue')
  },
  {
    path: '/mynews',
    name: 'MyNews',
    component: () => import ('../views/mynews/NewsList.vue')
  },
  {
    path: '/mynews/:title',
    name: 'MyOneNews',
    component: () => import ('../views/mynews/OneNews.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

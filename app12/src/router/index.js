import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ItemsView from '../views/ItemsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/items/',  //dynamic routing
      name: 'List of Friends',
      component: ItemsView
    },
    {
      path: '/items/:id',  //dynamic routing
      name: 'My Friend',
      component: ItemsView
    }
  ]
})

export default router
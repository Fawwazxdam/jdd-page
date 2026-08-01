import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import Opsi2 from '../views/Opsi2.vue'
import Opsi3 from '../views/Opsi3.vue'
import Opsi4 from '../views/Opsi4.vue'
import Opsi5 from '../views/Opsi5.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Opsi5
  },
  {
    path: '/opsi2',
    name: 'Opsi2',
    component: Opsi2
  },
  {
    path: '/opsi3',
    name: 'Opsi3',
    component: Opsi3
  },
  {
    path: '/opsi4',
    name: 'Opsi4',
    component: Opsi4
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' }
    }
    return { top: 0 }
  }
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import List from '../components/List';
// import Task from '../components/Task';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../components/List.vue')
  },
  {
    path: '/task/:id',
    name: 'Task',
    component: () => import('../components/Task.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

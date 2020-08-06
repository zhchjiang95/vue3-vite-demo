import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Component from '../views/Component.vue'

const routes = [
  {
    path: '/',
    component: Component,
  },
  {
    path: '/cgCount',
    component: () => import('../views/CgCount.vue'),
    meta: {
      title: '响应数据的绑定'
    }
  },
  {
    path: '/cgObject',
    component: () => import('../views/CgObject.vue'),
    meta: {
      title: '响应对象数据的绑定'
    }
  },
  {
    path: '/lifeCycle',
    component: () => import('../views/LifeCycle.vue'),
    meta: {
      title: '生命周期'
    }
  },
  {
    path: '/doubled',
    component: () => import('../views/Doubled.vue'),
    meta: {
      title: '计算属性'
    }
  },
  {
    path: '/component',
    component: () => import('../views/Component.vue'),
    meta: {
      title: '普通组件的开发与使用'
    }
  },
  {
    path: '/about',
    component: () => import('../views/About.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
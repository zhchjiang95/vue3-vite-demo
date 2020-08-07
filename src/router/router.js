import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    meta: {
      title: '首页'
    }
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
    path: '/funcComponent',
    component: () => import('../views/FuncComponent.vue'),
    meta: {
      title: '函数组件的开发与使用'
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router
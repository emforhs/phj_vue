const routes = [
  {
    path: '/', 
    component: () => import('pages/Index.vue')
  },
  {
    path: '/gridster', 
    component: () => import('src/pages/Dashboard.vue')
  },
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

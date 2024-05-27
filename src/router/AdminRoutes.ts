const MainRoutes = {
  path: '/admin',
  meta: {
    requiresAuth: true
  },
  redirect: '/admin',
  component: () => import('@/layouts/admin/AdminLayout.vue'),
  children: [
    {
      name: 'Home',
      path: '/admin/home',
      component: () => import('@/views/admin/home/AdminHome.vue')
    },
    {
      name: 'WorkSchedule',
      path: '/admin/workschedule',
      component: () => import('@/views/admin/workschedule/WorkSchedule.vue')
    },
    {
      name: 'Colors',
      path: '/colors',
      component: () => import('@/views/colors/ColorPage.vue')
    },
    {
      name: 'Shadow',
      path: '/shadow',
      component: () => import('@/views/shadows/ShadowPage.vue')
    },
    {
      name: 'Color',
      path: '/icon/ant',
      component: () => import('@/views/icons/AntDesignIcons.vue')
    },
    {
      name: 'other',
      path: '/sample-page',
      component: () => import('@/views/StarterPage.vue')
    }
  ]
};

export default MainRoutes;

const UserRoutes = {
  path: '/user',
  meta: {
    requiresAuth: true
  },
  redirect: '/user/home',
  component: () => import('@/layouts/user/UserLayout.vue'),
  children: [
    {
      name: 'Home',
      path: 'home',
      component: () => import('@/views/user/home/UserHome.vue')
    },
    {
      name: 'WorkSchedule',
      path: 'workschedule',
      component: () => import('@/views/user/workschedule/WorkSchedule.vue')
    },
    {
      name: 'MonthlyReport',
      path: 'monthlyreport',
      component: () => import('@/views/user/monthlyreport/MonthlyReportDetail.vue')
    },
    {
      name: 'AttendanceList',
      path: 'attendancelist',
      component: () => import('@/views/user/attendancelist/AttendanceList.vue')
    },
    {
      name: 'WeeklyReport',
      path: 'weeklyreport',
      component: () => import('@/views/user/weeklyreport/WeeklyReport.vue')
    },
    {
      name: 'PersonalSetting',
      path: 'personalsetting',
      component: () => import('@/views/user/personalsetting/PersonalSetting.vue')
    }
  ]
};

export default UserRoutes;

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
      name: 'MonthlyReport',
      path: '/admin/monthlyreport',
      component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue'),
      children: [
        {
          name: 'MonthlyReportDetail',
          path: '/admin/monthlyreport/detail',
          component: () => import('@/views/admin/monthlyreport/MonthlyReportDetail.vue')
        }
      ]
    },
    {
      name: 'AttendanceList',
      path: '/admin/attendancelist',
      component: () => import('@/views/admin/attendancelist/AttendanceList.vue')
    },
    {
      name: 'EmployeeManagement',
      path: '/admin/employeemanagement',
      component: () => import('@/views/admin/employeemanagement/EmployeeManage.vue')
    },
    {
      name: 'SpecialVacation',
      path: '/admin/specialvacation',
      component: () => import('@/views/admin/specialvacation/SpecialVacation.vue')
    }
  ]
};

export default MainRoutes;

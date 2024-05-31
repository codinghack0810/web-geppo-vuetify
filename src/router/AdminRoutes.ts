const AdminRoutes = {
  path: '/admin',
  meta: {
    requiresAuth: true
  },
  redirect: '/admin/home',
  component: () => import('@/layouts/admin/AdminLayout.vue'),
  children: [
    {
      name: 'Home',
      path: 'home',
      component: () => import('@/views/admin/home/AdminHome.vue')
    },
    {
      name: 'WorkSchedule',
      path: 'workschedule',
      component: () => import('@/views/admin/workschedule/WorkSchedule.vue')
    },
    {
      name: 'MonthlyReport',
      path: 'monthlyreport',
      component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue')
      // children: [
      //   {
      //     path: '/',
      //     component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue')
      //   },
      //   {
      //     name: 'MonthlyReportDetail',
      //     path: 'detail',
      //     component: () => import('@/views/admin/monthlyreport/MonthlyReportDetail.vue')
      //   }
      // ]
    },
    {
      name: 'MonthlyReportDetail',
      path: 'monthlyreport/detail',
      component: () => import('@/views/user/monthlyreport/MonthlyReportDetail.vue')
    },
    {
      name: 'AttendanceList',
      path: 'attendancelist',
      component: () => import('@/views/admin/attendancelist/AttendanceList.vue')
    },
    {
      name: 'EmployeeManagement',
      path: 'employeemanagement',
      component: () => import('@/views/admin/employeemanagement/EmployeeManage.vue')
    },
    {
      name: 'SpecialVacation',
      path: 'specialvacation',
      component: () => import('@/views/admin/specialvacation/SpecialVacation.vue')
    }
  ]
};

export default AdminRoutes;

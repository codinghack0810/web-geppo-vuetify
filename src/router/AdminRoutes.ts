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
            component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue')
            // children: [
            //   {
            //     path: '/admin//',
            //     component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue')
            //   },
            //   {
            //     name: 'MonthlyReportDetail',
            //     path: '/admin/detail',
            //     component: () => import('@/views/admin/monthlyreport/MonthlyReportDetail.vue')
            //   }
            // ]
        },
        {
            name: 'MonthlyReportDetail',
            path: '/admin/monthlyreport/detail',
            component: () => import('@/views/admin/monthlyreport/MonthlyReportDetail.vue')
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
            name: 'EmployeeManagementDetail',
            path: '/admin/employeemanagement/detail',
            component: () => import('@/views/admin/employeemanagement/EmployeeManageDetail.vue')
        },
        {
            name: 'SpecialVacation',
            path: '/admin/specialvacation',
            component: () => import('@/views/admin/specialvacation/SpecialVacation.vue')
        },
        {
            path: '/notice',
            component: () => import('@/views/notice/NoticeEdit.vue')
        }
    ]
};

export default AdminRoutes;

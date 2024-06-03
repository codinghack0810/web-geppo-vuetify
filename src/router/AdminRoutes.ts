const AdminRoutes = {
    path: '/admin',
    meta: {
        requiresAuth: true
    },
    // redirect: '/admin/home',
    component: () => import('@/layouts/admin/AdminLayout.vue'),
    children: [
        {
            name: 'AdminHome',
            path: 'home',
            component: () => import('@/views/admin/home/AdminHome.vue')
        },
        {
            name: 'AdminWorkSchedule',
            path: 'workschedule',
            component: () => import('@/views/admin/workschedule/WorkSchedule.vue')
        },
        {
            name: 'AdminMonthlyReport',
            path: 'monthlyreport',
            component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue')
            // children: [
            //   {
            //     path: '/',
            //     component: () => import('@/views/admin/monthlyreport/MonthlyReport.vue')
            //   },
            //   {
            //     name: 'AdminMonthlyReportDetail',
            //     path: 'detail',
            //     component: () => import('@/views/admin/monthlyreport/MonthlyReportDetail.vue')
            //   }
            // ]
        },
        {
            name: 'AdminMonthlyReportDetail',
            path: 'monthlyreport/detail',
            component: () => import('@/views/admin/monthlyreport/MonthlyReportDetail.vue')
        },
        {
            name: 'AdminAttendanceList',
            path: 'attendancelist',
            component: () => import('@/views/admin/attendancelist/AttendanceList.vue')
        },
        {
            name: 'AdminEmployeeManagement',
            path: 'employeemanagement',
            component: () => import('@/views/admin/employeemanagement/EmployeeManage.vue')
        },
        {
            name: 'AdminEmployeeManagementDetail',
            path: 'employeemanagement/detail',
            component: () => import('@/views/admin/employeemanagement/EmployeeManageDetail.vue')
        },
        {
            name: 'AdminSpecialVacation',
            path: 'specialvacation',
            component: () => import('@/views/admin/specialvacation/SpecialVacation.vue')
        },
        {
            path: 'notice',
            component: () => import('@/views/notice/NoticeEdit.vue')
        }
    ]
};

export default AdminRoutes;

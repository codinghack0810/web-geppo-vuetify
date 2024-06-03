// icons
// import {
//   mdiHomeVariant,
//   mdiFileDocumentOutline,
//   mdiCalendarMonth,
//   mdiCheckOutline,
//   mdiAccountMultiple,
//   mdiFileDocumentEditOutline,
//   mdiLogout
// } from '@mdi/js';

export interface menu {
    header?: string;
    title?: string;
    bottom?: string;
    icon?: string;
    to?: string;
    divider?: boolean;
    chip?: string;
    chipColor?: string;
    chipVariant?: string;
    chipIcon?: string;
    children?: menu[];
    disabled?: boolean;
    type?: string;
    subCaption?: string;
    name?: string;
}

const sidebarItem: menu[] = [
    {
        title: 'HOME',
        icon: 'mdi-home-variant',
        to: '/admin/home',
        name: 'AdminHome'
    },
    {
        title: '勤務表',
        icon: 'mdi-file-document-outline',
        to: '/admin/workschedule',
        name: 'AdminWorkSchedule'
    },
    {
        title: '月報管理',
        icon: 'mdi-calendar-month',
        to: '/admin/monthlyreport',
        name: 'AdminMonthlyReport'
    },
    {
        title: '勤怠一覧',
        icon: 'mdi-check-outline',
        to: '/admin/attendancelist',
        name: 'AdminAttendanceList'
    },
    {
        title: '社員管理',
        icon: 'mdi-account-multiple',
        to: '/admin/employeemanagement',
        name: 'AdminEmployeeManagement'
    },
    {
        title: '特別休暇管理',
        icon: 'mdi-file-document-edit-outline',
        to: '/admin/specialvacation',
        name: 'AdminSpecialVacation'
    },
    {
        title: 'ログアウト',
        icon: 'mdi-logout',
        to: '/auth/login',
        name: 'Login'
    },
    {
        title: 'ポータルサイト',
        icon: 'mdi-web',
        to: '/portalsite'
    },
    {
        title: '操作ヘルプ',
        icon: 'mdi-help-circle',
        to: '/help'
    }
];

export default sidebarItem;

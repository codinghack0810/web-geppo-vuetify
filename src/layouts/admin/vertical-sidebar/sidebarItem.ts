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
}

const sidebarItem: menu[] = [
  {
    title: 'HOME',
    icon: 'mdi-home-variant',
    to: '/admin/home'
  },
  {
    title: '勤務表',
    icon: 'mdi-file-document-outline',
    to: '/admin/workschedule'
  },
  {
    title: '月報管理',
    icon: 'mdi-calendar-month',
    to: '/admin/monthlyreport'
  },
  {
    title: '勤怠一覧',
    icon: 'mdi-check-outline',
    to: '/admin/attendancelist'
  },
  {
    title: '社員管理',
    icon: 'mdi-account-multiple',
    to: '/admin/employeemanagement'
  },
  {
    title: '特別休暇管理',
    icon: 'mdi-file-document-edit-outline',
    to: '/admin/specialvacation'
  },
  {
    title: 'ログアウト',
    icon: 'mdi-logout',
    to: '/auth/login'
  },
  {
    title: 'ポータルサイト',
    icon: 'mdi-web',
    to: '/forum'
  },
  {
    title: '操作ヘルプ',
    icon: 'mdi-help-circle',
    to: '/help'
  }
];

export default sidebarItem;

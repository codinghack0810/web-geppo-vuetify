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
  // { header: 'Navigation' },
  {
    title: 'HOME',
    icon: 'mdi-home-variant',
    to: '/admin/home'
  },
  // { header: 'Authentication' },
  // {
  //   title: 'Login',
  //   icon: LoginOutlined,
  //   to: '/auth/login'
  // },
  // {
  //   title: 'Register',
  //   icon: ProfileOutlined,
  //   to: '/auth/register'
  // },
  // { header: 'Utilities' },
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
  // { header: 'Support' },
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
  // {
  //   title: 'Documentation',
  //   icon: QuestionOutlined,
  //   to: 'https://codedthemes.gitbook.io/mantis-vuetify/',
  //   type: 'external',
  //   chip: 'gitbook',
  //   chipColor: 'secondary',
  //   chipVariant: 'flat'
  // }
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

<script setup>
import CardButton from './CardButton.vue';
import { shallowRef } from 'vue';

const cardButtons = shallowRef([
  {
    title: '月報管理',
    icon: 'mdi-calendar-month',
    to: '/colors'
  },
  {
    title: '勤怠一覧',
    icon: 'mdi-check-outline',
    to: '/shadow'
  },
  {
    title: '社員管理',
    icon: 'mdi-account-multiple',
    to: '/icon/ant'
  },
  {
    title: 'ログアウト',
    icon: 'mdi-logout',
    to: '/auth/login'
  }
]);
</script>

<template>
  <v-row class="py-10">
    <template v-for="item in cardButtons" :key="item.title">
      <CardButton :item="item" />
    </template>
  </v-row>
</template>

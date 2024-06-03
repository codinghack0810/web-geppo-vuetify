<script setup>
import CardButton from './CardButton.vue';
import { shallowRef } from 'vue';

const cardButtons = shallowRef([
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

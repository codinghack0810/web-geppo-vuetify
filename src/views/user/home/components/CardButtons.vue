<script setup>
import CardButton from './CardButton.vue';
import { shallowRef } from 'vue';

const cardButtons = shallowRef([
    {
        title: '自分の週報一覧',
        icon: 'mdi-star',
        to: '/user/weeklyreport'
    },
    {
        title: '勤怠申請',
        icon: 'mdi-check-outline',
        to: '/user/attendancelist'
    },
    {
        title: 'ポータルサイト',
        icon: 'mdi-web',
        to: '/portalsite'
    },
    {
        title: '勤務表',
        icon: 'mdi-file-document-outline',
        to: '/user/workschedule'
    },
    {
        title: '個人設定',
        icon: 'mdi-cog',
        to: '/user/personalsetting'
    },
    {
        title: 'ログアウト',
        icon: 'mdi-logout',
        to: '/auth/login'
    }
]);
</script>

<template>
    <v-expansion-panel>
        <!-- <v-expansion-panel-title>カード</v-expansion-panel-title> -->
        <v-expansion-panel-text>
            <v-row class="py-10">
                <template v-for="item in cardButtons" :key="item.title">
                    <CardButton :item="item" />
                </template>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

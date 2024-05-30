<script setup>
import CardButton from './CardButton.vue';
import { shallowRef } from 'vue';

const cardButtons = shallowRef([
  {
    title: '自分の週報一覧',
    icon: 'mdi-star',
    to: '/colors'
  },
  {
    title: '勤怠申請',
    icon: 'mdi-check-outline',
    to: '/shadow'
  },
  {
    title: 'ポータルサイト',
    icon: 'mdi-web',
    to: '/icon/ant'
  },
  {
    title: '勤務表',
    icon: 'mdi-file-document-outline',
    to: '/icon/ant'
  },
  {
    title: '個人設定',
    icon: 'mdi-cog',
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

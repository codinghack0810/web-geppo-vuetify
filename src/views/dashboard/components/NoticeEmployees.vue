<script setup lang="ts">
import { shallowRef } from 'vue';
import NoticeEmployeelist from './NoticeEmployeelist.vue';

const notices = shallowRef([
  {
    date: '2024/05/31',
    title: '5月分：勤務表とWeb月報の提出のお願い'
  },
  {
    date: '2024/05/01',
    title: '5月のお知らせタイトルサンプル文字'
  },
  {
    date: '2024/04/30',
    title: '4月分：勤務表とWeb月報の提出のお願い'
  },
  {
    date: '2024/04/01',
    title: '4月のお知らせタイトルサンプル文字'
  },
  {
    date: '2024/04/01',
    title: '4月新制度のお知らせ'
  },
  {
    date: '2024/03/29',
    title: '3月分：勤務表とWeb月報の提出のお願い'
  },
  {
    date: '2024/03/15',
    title: '3月のお知らせ'
  },
  {
    date: '2024/02/28',
    title: '2月分：勤務表とWeb月報の提出のお願い'
  }
]);
</script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>社員へのお知らせ</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-btn color="primary" width="25%"><v-icon color="lightprimary" size="large">mdi-plus-circle</v-icon>お知らせを追加</v-btn>
      <v-list class="list">
        <template v-for="(notice, index) in notices" :key="index">
          <NoticeEmployeelist :item="notice" />
        </template>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

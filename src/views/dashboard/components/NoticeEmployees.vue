<script setup lang="ts">
import { shallowRef } from 'vue';
// import NoticeEmployeelist from './NoticeEmployeelist';

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
      <v-list class="notice-list">
        <template v-for="(item, index) in notices" :key="index">
          <v-list-item>
            <div>
              <span>{{ item.date }}</span>
              <span class="px-5"></span>
              <span>{{ item.title }}</span>
            </div>
            <div>
              <v-btn color="secondary" variant="flat">
                <v-icon icon="mdi-delete-forever" size="large" color="lightsecondary"></v-icon>削除
              </v-btn>
              <span class="px-1"></span>
              <v-btn color="primary" variant="flat"> <v-icon icon="mdi-pencil" size="large" color="lightprimary"></v-icon>編集</v-btn>
            </div>
          </v-list-item>
        </template>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

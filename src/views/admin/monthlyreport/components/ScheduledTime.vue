<script setup>
import { shallowRef } from 'vue';
import ScheduledTime from './ScheduledTimeItem.vue';

const scheduledTime = shallowRef([
  {
    startTime: '09:00',
    endTime: '18:00',
    restTime: '01:00',
    workTime: '08:00',
    note: ' '
  },
  {
    startTime: '09:00',
    endTime: '18:00',
    restTime: '01:00',
    workTime: '08:00',
    note: '「10日から現場変更」等の理由'
  }
]);
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-title>定時時刻</v-expansion-panel-title>
    <v-expansion-panel-text>
      <p>勤務先の定時時刻と休憩時間数を入力してください。</p>

      <v-table class="scheduled-time">
        <thead>
          <tr>
            <th></th>
            <th>開始時刻</th>
            <th>終了時刻</th>
            <th>休憩時間</th>
            <th>勤務時間</th>
            <th>備考</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in scheduledTime" :key="index">
            <ScheduledTime :item="item" :index="index" />
          </template>
        </tbody>
      </v-table>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style></style>

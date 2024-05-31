<script setup>
import { shallowRef } from 'vue';
import ScheduledTimeItem from './ScheduledTimeItem.vue';
import scheduleTimeItems from './scheduleTimeItems';

const scheduledTime = shallowRef(scheduleTimeItems);
</script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-title>定時時刻</v-expansion-panel-title>
    <v-expansion-panel-text>
      <p>勤務先の定時時刻と休憩時間数を入力してください。</p>
      <div class="d-flex justify-between">
        <div style="width: 40px; text-align: center"></div>
        <div style="width: 10%">開始時刻</div>
        <div style="width: 10%">終了時刻</div>
        <div style="width: 10%">休憩時間</div>
        <div style="width: 8%">勤務時間</div>
        <div style="width: calc(62% - 120px)">備考</div>
        <div style="width: 80px; padding: 0"></div>
      </div>
      <template v-for="(item, index) in scheduledTime" :key="index">
        <ScheduledTimeItem :item="item" :total="scheduledTime.length" :index="index" />
      </template>
      <v-col class="px-0 mb-10">
        <v-btn color="secondary" class="float-left" @click="scheduledTime.push({})">
          <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>
          追加
        </v-btn>
        <v-btn color="primary" class="px-10 ml-2 float-right">
          <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
          前月をコピー
        </v-btn>
        <v-btn color="secondary" class="px-10 mr-2 float-right">
          <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary" size="large"></v-icon>
          前月をコピー
        </v-btn>
      </v-col>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style></style>

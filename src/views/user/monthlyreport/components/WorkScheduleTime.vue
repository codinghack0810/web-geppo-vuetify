<script setup>
import { shallowRef } from 'vue';
import WorkScheduleTimeItem from './WorkScheduleTimeItem.vue';
import scheduleTimeItems from './scheduleTimeItems';

const scheduledTime = shallowRef(scheduleTimeItems);
</script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title>自社勤務表</v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="d-flex justify-between table-header">
                <div style="width: 40px"></div>
                <div style="width: 11%">日付</div>
                <div style="width: 40px"></div>
                <div style="width: 9%">開始時刻</div>
                <div style="width: 9%">終了時刻</div>
                <div style="width: 9%">休憩時間</div>
                <div style="width: 9%">勤務時間</div>
                <div style="width: calc(48% - 270px)">備考</div>
                <div style="width: 110px"></div>
                <div class="pa-0" style="width: 80px"></div>
            </div>
            <template v-for="(item, index) in scheduledTime" :key="index">
                <WorkScheduleTimeItem :item="item" :total="scheduledTime.length" :index="index" />
            </template>
            <div class="px-0 my-5 work-schedule-button">
                <div>
                    <v-btn color="secondary" @click="scheduledTime.push({})">
                        <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>
                        追加
                    </v-btn>
                    <v-btn color="secondary" class="ml-3" @click="scheduledTime.push({})">
                        <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>
                        翌日行追加
                    </v-btn>
                </div>
                <div>
                    <div class="align-center pa-2">合計稼働</div>
                    <div class="pa-2 mr-3 disabledCell">160:00</div>
                    <v-btn color="secondary" class="px-10 float-right mobile-hidden">
                        <v-icon icon="mdi-tray-arrow-down" color="lightsecondary" size="large"></v-icon>
                        Excel出力
                    </v-btn>
                </div>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style></style>

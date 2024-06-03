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
            <div class="d-flex justify-between">
                <div style="width: 12%">日付</div>
                <div class="text-center" style="width: 40px"></div>
                <div style="width: 10%; padding: 1px">開始時刻</div>
                <div style="width: 10%; padding: 1px">終了時刻</div>
                <div style="width: 10%; padding: 1px">休憩時間</div>
                <div style="width: 8%; padding: 1px">勤務時間</div>
                <div style="width: calc(42% - 120px); padding: 1px">備考</div>
                <div class="pa-0" style="width: 80px"></div>
            </div>
            <template v-for="(item, index) in scheduledTime" :key="index">
                <WorkScheduleTimeItem :item="item" :total="scheduledTime.length" :index="index" />
            </template>
            <v-col class="px-0 mb-10">
                <v-btn color="secondarydisabled" class="float-left" @click="scheduledTime.push({})" flat>
                    <v-icon icon="mdi-plus-circle" color="lightsecondarydisabled" size="large"></v-icon>
                    <span class="surface-color">追加</span>
                </v-btn>
                <v-btn color="secondarydisabled" class="float-left ml-3" @click="scheduledTime.push({})" flat>
                    <v-icon icon="mdi-plus-circle" color="lightsecondarydisabled" size="large"></v-icon>
                    <span class="surface-color">翌日行追加</span>
                </v-btn>
                <div class="pa-2 float-right disabledCell">160:00</div>
                <div class="float-right align-center pa-2">合計稼働</div>
            </v-col>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style></style>

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
                <v-btn color="secondarydisabled" class="float-left" @click="scheduledTime.push({})" flat>
                    <v-icon icon="mdi-plus-circle" color="lightsecondarydisabled" size="large"></v-icon>
                    <span class="surface-color">追加</span>
                </v-btn>
                <v-btn color="primarydisabled" class="px-10 ml-2 float-right" flat>
                    <v-icon icon="mdi-check-circle" color="lightprimarydisabled" size="large"></v-icon>
                    <span class="surface-color">前月をコピー</span>
                </v-btn>
                <v-btn color="secondarydisabled" class="px-10 mr-2 float-right" flat>
                    <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondarydisabled" size="large"></v-icon>
                    <span class="surface-color">前月をコピー</span>
                </v-btn>
            </v-col>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style></style>

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
            <div class="d-flex justify-between table-header">
                <div style="width: 40px; text-align: center"></div>
                <div style="width: 10%">開始時刻</div>
                <div style="width: 10%">終了時刻</div>
                <div style="width: 10%">休憩時間</div>
                <div style="width: 10%">勤務時間</div>
                <div style="width: calc(60% - 120px)">備考</div>
                <div style="width: 80px; padding: 0"></div>
            </div>
            <template v-for="(item, index) in scheduledTime" :key="index">
                <ScheduledTimeItem :item="item" :total="scheduledTime.length" :index="index" />
            </template>
            <div class="py-2"></div>
            <v-row>
                <v-col cols="12" md="1" sm="3">
                    <v-btn color="secondary" class="float-left" @click="scheduledTime.push({})">
                        <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>
                        追加
                    </v-btn>
                </v-col>
                <v-col cols="12" md="7"></v-col>
                <v-col cols="12" md="2">
                    <v-btn color="secondary" block>
                        <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary" size="large"></v-icon>
                        前月をコピー
                    </v-btn>
                </v-col>
                <v-col cols="12" md="2">
                    <v-btn color="primary" block>
                        <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                        定時時刻を保存
                    </v-btn>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style></style>

<script setup>
import attendanceItem from '../../home/components/attendanceItem';
import { shallowRef } from 'vue';
import AttendanceList from '../../home/components/AttendanceList.vue';
import { nowYear, nowMonth, nowDay, formattedMonth, formattedDay, formattedWeek } from '@/utils/date';

const attendanceListItems = shallowRef(attendanceItem);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>勤怠状況</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <v-col cols="12">
                    <div class="text-h1 font-weight-thin float-left">
                        {{ nowMonth }} <span class="text-h4 font-weight-thin">月</span> {{ nowDay }}
                        <span class="text-h4 font-weight-thin">日 ( {{ formattedWeek }} )</span>
                    </div>
                    <div
                        class="pa-2 float-right"
                        style="border: 1px solid rgb(var(--v-theme-inputBorder)); display: inline; border-radius: 5px; color: black"
                    >
                        {{ nowYear }} / {{ formattedMonth }} / {{ formattedDay }}
                        <span class="pl-5"><v-icon icon="mdi-calendar-blank"></v-icon></span>
                    </div>
                </v-col>
                <v-col cols="12">
                    <v-table class="attendance-list">
                        <thead>
                            <tr>
                                <th class="font-weight-bold">社員名</th>
                                <th class="font-weight-bold">時間</th>
                                <th class="font-weight-bold">申請種別</th>
                                <th class="font-weight-bold">備考</th>
                                <th class="font-weight-bold">送信日時</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-for="(item, index) in attendanceListItems" :key="index">
                                <AttendanceList :item="item" />
                            </template>
                        </tbody>
                    </v-table>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

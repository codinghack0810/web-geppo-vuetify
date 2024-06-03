<script setup lang="ts">
import { shallowRef } from 'vue';
import attendanceItems from './attendanceItem';
import AttendanceList from './AttendanceList.vue';

const props = defineProps({ item: Object });
const nowMonth = props.item?.getMonth() + 1;
const nowDay = props.item?.getDay();
const nowDate = props.item?.getDate();

const weekDay = ['日', '月', '火', '水', '木', '金', '土'];

const attendanceListItems = shallowRef(attendanceItems);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>勤怠状況</v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="text-center text-h1 font-weight-thin" :style="{ color: 'rgb(var(--v-theme-lightsecondary))' }">
                {{ nowMonth }}<span class="text-h4"> 月 </span>{{ nowDate }}<span class="text-h4"> 日 ( {{ weekDay[nowDay] }} )</span>
            </div>
            <v-card variant="outlined" rounded="lg">
                <v-card-text>
                    <v-table class="table">
                        <tbody>
                            <template v-for="(item, index) in attendanceListItems" :key="index">
                                <AttendanceList :item="item" />
                            </template>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

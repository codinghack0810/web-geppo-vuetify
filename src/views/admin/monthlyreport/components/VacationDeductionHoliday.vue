<script setup lang="ts">
import { shallowRef } from 'vue';
import attendanceItems from '../../../user/home/components/attendanceItem';
import AttendanceList from '../../../user/home/components/AttendanceList.vue';
import VacationHolidayTotal from './VacationHolidayTotal.vue';

const attendanceListItems = shallowRef(attendanceItems);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>休暇・控除・休日出勤</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-card variant="outlined" rounded="lg">
                <v-card-text>
                    <v-table class="attendance-list">
                        <tbody>
                            <template v-for="(item, index) in attendanceListItems" :key="index">
                                <AttendanceList :item="item" />
                            </template>
                        </tbody>
                    </v-table>
                </v-card-text>
            </v-card>
            <div class="py-2"></div>
            <VacationHolidayTotal />
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

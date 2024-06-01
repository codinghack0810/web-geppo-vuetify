<script setup lang="ts">
import { shallowRef } from 'vue';
import attendanceItems from './attendanceItem';
import AttendanceList from './AttendanceList.vue';

const attendanceListItems = shallowRef(attendanceItems);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>申請状況</v-expansion-panel-title>
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
                    <div class="text-caption" :style="{ color: 'rgb(var(--v-theme-error))' }">
                        却下理由：スペシャルデーチケットをご利用の場合は備考にご家族情報を入力してください。
                    </div>
                </v-card-text>
            </v-card>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

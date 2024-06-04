<script setup>
import { shallowRef } from 'vue';
import attendanceItems from './attendanceItem.js';
import AttendanceList from './AttendanceList.vue';

const attendanceListItems = shallowRef(attendanceItems);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title
            >勤怠申請<span class="mobile-hidden">一覧</span><span class="mobile-show">（承認前）</span></v-expansion-panel-title
        >
        <v-expansion-panel-text>
            <v-card variant="outlined" rounded="lg">
                <v-card-text class="attendance-status">
                    <v-list>
                        <template v-for="(item, index) in attendanceListItems" :key="index">
                            <AttendanceList :item="item" :index="index" />
                        </template>

                        <div class="text-caption mobile-hidden error-color">
                            却下理由：スペシャルデーチケットをご利用の場合は備考にご家族情報を入力してください。
                        </div>
                    </v-list>
                </v-card-text>
            </v-card>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

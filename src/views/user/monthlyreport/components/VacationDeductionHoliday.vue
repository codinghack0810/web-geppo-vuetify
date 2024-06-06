<script setup>
import { shallowRef } from 'vue';
import attendanceItems from '../../home/components/attendanceItem';
import AttendanceList from '../../home/components/AttendanceList.vue';
import VacationHolidayTotal from './VacationHolidayTotal.vue';

const attendanceListItems = shallowRef(attendanceItems);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>休暇・控除・休日出勤</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-card variant="outlined" rounded="lg">
                <!-- <v-card-text>
                    <v-table class="attendance-list">
                        <tbody>
                            <template v-for="(item, index) in attendanceListItems" :key="index">
                                <AttendanceList :item="item" :index="index" />
                            </template>
                        </tbody>
                    </v-table>
                </v-card-text> -->
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
            <v-row>
                <v-col>
                    <v-btn class="float-right px-10 my-2" color="primary">
                        <v-icon icon="mdi-format-list-bulleted" color="lightprimary" size="large"></v-icon>
                        勤怠申請追加・変更
                    </v-btn>
                </v-col>
            </v-row>
            <VacationHolidayTotal />
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

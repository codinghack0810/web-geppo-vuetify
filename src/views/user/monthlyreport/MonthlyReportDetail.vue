<script setup>
import { ref } from 'vue';
import ScheduledTime from './components/ScheduledTime.vue';
import OfficeWorkSchedule from './components/OfficeWorkSchedule.vue';
import WorkScheduleTime from './components/WorkScheduleTime.vue';
import VacationDeductionHoliday from './components/VacationDeductionHoliday.vue';
import SubScription from './components/SubScription.vue';
import TrafficReport from './components/TrafficReport.vue';
import { nowYear, nowMonth, formattedMonth } from '@/utils/date';

const panel = ref([0, 1, 2, 3, 4, 5]);
</script>

<template>
    <v-row>
        <v-col cols="12" md="12">
            <div class="pa-2 float-left borderCell">
                {{ nowYear }}年 {{ formattedMonth }}月 <span class="pl-5"><v-icon icon="mdi-calendar-blank"></v-icon></span>
            </div>
        </v-col>
        <v-col cols="12">
            <div class="float-left">
                <v-card color="warning" rounded="0" variant="flat" class="px-5">
                    <v-card-text>差戻し</v-card-text>
                </v-card>
            </div>
        </v-col>
        <v-col cols="12">
            <v-card color="containerBg" class="message-user-admin" variant="flat">
                <v-card-text class="text-caption">
                    <div>2024/05/31 11:10 担当者A</div>
                    差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル勤務表に対して色々とコメントする。複数行入力の場合は
                    定幅で折り返して表示。
                </v-card-text>
            </v-card>
            <v-card color="containerBg" class="message-user-employee" variant="flat">
                <v-card-text class="text-caption">
                    <div>2024/05/31 11:10 社員氏名</div>
                    社員からの返信メッセージは左側へ表示
                </v-card-text>
            </v-card>
            <v-card color="containerBg" class="message-user-admin" variant="flat">
                <v-card-text class="text-caption">
                    <div>2024/05/31 11:10 担当者B</div>
                    差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル
                </v-card-text>
            </v-card>
        </v-col>
        <v-col cols="12">
            <v-row class="align-end">
                <v-col cols="12" sm="12" md="11">
                    <div class="message-box">
                        <textarea variant="outlined"></textarea>
                    </div>
                </v-col>
                <v-col cols="12" sm="12" md="1">
                    <v-btn color="secondary" class="float-right mb-1">送信</v-btn>
                </v-col>
            </v-row>
        </v-col>
        <v-col>
            <v-divider thickness="2 textmain-brColor"></v-divider>
        </v-col>
        <v-col cols="12">
            <v-expansion-panels v-model="panel" variant="accordion" multiple>
                <ScheduledTime />
                <OfficeWorkSchedule />
                <WorkScheduleTime />
                <VacationDeductionHoliday />
                <SubScription />
                <TrafficReport />
            </v-expansion-panels>
            <div class="py-2"></div>
            <v-btn color="primary" class="float-right px-10">
                <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                全体を一時保存
            </v-btn>
        </v-col>
        <div class="py-3"></div>
        <v-col>
            <div class="text-center">
                <div class="text-subtitle-2">{{ nowYear }}年 {{ nowMonth }}月分</div>
                <v-btn class="px-15" color="warning" size="large">
                    <v-icon class="pr-5" color="lightwarning" icon="mdi-check-circle" size="x-large"></v-icon>
                    承認依頼
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<style scoped></style>

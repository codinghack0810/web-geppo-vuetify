<script setup>
import { ref } from 'vue';
import ReportHistory from './components/ReportHistory.vue';
import ReportdayCompanyinfo from './components/ReportdayCompanyinfo.vue';
import PaticipationBus from './components/PaticipationBus.vue';
import WeekStatus from './components/WeekStatus.vue';
import ProjectImprove from './components/ProjectImprove.vue';
import TheOther from './components/TheOther.vue';
import { nowYear, nowMonth, nowDay } from '@/utils/date';

const panel = ref([0, 1, 2, 3]);
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-expansion-panels v-model="panel" flat multiple>
                <ReportHistory />
                <ReportdayCompanyinfo />
                <PaticipationBus />
                <WeekStatus />
                <ProjectImprove />
                <TheOther />
            </v-expansion-panels>
        </v-col>
        <v-col cols="12">
            <v-btn color="primary" class="right-button">
                <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                一時保存
            </v-btn>
        </v-col>
        <v-col>
            <div class="text-center">
                <div class="text-subtitle-2">{{ nowYear }}年 {{ nowMonth }}月 {{ nowDay }}日分</div>
                <v-btn class="px-15 end-button" color="primary" size="large">
                    <v-icon class="pr-5" color="lightprimary" icon="mdi-email" size="x-large"></v-icon>
                    週報送信
                </v-btn>
            </div>
        </v-col>
    </v-row>
</template>

<style></style>

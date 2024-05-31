<script setup lang="ts">
import NoticeUser from './components/NoticeUser.vue';
import AttendanceRecord from './components/AttendanceRecord.vue';
import MonthyReport from './components/MonthlyReport.vue';
import AttandenceStatus from './components/AttendanceStatus.vue';
import CardButtons from './components/CardButtons.vue';
import WeeklyReport from './components/WeeklyReport.vue';
import AnnualTotal from './components/AnnualTotal.vue';
import ContactInfo from './components/ContactInfo.vue';

const panel = [0, 1, 2, 3, 4, 5, 6, 7];
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-expansion-panels v-model="panel" flat multiple>
                <NoticeUser />
                <AttendanceRecord />
                <MonthyReport />
                <WeeklyReport />
                <AttandenceStatus />
                <CardButtons />
                <AnnualTotal />
                <ContactInfo />
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>

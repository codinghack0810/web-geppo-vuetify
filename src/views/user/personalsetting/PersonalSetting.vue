<script setup>
import { ref } from 'vue';
import WeeklyReportDeliverySetting from './components/WeeklyReportDeliverySetting.vue';
import CompanyWorkRegistration from './components/CompanyWorkRegistration.vue';
import ChangePassword from './components/ChangePassword.vue';

const panel = ref([0, 1, 2]);
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-expansion-panels v-model="panel" flat multiple>
                <WeeklyReportDeliverySetting />
                <CompanyWorkRegistration />
                <ChangePassword />
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>
<style></style>

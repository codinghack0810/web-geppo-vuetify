<script setup lang="ts">
import VacationApprovalRequest from './components/VacationApprovalRequest.vue';
import AttendanceRecord from './components/AttendanceRecord.vue';

const panel = [0, 1];
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-expansion-panels v-model="panel" flat multiple>
                <VacationApprovalRequest />
                <AttendanceRecord />
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>

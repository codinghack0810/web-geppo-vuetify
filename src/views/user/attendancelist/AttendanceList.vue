<script setup lang="ts">
import { ref } from 'vue';
import AttendanceContact from './components/AttendanceContact.vue';
import AttendanceRecord from '../home/components/AttendanceRecord.vue';
import AttandenceStatus from '../home/components/AttendanceStatus.vue';
import TotalApproved from './components/TotalApproved.vue';

const panel = ref([0, 1, 2, 3]);
</script>
<template>
    <v-row>
        <v-col cols="12" md="12">
            <v-expansion-panels v-model="panel" flat multiple>
                <AttendanceContact />
                <AttendanceRecord />
                <AttandenceStatus />
                <TotalApproved />
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>

<script setup>
import { ref } from 'vue';
import RegistrationInfo from './components/RegistrationInfo.vue';
import AttendanceStatus from './components/AttendanceStatus.vue';
import VacationTotal from './components/VacationTotal.vue';

const panel = ref([0, 1, 2]);
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-expansion-panels v-model="panel" variant="accordion" multiple>
                <RegistrationInfo />
                <AttendanceStatus />
                <VacationTotal />
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>
<style></style>

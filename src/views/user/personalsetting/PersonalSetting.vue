<script setup>
import WeeklyReportDeliverySetting from './components/WeeklyReportDeliverySetting.vue';

const panel = [0, 1, 2];
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-expansion-panels v-model="panel" flat multiple>
                <WeeklyReportDeliverySetting />
            </v-expansion-panels>
        </v-col>
    </v-row>
</template>
<style></style>

<script setup>
import ReportHistory from './components/ReportHistory.vue';
import ReportdayCompanyinfo from './components/ReportdayCompanyinfo.vue';
import PaticipationBus from './components/PaticipationBus.vue';
import WeekStatus from './components/WeekStatus.vue';

const panel = [0, 1, 2, 3];
</script>
<template>
  <v-row>
    <v-col cols="12">
      <v-expansion-panels v-model="panel" flat multiple>
        <ReportHistory />
        <ReportdayCompanyinfo />
        <PaticipationBus />
        <WeekStatus />
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

<style></style>

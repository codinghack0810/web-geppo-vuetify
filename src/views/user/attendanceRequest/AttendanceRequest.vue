<script setup lang="ts">
import AttendanceContact from './components/AttendanceContact.vue';

const panel = [0, 1, 2, 3, 4, 5, 6, 7];
</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <v-expansion-panels v-model="panel" flat multiple>
        <AttendanceContact />
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

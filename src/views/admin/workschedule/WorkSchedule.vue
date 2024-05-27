<script setup lang="ts">
const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
</script>
<template>
  <v-row>
    <v-col cols="12" md="12">
      <div>{{ nowYear }}年{{ nowMonth }}月</div>
    </v-col>
  </v-row>
</template>

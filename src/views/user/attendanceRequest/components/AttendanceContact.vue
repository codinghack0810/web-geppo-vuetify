<script setup></script>
<template lang="">
  <v-expansion-panel>
    <v-expansion-panel-title>申請・連絡</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12" md="10" sm="12"> </v-col>
        <v-col cols="12" md="2" sm="12">
          <v-icon icon="mdi-help-circle" color="lightsecondary"></v-icon>
          <span class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">勤怠申請ルール</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <div>申請種別</div>
          <v-select></v-select>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style lang=""></style>

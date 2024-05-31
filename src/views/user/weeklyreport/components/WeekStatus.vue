<script setup></script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>今週の状況</v-expansion-panel-title>
    <v-expandion-panel-text>
      <v-row>
        <v-col cols="12">
          <div>週の残業時間</div>
          <v-combobox style="width: 250px" :items="['0～5時間', '0～5時間', '0～5時間']" variant="outlined"></v-combobox>
        </v-col>
      </v-row>
      <div class="py-3"></div>
      <div>現在の工程</div>
      <v-row>
        <v-col cols="12" md="2" sm="4">
          <v-btn color="">要件定義</v-btn>
        </v-col>
      </v-row>
    </v-expandion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

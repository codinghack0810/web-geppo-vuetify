<script setup></script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>お知らせ</v-expansion-panel-title>
    <v-expansion-panel-text>
      <div class="d-flex align-center gap-3 py-1">
        <v-icon icon="mdi-email" color="error"></v-icon>
        <div class="notice-date">2024/05/31</div>
        <div class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-error))' }">5月分：勤務表とWeb月報の提出のお願い</div>
      </div>
      <div class="d-flex align-center gap-3 py-1">
        <v-icon icon="mdi-email-open-outline" color="lightsecondary"></v-icon>
        <div class="notice-date">2024/05/31</div>
        <div class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">5月のお知らせタイトルサンプル文字</div>
      </div>
      <div class="d-flex align-center gap-3 py-1">
        <v-icon icon="mdi-email-open-outline" color="lightsecondary"></v-icon>
        <div class="notice-date">2024/04/30</div>
        <div class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">4月分：勤務表とWeb月報の提出のお願い</div>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

<script setup></script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>管理者へのお知らせ</v-expansion-panel-title>
    <v-expansion-panel-text>
      <p class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-error))' }">【承認依頼】休暇の未承認があります</p>
      <p class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-error))' }">客先勤務表が提出されました</p>
      <p class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">有給休暇を消化しきっていません（名字名前）</p>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

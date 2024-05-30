<script setup lang="ts"></script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>週報提出</v-expansion-panel-title>
    <v-expansion-panel-text>
      <div class="my-5" :style="{ color: 'rgb(var(--v-theme-darkText))' }">
        05/06提出<span class="ml-10" :style="{ color: 'rgb(var(--v-theme-lightText))' }">送信済み</span>
      </div>
      <div class="my-5" :style="{ color: 'rgb(var(--v-theme-darkText))' }">
        05/13提出<span class="ml-10" :style="{ color: 'rgb(var(--v-theme-lightText))' }">送信済み</span>
      </div>
      <div class="my-5" :style="{ color: 'rgb(var(--v-theme-darkText))' }">
        05/20提出<span class="ml-10" :style="{ color: 'rgb(var(--v-theme-error))' }">未提出</span>
      </div>
      <div class="my-5" :style="{ color: 'rgb(var(--v-theme-darkText))' }">
        05/DD提出<span class="ml-10" :style="{ color: 'rgb(var(--v-theme-warning))' }">ー時保存</span>
      </div>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

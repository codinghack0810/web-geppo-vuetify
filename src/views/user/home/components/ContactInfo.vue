<script setup></script>

<template>
  <v-expansion-panel>
    <v-expansion-panel-title>各種連絡先</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-list>
        <v-list-item>
          <v-list-item-subtitle class="text-caption"> 労務・事務手続き・月次報告・月報操作関連 </v-list-item-subtitle>
          <div class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">総務部：soumu@greenways.jp</div>
        </v-list-item>
        <v-list-item class="font-weight-bold">
          <v-list-item-subtitle class="text-caption"> 現場内手続き・契約 </v-list-item-subtitle>
          担当営業社員
        </v-list-item>
        <v-list-item class="font-weight-bold">
          <v-list-item-subtitle class="text-caption"> 相談全般 </v-list-item-subtitle>
          チームリーダー
        </v-list-item>
      </v-list>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

<style></style>

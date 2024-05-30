<script setup>
import ScheduledTime from './components/ScheduledTime.vue';

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const formattedMonth = String(nowMonth).padStart(2, '0');
</script>

<template>
  <v-row>
    <v-col cols="12" md="12">
      <div class="pa-2 float-left" style="border: 1px solid rgb(var(--v-theme-inputBorder)); display: inline; border-radius: 5px">
        {{ nowYear }}年 {{ formattedMonth }}月 <span class="pl-5"><v-icon icon="mdi-calendar-blank"></v-icon></span>
      </div>
      <div class="float-right d-flex align-center">
        <v-icon icon="mdi-account" color="lightsecondary" size="large"></v-icon>
        <div class="text-decoration-underline ml-2 text-h4 font-weight-medium" :style="{ color: 'rgb(var(--v-theme-primary))' }">
          名字名前
        </div>
      </div>
    </v-col>
    <v-col cols="12">
      <div class="float-left">
        <v-card color="success" rounded="0" variant="flat" class="px-3">
          <v-card-text>承認依頼中</v-card-text>
        </v-card>
      </div>
      <div class="float-right switch">
        <v-switch color="primary" label="管理者編集モード" inset></v-switch>
      </div>
    </v-col>
    <v-col cols="12">
      <v-card color="containerBg" class="message-admin" variant="flat">
        <v-card-text class="text-caption">
          <div>2024/05/31 11:10 担当者A</div>
          差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル
          勤務表に対して色々とコメントする。複数行入力の場合は 定幅で折り返して表示。
        </v-card-text>
      </v-card>
      <v-card color="containerBg" class="message-employee" variant="flat">
        <v-card-text class="text-caption">
          <div>2024/05/31 11:10 社員氏名</div>
          社員からの返信メッセージは左側へ表示
        </v-card-text>
      </v-card>
      <v-card color="containerBg" class="message-admin" variant="flat">
        <v-card-text class="text-caption">
          <div>2024/05/31 11:10 担当者B</div>
          差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル差戻し理由のサンプル
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12">
      <div class="d-flex message-box float-right">
        <textarea type="text"></textarea>
        <span class="pa-2"></span>
        <v-btn color="secondary" class="align-self-end">送信</v-btn>
      </div>
    </v-col>
    <v-divider thickness="2" :style="{ 'border-color': 'rgb(var(--v-theme-textmain))' }"></v-divider>
    <v-expansion-panels flat multiple>
      <ScheduledTime />
    </v-expansion-panels>
  </v-row>
</template>

<style scoped></style>

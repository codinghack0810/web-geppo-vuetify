<script setup lang="ts">
import { shallowRef } from 'vue';
const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const formattedMonth = String(nowMonth).padStart(2, '0');

const fileList = shallowRef([
  {
    name: '202405_緑道太郎',
    type: 'pdf'
  },
  {
    name: '2202405_サテライト_緑道太郎',
    type: 'pdf'
  }
]);
</script>
<template>
  <div class="pa-2" style="border: 1px solid rgb(var(--v-theme-inputBorder)); display: inline; border-radius: 5px">
    {{ nowYear }}年 {{ formattedMonth }}月 <span class="pl-5"><v-icon icon="mdi-calendar-blank"></v-icon></span>
  </div>
  <div class="py-3"></div>
  <v-card class="text-center" style="width: 120px" color="error" variant="flat" rounded="0">
    <v-card-text> 未提出 </v-card-text>
  </v-card>
  <div class="py-3"></div>
  <v-row>
    <v-col cols="12" md="10">
      <div class="border-md d-flex">
        <v-file-input variant="outlined" hide-details></v-file-input>
      </div>
    </v-col>
    <v-col class="upload-button" cols="12" md="2">
      <v-btn color="primary" size="large" block>
        <v-icon icon="mdi-folder-upload" color="lightprimary"></v-icon>
        アップロード
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-list>
        <template v-for="item in fileList" :key="item.name">
          <v-list-item>
            <v-icon icon="mdi-paperclip" color="lightsecondary"></v-icon>
            <span class="text-decoration-underline text-subtitle-2 px-5" :style="{ color: 'rgb(var(--v-theme-primary))' }"
              >{{ item.name }}.{{ item.type }}</span
            >
            <v-btn color="secondary" rounded="lg" size="small" icon>
              <v-icon icon="mdi-delete-forever" color="lightsecondary" size="large"></v-icon>
            </v-btn>
          </v-list-item>
        </template>
      </v-list>
    </v-col>
    <v-col cols="12">
      <p>勤務表に関する連絡事項</p>
      <v-textarea v-model="text" variant="outlined"></v-textarea>
      <div class="text-center">
        <div class="text-subtitle-2">{{ nowYear }}年 {{ nowMonth }}月分</div>
        <v-btn class="px-10" color="warning" size="large">
          <v-icon class="pr-5" color="lightwarning" icon="mdi-check-circle" size="x-large"></v-icon>
          提出
        </v-btn>
      </div>
    </v-col>
  </v-row>
</template>

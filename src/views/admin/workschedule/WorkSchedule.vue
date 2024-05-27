<script setup lang="ts">
import workScheduleItems from './components/workScheduleItems';

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const formattedMonth = String(nowMonth).padStart(2, '0');
</script>
<template>
  <div class="pa-2" style="border: 1px solid rgb(var(--v-theme-inputBorder)); display: inline; border-radius: 5px">
    {{ nowYear }}年 {{ formattedMonth }}月 <span class="pl-5"><v-icon icon="mdi-calendar-blank"></v-icon></span>
  </div>
  <div class="py-4"></div>
  <v-text-field persistent-placeholder placeholder="Ctrl + k" color="inputBorder" variant="outlined" hide-details density="compact">
    <template v-slot:prepend-inner>
      <v-icon icon="mdi-magnify"></v-icon>
    </template>
  </v-text-field>
  <v-table>
    <thead>
      <tr>
        <th class="font-weight-bold">社員名</th>
        <th class="font-weight-bold text-center">所属</th>
        <th class="font-weight-bold">自社勤務表</th>
        <th class="font-weight-bold">更新日時</th>
        <th class="font-weight-bold">客先勤務表</th>
        <th class="font-weight-bold">最新提出日時</th>
        <th class="font-weight-bold">連絡事項</th>
      </tr>
    </thead>
    <tbody>
      <tr class="work-schedule" :style="{ color: 'rgb(var(--v-theme-lightText))' }" v-for="(item, index) in workScheduleItems" :key="index">
        <td>
          <div class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">{{ item.name }}</div>
        </td>
        <td class="text-center">
          <v-btn rounded="full" color="success" icon flat v-if="item.department === 'GW'">
            {{ item.department }}
          </v-btn>
          <v-btn rounded="full" color="warning" icon flat v-if="item.department === 'WT'">
            {{ item.department }}
          </v-btn>
        </td>
        <td>
          <v-btn color="secondary" variant="flat" v-if="item.companyWorkSchedule">
            <v-icon icon="mdi-tray-arrow-down" color="lightsecondary"></v-icon>
            自社
          </v-btn>
          <v-btn color="lightsecondary" variant="flat" v-if="!item.companyWorkSchedule">
            <v-icon icon="mdi-tray-arrow-down" color="secondary"></v-icon>
            <div :style="{ color: 'rgb(var(--v-theme-surface))' }">自社</div>
          </v-btn>
        </td>
        <td>{{ item.updateDate }}</td>
        <td>
          <v-btn color="success" variant="flat" v-if="item.customerWorkSchedule">
            <v-icon icon="mdi-tray-arrow-down" color="lightsuccess"></v-icon>
            客先
          </v-btn>
          <v-btn color="lightsecondary" variant="flat" v-if="!item.customerWorkSchedule">
            <v-icon icon="mdi-tray-arrow-down" color="secondary"></v-icon>
            <div :style="{ color: 'rgb(var(--v-theme-surface))' }">客先</div>
          </v-btn>
        </td>
        <td>{{ item.latestSubmissionDate }}</td>
        <td>{{ item.notice }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

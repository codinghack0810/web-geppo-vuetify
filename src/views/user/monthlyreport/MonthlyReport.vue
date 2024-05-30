<script setup lang="ts">
import monthlyReportItems from './components/monthlyReportItems';
import { useCustomizerStore } from '@/stores/customizer';
import { router } from '@/router';

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const formattedMonth = String(nowMonth).padStart(2, '0');

const customizer = useCustomizerStore();

const openEmployee = () => {
  customizer.SET_TITLE('個人月報');
  router.push('/admin/monthlyreport/detail');
};
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
  <v-table class="monthly-report">
    <thead>
      <tr>
        <th class="font-weight-bold">社員名</th>
        <th class="text-center font-weight-bold" style="width: 50px">所属</th>
        <th class="text-center font-weight-bold">ステータス</th>
        <th class="text-center font-weight-bold">定期代</th>
        <th class="text-center font-weight-bold">交通費</th>
        <th class="text-center font-weight-bold">月報更新</th>
        <th class="text-center font-weight-bold">別窓確認</th>
        <th class="text-center font-weight-bold">自社勤務表</th>
        <th class="text-center font-weight-bold"></th>
        <th class="text-center font-weight-bold">客先勤務表</th>
        <th class="text-center font-weight-bold">承認</th>
      </tr>
    </thead>
    <tbody>
      <tr :style="{ color: 'rgb(var(--v-theme-lightText))' }" v-for="(item, index) in monthlyReportItems" :key="index">
        <td>
          <div class="text-decoration-underline text-left" :style="{ color: 'rgb(var(--v-theme-primary))' }" @click="openEmployee">
            {{ item.name }}
          </div>
        </td>
        <td>
          <v-card color="darkmain" rounded="circle" flat v-if="item.department === 'GW'">
            <v-card-text>{{ item.department }}</v-card-text>
          </v-card>
          <v-card color="accent" rounded="circle" flat v-if="item.department === 'WT'">
            <v-card-text :style="{ color: 'rgb(var(--v-theme-surface))' }">{{ item.department }}</v-card-text>
          </v-card>
        </td>
        <td>
          <v-card color="success" rounded="0" variant="flat" v-if="item.status === '承認依頼'">
            <v-card-text>{{ item.status }}</v-card-text>
          </v-card>
          <v-card color="error" rounded="0" variant="flat" v-if="item.status === '作成中'"
            ><v-card-text>{{ item.status }}</v-card-text></v-card
          >
          <v-card color="warning" rounded="0" variant="flat" v-if="item.status === '差戻し中'"
            ><v-card-text>{{ item.status }}</v-card-text></v-card
          >
          <v-card color="lightsecondary" rounded="0" variant="flat" v-if="item.status === '承認済み'"
            ><v-card-text>
              <div style="color: white">{{ item.status }}</div>
            </v-card-text>
          </v-card>
        </td>
        <td>{{ item.subscription }}</td>
        <td>{{ item.trafficCost }}</td>
        <td>{{ item.monthlyReportUpdate }}</td>
        <td>
          <v-card color="secondary" variant="flat" v-if="item.otherCheck">
            <v-card-text> <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary"></v-icon> 確認</v-card-text>
          </v-card>
        </td>
        <td>
          <v-card color="secondary" variant="flat" v-if="item.companyWorkSchedule">
            <v-card-text>
              <v-icon icon="mdi-tray-arrow-down" color="lightsecondary" class="pr-3"></v-icon>
              <span style="color: white">自社</span>
            </v-card-text>
          </v-card>
          <v-card color="secondarydisabled" variant="flat" v-if="!item.companyWorkSchedule">
            <v-card-text>
              <v-icon icon="mdi-tray-arrow-down" color="lightsecondarydisabled" class="pr-3"></v-icon>
              <span style="color: white">自社</span>
            </v-card-text>
          </v-card>
        </td>
        <td>
          <div v-if="item.companyWorkSchedule">{{ item.monthlyReportUpdate }}</div>
        </td>
        <td>
          <v-card color="success" variant="flat" v-if="item.customerWorkSchedule?.includes('true')">
            <v-card-text>
              <v-icon icon="mdi-tray-arrow-down" color="lightsuccess" class="pr-3"></v-icon>
              <span style="color: white"> 客先</span>
            </v-card-text>
          </v-card>
          <v-card color="secondarydisabled" variant="flat" v-if="item.customerWorkSchedule?.includes('false')">
            <v-card-text>
              <v-icon icon="mdi-tray-arrow-down" color="lightsecondarydisabled" class="pr-3"></v-icon>
              <span style="color: white"> 客先</span>
            </v-card-text>
          </v-card>
          <v-card color="secondary" variant="flat" v-if="item.customerWorkSchedule?.includes('done')">
            <v-card-text>
              <v-icon icon="mdi-check-circle" color="lightsecondary" class="pr-3"></v-icon>
              <span style="color: white"> 済</span>
            </v-card-text>
          </v-card>
        </td>
        <td>
          <v-card color="primary" variant="flat" v-if="item.approval">
            <v-card-text>
              <v-icon icon="mdi-check-circle" color="lightprimary"></v-icon>
              <span style="color: white"> 承認</span>
            </v-card-text>
          </v-card>
          <v-card color="secondarydisabled" variant="flat" v-if="!item.approval">
            <v-card-text>
              <v-icon icon="mdi-check-circle" color="lightsecondarydisabled"></v-icon>
              <span style="color: white"> 承認</span>
            </v-card-text>
          </v-card>
        </td>
      </tr>
    </tbody>
  </v-table>
</template>

<style></style>

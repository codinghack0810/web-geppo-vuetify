<script setup>
import VacationList from './VacationList.vue';
import { shallowRef } from 'vue';
import vacationListItem from './vacationListItem.ts';

const vacationListItems = shallowRef(vacationListItem);
</script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>休暇承認依頼</v-expansion-panel-title>
    <v-expansion-panel-text>
      <div class="d-inline-block">
        <v-btn color="primary" class="float-right" style="width: 250px">
          <v-icon icon="mdi-format-list-bulleted" color="lightprimary" size="large" class="pr-3"></v-icon>
          月報未承認分を表示
        </v-btn>
      </div>
      <v-table class="attendance-list">
        <thead class="text-h5 justify-between">
          <tr>
            <th class="font-weight-bold">社員名</th>
            <th class="font-weight-bold">休暇日時</th>
            <th class="font-weight-bold">休暇種別</th>
            <th class="font-weight-bold">備考</th>
            <th class="font-weight-bold">送信日時</th>
            <th class="font-weight-bold">却下理由</th>
            <th class="font-weight-bold">操作</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in vacationListItems" :key="index">
            <VacationList :item="item" />
          </template>
        </tbody>
      </v-table>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

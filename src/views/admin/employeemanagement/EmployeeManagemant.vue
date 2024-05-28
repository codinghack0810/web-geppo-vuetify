<script setup>
import { shallowRef } from 'vue';
import employeeList from './components/employeeList.ts';
import EmployeeListItems from './components/EmployeeListItems.vue';

const employeeItems = shallowRef(employeeList);
</script>

<template lang="">
  <v-row>
    <v-col cols="12">
      <div class="d-inline">
        <div class="float-left">
          <v-switch label="Switch" inset indeterminate></v-switch>
        </div>
      </div>
    </v-col>
    <v-col cols="12">
      <v-table class="attendance-list">
        <thead>
          <tr>
            <th class="font-weight-bold">社員名</th>
            <th class="font-weight-bold">所属</th>
            <th class="font-weight-bold">支社</th>
            <th class="font-weight-bold">部署</th>
            <th class="font-weight-bold">入社日</th>
            <th class="font-weight-bold">職種</th>
            <th class="font-weight-bold">年齢</th>
            <th class="font-weight-bold">ステータス</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, index) in employeeItems" :key="index">
            <EmployeeListItems :item="item" />
          </template>
        </tbody>
      </v-table>
    </v-col>
  </v-row>
</template>

<style lang=""></style>

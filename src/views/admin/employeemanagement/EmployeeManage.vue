<script setup>
import { shallowRef } from 'vue';
import EmployeeList from './components/EmployeeList.vue';
import employeeList from './components/employeeListItem';

const employeeListItems = shallowRef(employeeList);
</script>
<template>
    <v-row>
        <v-col cols="12">
            <v-switch :model-value="true" color="primary" class="float-left" label="退職済み社員を含める" inset></v-switch>
            <v-btn color="primary" class="float-right">
                <v-icon icon="mdi-plus-circle" size="large" color="lightprimary"></v-icon>
                ユーザー追加
            </v-btn>
        </v-col>
        <v-col cols="12" class="py-0 mt-n3">
            <v-text-field
                persistent-placeholder
                placeholder="Ctrl + k"
                color="inputBorder"
                variant="outlined"
                hide-details
                density="compact"
            >
                <template v-slot:prepend-inner>
                    <v-icon icon="mdi-magnify"></v-icon>
                </template>
            </v-text-field>
        </v-col>
        <v-col cols="12">
            <v-table class="monthly-report">
                <thead>
                    <tr>
                        <th class="font-weight-bold">社員名</th>
                        <th class="font-weight-bold text-center" style="width: 50px">所属</th>
                        <th class="font-weight-bold text-center">支社</th>
                        <th class="font-weight-bold text-center">部署</th>
                        <th class="font-weight-bold text-center">入社日</th>
                        <th class="font-weight-bold text-center">職種</th>
                        <th class="font-weight-bold text-center">年齢</th>
                        <th class="font-weight-bold text-center">ステータス</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, index) in employeeListItems" :key="index">
                        <EmployeeList :item="item" />
                    </template>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>
<style></style>

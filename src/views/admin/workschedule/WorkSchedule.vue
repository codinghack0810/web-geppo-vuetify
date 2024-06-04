<script setup>
import workScheduleItems from './components/workScheduleItems';

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const formattedMonth = String(nowMonth).padStart(2, '0');
</script>
<template>
    <div class="pa-2 borderCell" style="width: 170px">
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
                <th class="font-weight-bold">所属</th>
                <th class="font-weight-bold text-center">自社勤務表</th>
                <th class="font-weight-bold">更新日時</th>
                <th class="font-weight-bold text-center">客先勤務表</th>
                <th class="font-weight-bold">最新提出日時</th>
                <th class="font-weight-bold">連絡事項</th>
            </tr>
        </thead>
        <tbody>
            <tr class="work-schedule lightText-color" v-for="(item, index) in workScheduleItems" :key="index">
                <td>
                    <div class="text-decoration-underline primary-color">{{ item.name }}</div>
                </td>
                <td>
                    <v-card
                        rounded="circle"
                        class="text-center"
                        style="width: 44px"
                        color="darkmain"
                        icon
                        flat
                        v-if="item.department === 'GW'"
                    >
                        <v-card-text>
                            {{ item.department }}
                        </v-card-text>
                    </v-card>
                    <v-card
                        rounded="circle"
                        class="text-center"
                        style="width: 44px"
                        color="accent"
                        icon
                        flat
                        v-if="item.department === 'WT'"
                    >
                        <v-card-text class="surface-color">
                            {{ item.department }}
                        </v-card-text>
                    </v-card>
                </td>
                <td>
                    <v-card color="secondary" class="text-center" variant="flat" v-if="item.companyWorkSchedule">
                        <v-card-text>
                            <v-icon icon="mdi-tray-arrow-down" color="lightsecondary" size="large" class="pr-3"></v-icon>
                            自社
                        </v-card-text>
                    </v-card>
                    <v-card color="lightsecondary" class="text-center" variant="flat" v-if="!item.companyWorkSchedule">
                        <v-card-text class="surface-color">
                            <v-icon icon="mdi-tray-arrow-down" color="borderLight" size="large" class="pr-3"></v-icon>
                            自社
                        </v-card-text>
                    </v-card>
                </td>
                <td>{{ item.updateDate }}</td>
                <td>
                    <v-card color="success" class="text-center" variant="flat" v-if="item.customerWorkSchedule">
                        <v-card-text>
                            <v-icon icon="mdi-tray-arrow-down" color="lightsuccess" size="large" class="pr-3"></v-icon>
                            客先
                        </v-card-text>
                    </v-card>
                    <v-card color="lightsecondary" class="text-center" variant="flat" v-if="!item.customerWorkSchedule">
                        <v-card-text class="surface-color">
                            <v-icon icon="mdi-tray-arrow-down" color="borderLight" size="large" class="pr-3"></v-icon>
                            客先
                        </v-card-text>
                    </v-card>
                </td>
                <td>{{ item.latestSubmissionDate }}</td>
                <td>{{ item.notice }}</td>
            </tr>
        </tbody>
    </v-table>
</template>

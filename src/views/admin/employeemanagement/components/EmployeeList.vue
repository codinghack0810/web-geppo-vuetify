<script setup>
import { router } from '@/router';

const props = defineProps({ item: Object });

const openInfo = () => {
    router.push('/admin/employeemanagement/detail');
};
</script>
<template>
    <tr :style="{ color: 'rgb(var(--v-theme-lightText))' }">
        <td>
            <div class="text-decoration-underline text-left" :style="{ color: 'rgb(var(--v-theme-primary))' }" @click="openInfo">
                {{ item.name }}
            </div>
        </td>
        <td class="text-center">
            <v-card color="darkmain" rounded="circle" flat v-if="item.department === 'GW'">
                <v-card-text>{{ item.department }}</v-card-text>
            </v-card>
            <v-card color="accent" rounded="circle" flat v-if="item.department === 'WT'">
                <v-card-text :style="{ color: 'rgb(var(--v-theme-surface))' }">{{ item.department }}</v-card-text>
            </v-card>
        </td>
        <td class="text-center">
            <v-card color="primary" rounded="0" variant="flat" v-if="item.braunchOffice === '東京'">
                <v-card-text>{{ item.braunchOffice }}</v-card-text>
            </v-card>
            <v-card color="error" rounded="0" variant="flat" v-if="item.braunchOffice === '大阪'"
                ><v-card-text>{{ item.braunchOffice }}</v-card-text></v-card
            >
        </td>
        <td class="text-center">{{ item.section }}</td>
        <td class="text-center">{{ item.entryDate }}</td>
        <td class="text-center">{{ item.job }}</td>
        <td class="text-center">{{ item.age }}</td>
        <td class="text-center">{{ item.status }}</td>
    </tr>
</template>
<style></style>

<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
import { nowWeek } from '@/utils/date';
</script>
<template>
    <div class="d-flex justify-between">
        <div
            class="borderCell"
            style="
                width: 40px;
                text-align: center;
                color: rgb(var(--v-theme-secondary));
                background-color: rgb(var(--v-theme-lightsecondarydisabled));
            "
        >
            {{ index + 1 }}
        </div>
        <div class="borderCell" style="width: 15%">
            {{ item.date }}
            <v-icon icon="mdi-calendar-blank" class="float-right" size="small"></v-icon>
        </div>
        <div
            class="borderCell"
            style="
                width: 40px;
                text-align: center;
                color: rgb(var(--v-theme-secondary));
                background-color: rgb(var(--v-theme-lightsecondarydisabled));
            "
        >
            {{ nowWeek }}
        </div>
        <div class="borderCell" style="padding: 0; width: 10%">
            <v-combobox v-model="item.destination" :items="['客先', '自社', '自宅']" variant="outlined"></v-combobox>
        </div>
        <div class="borderCell" style="padding: 0; width: 10%">
            <v-combobox v-model="item.trafficMethod" :items="['電車', 'バス', '他']" variant="outlined"></v-combobox>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ item.from }}
        </div>
        <div class="borderCell" style="width: 10%">{{ item.to }}</div>
        <div style="text-align: center; width: 7%">
            <v-checkbox v-model="item.round" color="primary" label="往復"></v-checkbox>
        </div>
        <div class="borderCell" style="width: 8%">
            {{ item.cost }}
        </div>
        <div style="width: 22%">
            <v-btn color="secondarydisabled" class="float-right mx-1" flat>
                <v-icon icon="mdi-delete-forever" color="lightsecondarydisabled" size="large"></v-icon>
            </v-btn>
            <v-btn color="secondarydisabled" class="float-right mx-1" flat>
                <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondarydisabled" size="large"></v-icon>
                <span style="color: rgb(var(--v-theme-surface))">コピー追加</span>
            </v-btn>
        </div>
    </div>
</template>

<style></style>

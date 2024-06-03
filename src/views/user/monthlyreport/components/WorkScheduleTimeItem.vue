<template lang="">
    <div class="d-flex justify-between">
        <div class="disabledCell d-flex flex-column justify-between text-center" style="width: 40px">
            {{ index + 1 }}
            <div class="borderCell table-button w-100 pa-0 border-0">
                <v-btn color="secondary" icon rounded="lg">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever"></v-icon>
                </v-btn>
            </div>
        </div>
        <div class="borderCell" style="width: 12%">
            {{ item.date }}
            <v-icon icon="mdi-calendar-blank" class="float-right" size="small"></v-icon>
        </div>
        <div class="disabledCell text-center" style="width: 40px">
            {{ week }}
        </div>
        <div class="borderCell" style="width: 10%">
            {{ item.startTime }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ item.endTime }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ item.restTime }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div class="disabledCell" style="width: 8%">
            {{ item.workTime }}
        </div>
        <div class="borderCell" style="width: calc(42% - 120px)" v-if="item.note">
            {{ item.note }}
        </div>
        <div style="width: calc(42% - 120px); color: rgb(var(--v-theme-lightsecondary))" v-else>備考</div>
        <div class="borderCell border-0" style="width: 8%">{{ item.mark }}</div>
        <div class="table-delete-button pa-0 border-0" style="width: 80px">
            <v-btn color="secondary">
                <v-icon color="lightsecondary" icon="mdi-delete-forever" size="large"></v-icon>
                削除
            </v-btn>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
const weekDay = ['日', '月', '火', '水', '木', '金', '土'];

const date = props.item.date;
const dateObject = new Date(date);
const weekNum = dateObject.getDay();

const week = weekDay[weekNum];
</script>
<style lang=""></style>

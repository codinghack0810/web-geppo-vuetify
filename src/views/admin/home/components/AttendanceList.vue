<script setup>
const { item } = defineProps({ item: Object });
</script>

<template>
    <tr class="font-weight-medium">
        <td class="pr-10">{{ item.name }}</td>
        <td style="width: 120px">{{ item.time }}</td>
        <td style="width: 100px">
            <div class="font-weight-bold" :style="{ color: 'rgb(var(--v-theme-primary))' }" v-if="item.type === '通常休暇'">
                {{ item.type }}
            </div>
            <div class="font-weight-bold" :style="{ color: 'rgb(var(--v-theme-success))' }" v-if="item.type === '特別休暇'">
                {{ item.type }}
            </div>
            <div class="font-weight-bold" :style="{ color: 'rgb(var(--v-theme-warning))' }" v-if="item.type === '欠勤'">
                {{ item.type }}
            </div>
            <div class="font-weight-bold" :style="{ color: 'rgb(var(--v-theme-error))' }" v-if="item.type === '休日出勤'">
                {{ item.type }}
            </div>
            <div class="font-weight-bold" :style="{ color: 'rgb(var(--v-theme-darkText))' }" v-if="item.type === '遅刻'">
                {{ item.type }}
            </div>
        </td>
        <td class="px-5">{{ item.reason }}</td>
        <td class="text-right font-weight-thin" style="width: 150px" :style="{ color: 'rgb(var(--v-theme-lightText))' }">
            {{ item.date }}
        </td>
    </tr>
</template>

<style></style>

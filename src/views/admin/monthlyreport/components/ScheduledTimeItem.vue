<template lang="">
    <div class="d-flex justify-between border">
        <div
            style="
                width: 40px;
                text-align: center;
                color: rgb(var(--v-theme-secondary));
                background-color: rgb(var(--v-theme-lightsecondarydisabled));
            "
        >
            {{ index + 1 }}
        </div>
        <div style="width: 10%">
            {{ $t(props.item.startTime) }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div style="width: 10%">
            {{ $t(props.item.endTime) }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div style="width: 10%">
            {{ $t(props.item.restTime) }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div style="width: 8%; color: rgb(var(--v-theme-secondary)); background-color: rgb(var(--v-theme-lightsecondarydisabled))">
            {{ $t(props.item.workTime) }}
        </div>
        <div style="width: calc(62% - 120px)">{{ $t(props.item.note) }}</div>
        <div style="width: 80px; padding: 0; border: 0">
            <v-btn color="secondarydisabled" v-if="index === total - 1" flat>
                <v-icon color="lightsecondarydisabled" icon="mdi-delete-forever" size="large"></v-icon>
                <span style="color: rgb(var(--v-theme-surface))">削除</span>
            </v-btn>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
</script>
<style lang=""></style>

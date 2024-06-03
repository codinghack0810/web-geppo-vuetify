<template lang="">
    <div class="d-flex justify-between">
        <div class="disabledCell text-center" style="width: 40px">
            {{ index + 1 }}
        </div>
        <div class="borderCell" style="width: 10%">
            {{ $t(props.item.startTime) }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ $t(props.item.endTime) }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ $t(props.item.restTime) }}
            <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
        </div>
        <div class="disabledCell" style="width: 8%">
            {{ $t(props.item.workTime) }}
        </div>
        <div class="borderCell" style="width: calc(62% - 120px)">{{ $t(props.item.note) }}</div>
        <div class="pa-0 border-0" style="width: 80px">
            <v-btn color="secondarydisabled" v-if="index === total - 1" flat>
                <v-icon color="lightsecondarydisabled" icon="mdi-delete-forever" size="large"></v-icon>
                <span class="surface-color">削除</span>
            </v-btn>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
</script>
<style lang=""></style>

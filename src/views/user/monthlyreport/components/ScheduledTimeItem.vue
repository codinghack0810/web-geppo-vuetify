<template lang="">
    <div class="d-flex justify-space-between">
        <div class="disabledCell text-center d-flex flex-column justify-space-between" style="width: 40px">
            {{ index + 1 }}
            <div class="borderCell table-button pa-0 border-0 ma-0 w-100">
                <v-btn color="secondary" v-if="index === total - 1" icon rounded="lg">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever"></v-icon>
                </v-btn>
            </div>
        </div>
        <div class="table-content">
            <div class="table-content-width">
                <div class="table-key">開始時刻</div>
                <div class="borderCell table-value">
                    {{ $t(props.item.startTime) }}
                    <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                </div>
            </div>
            <div class="table-content-width">
                <div class="table-key">終了時刻</div>
                <div class="borderCell table-value">
                    {{ $t(props.item.endTime) }}
                    <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                </div>
            </div>
            <div class="table-content-width">
                <div class="table-key">休憩時間</div>
                <div class="borderCell table-value">
                    {{ $t(props.item.restTime) }}
                    <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                </div>
            </div>
            <div class="table-content-width">
                <div class="table-key">勤務時間</div>
                <div class="disabledCell table-value">
                    {{ $t(props.item.workTime) }}
                </div>
            </div>
            <div class="table-content-note-width">
                <div class="table-key">備考</div>
                <div class="borderCell table-note">
                    {{ $t(props.item.note) }}
                </div>
            </div>
            <div class="borderCell table-delete-button pa-0 border-0" style="width: 80px">
                <v-btn color="secondary" v-if="index === total - 1">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever" size="large"></v-icon>
                    削除
                </v-btn>
            </div>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
</script>
<style lang=""></style>

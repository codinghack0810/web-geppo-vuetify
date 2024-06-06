<template lang="">
    <div class="d-flex justify-between">
        <div class="disabledCell d-flex flex-column text-center" style="width: 40px; justify-content: space-between">
            {{ index + 1 }}
            <div class="borderCell table-button w-100 pa-0 border-0 ma-0">
                <v-btn color="secondary" icon rounded="lg">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever"></v-icon>
                </v-btn>
            </div>
        </div>
        <div class="table-content">
            <div class="table-content-workdate-width">
                <div class="worktable-key">日付</div>
                <div class="worktable-value d-flex">
                    <div class="borderCell w-100">
                        {{ item.date }}
                        <v-icon icon="mdi-calendar-blank" class="float-right" size="small"></v-icon>
                    </div>
                    <div class="disabledCell text-center" style="width: 40px">
                        {{ week }}
                    </div>
                </div>
            </div>
            <div class="time-group">
                <div class="table-content-worktime-width">
                    <div class="worktable-key">開始</div>
                    <div class="borderCell worktable-value">
                        {{ item.startTime }}
                        <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                    </div>
                </div>
                <div class="table-content-worktime-width">
                    <div class="worktable-key">終了</div>
                    <div class="borderCell worktable-value">
                        {{ item.endTime }}
                        <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                    </div>
                </div>
            </div>
            <div class="time-group">
                <div class="table-content-worktime-width">
                    <div class="worktable-key">休憩</div>
                    <div class="borderCell worktable-value">
                        {{ item.restTime }}
                        <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                    </div>
                </div>
                <div class="table-content-worktime-width">
                    <div class="worktable-key">勤務</div>
                    <div class="disabledCell worktable-value">
                        {{ item.workTime }}
                        <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                    </div>
                </div>
            </div>
            <div class="table-content-worknote-width">
                <div class="worktable-key">備考</div>
                <div class="worktable-value">
                    <div class="borderCell worktable-note">
                        <div v-if="item.note">
                            {{ item.note }}
                        </div>
                        <div style="color: rgb(var(--v-theme-lightsecondary))" v-else>備考</div>
                    </div>
                    <div class="borderCell border-0" style="width: 110px">{{ item.mark }}</div>
                </div>
            </div>
            <div class="table-delete-button pa-0 border-0" style="width: 80px">
                <v-btn color="secondary">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever" size="large"></v-icon>
                    削除
                </v-btn>
            </div>
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

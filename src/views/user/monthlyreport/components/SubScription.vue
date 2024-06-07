<script setup>
import { shallowRef } from 'vue';
import subScriptionItems from './subScriptionItems.js';
import SubScriptionItem from './SubScriptionItem.vue';

const subScriptionList = shallowRef(subScriptionItems);
</script>
<template lang="">
    <v-expansion-panel>
        <v-expansion-panel-title>定期代申請</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <v-col cols="12">
                    <v-icon icon="mdi-help-circle" color="lightsecondary"></v-icon>
                    <v-link class="text-decoration-underline primary-color">定期代の申請ルール</v-link>
                </v-col>
            </v-row>
            <div class="py-2"></div>
            <div class="d-flex justify-between table-header">
                <div class="text-center" style="width: 40px"></div>
                <div style="width: 15%">手段</div>
                <div style="width: 25%">利用区間</div>
                <div style="width: 10%">金額</div>
                <div style="width: calc(50% - 120px)">備考</div>
            </div>
            <template v-for="(item, index) in subScriptionList" :key="index">
                <SubScriptionItem :item="item" :index="index" />
            </template>
            <div class="py-2"></div>
            <div class="px-0 my-5 work-schedule-button">
                <div>
                    <v-btn color="secondary" @click="scheduledTime.push({})">
                        <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>
                        追加
                    </v-btn>
                    <v-btn color="secondary" class="ml-3">
                        <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary" size="large"></v-icon>
                        前月をコピー
                    </v-btn>
                </div>
                <div>
                    <div class="align-center pa-2">合計稼働</div>
                    <div class="pa-2 mr-3 disabledCell">16000</div>
                    <v-btn color="secondary" class="px-10 float-right mobile-hidden">
                        <v-icon icon="mdi-tray-arrow-down" color="lightsecondary" size="large"></v-icon>
                        Excel出力
                    </v-btn>
                </div>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style lang=""></style>

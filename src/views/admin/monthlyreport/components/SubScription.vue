<script setup>
import { shallowRef } from 'vue';
import subScriptionItems from './subScriptionItems';
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
            <div class="d-flex justify-between">
                <div style="width: 40px; text-align: center"></div>
                <div style="width: 15%">手段</div>
                <div style="width: 25%">利用区間</div>
                <div style="width: 10%">金額</div>
                <div style="width: calc(50% - 120px)">備考</div>
            </div>
            <template v-for="(item, index) in subScriptionList" :key="index">
                <SubScriptionItem :item="item" :index="index" />
            </template>
            <div class="py-2"></div>
            <v-btn color="secondarydisabled" flat>
                <v-icon icon="mdi-plus-circle" color="lightsecondarydisabled" size="large"></v-icon>
                <span class="surface-color"> 追加</span>
            </v-btn>
            <div class="pa-2 mr-3 float-right disabledCell">16000</div>
            <div class="float-right align-center pa-2">合計稼働</div>
            <v-btn color="secondarydisabled" class="float-right px-10" flat>
                <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondarydisabled" size="large"></v-icon>
                <span class="surface-color"> 前月をコピー</span>
            </v-btn>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style lang=""></style>

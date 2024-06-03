<template lang="">
    <v-expansion-panel>
        <v-expansion-panel-title>現場勤務表</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-list>
                <template v-for="item in fileList" :key="item.name">
                    <v-list-item>
                        <v-icon icon="mdi-paperclip" color="lightsecondary"></v-icon>
                        <span class="text-decoration-underline text-subtitle-2 px-5 primary-color">{{ item.name }}.{{ item.type }}</span>
                        <v-btn color="secondary" rounded="lg" size="small" icon>
                            <v-icon icon="mdi-delete-forever" color="lightsecondary" size="large"></v-icon>
                        </v-btn>
                    </v-list-item>
                </template>
            </v-list>
            <p>勤務表に関する連絡事項</p>
            <p style="color: rgb(var(--v-theme-darkText))">月途中で現場変更のため、勤務表が2つあります。</p>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<script setup lang="ts">
import { shallowRef } from 'vue';
import fileListItems from '../../workschedule/components/fileListItems';

const fileList = shallowRef(fileListItems);
</script>
<style lang=""></style>

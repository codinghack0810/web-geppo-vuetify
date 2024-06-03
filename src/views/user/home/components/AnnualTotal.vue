<script setup>
import { shallowRef } from 'vue';

const data = shallowRef([
    {
        section: '有給',
        children: [
            {
                key: '繰り越し',
                value: ''
            },
            {
                key: '今年度付与済み',
                value: '12日'
            },
            {
                key: '未消化',
                value: '5.5日'
            },
            {
                key: '消化済み',
                value: '8.5日'
            }
        ]
    },
    {
        section: '振休',
        children: [
            {
                key: '未消化',
                value: '1日'
            },
            {
                key: '消化済み',
                value: '2日'
            }
        ]
    },
    {
        section: '特別休暇',
        children: [
            {
                key: 'リフレッシュ',
                value: '取得済み'
            }
        ]
    },
    {
        section: '次回有給休暇',
        children: [
            {
                key: '付与日',
                value: '2025/04/01'
            },
            {
                key: '付与日数',
                value: '14日'
            }
        ]
    }
]);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>年間集計</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <!-- <template v-for="(item, index) in data" :key="index"> -->
                <v-col class="list-bottom" cols="12" md="3" v-for="(item, index) in data" :key="index">
                    <v-list-item-title class="font-weight-bold darkText-color">
                        {{ item.section }}
                    </v-list-item-title>
                    <template v-for="(subitem, subindex) in item.children" :key="subindex">
                        <v-list-item class="darkText-color list-item-bottom">
                            <div class="float-left">{{ subitem.key }}</div>
                            <div class="float-right">{{ subitem.value }}</div>
                        </v-list-item>
                    </template>
                </v-col>
                <!-- </template> -->
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style scoped></style>

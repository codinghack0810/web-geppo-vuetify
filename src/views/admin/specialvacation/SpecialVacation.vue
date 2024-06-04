<script setup>
import { shallowRef } from 'vue';
import SpecialVacationListItem from './component/SpecialVacationListItem.vue';
import specialVacationList from './component/specialVacationList';

const specialVacationListItems = shallowRef(specialVacationList);
</script>

<template>
    <v-row>
        <v-col cols="12">
            <div class="title">新規追加</div>
        </v-col>
        <v-col cols="12">
            <v-table class="special-list">
                <tbody>
                    <tr class="lightText-color">
                        <td>休暇種別名（正式名称）</td>
                        <td>休暇種別名（省略表示）</td>
                    </tr>
                    <tr>
                        <td style="width: 300px"><input type="text" class="w-100" name="" id="" value="創立記念休暇" /></td>
                        <td style="margin-left: 20px">
                            <input type="text" style="width: 300px" name="" id="" value="創立記念" />
                            <v-btn class="ml-3" color="primary" variant="flat" style="width: 200px">
                                <v-icon icon="mdi-check-circle" color="lightprimary"></v-icon>
                                保存
                            </v-btn>
                        </td>
                    </tr>
                </tbody>
            </v-table>
        </v-col>
        <v-col cols="12">
            <v-table class="special-already-list">
                <thead>
                    <tr>
                        <th class="font-weight-bold">正式名称</th>
                        <th class="font-weight-bold">省略表示</th>
                    </tr>
                </thead>
                <tbody>
                    <template v-for="(item, index) in specialVacationListItems" :key="index">
                        <SpecialVacationListItem :item="item" />
                    </template>
                </tbody>
            </v-table>
        </v-col>
    </v-row>
</template>

<style></style>

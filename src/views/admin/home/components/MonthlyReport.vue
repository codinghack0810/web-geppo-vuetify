<script setup>
import { nowMonth } from '@/utils/date';
const props = defineProps({ item: Number });
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>{{ props.item }}月月報</v-expansion-panel-title>
        <v-expansion-panel-text>
            <div>
                <span class="main-color">提出期限</span>
                <span class="ml-3 pa-3 main-color" v-if="item !== nowMonth">2024/05/07</span>
                <span class="ml-3 pa-2 main-color" v-else>
                    <input type="date" class="pa-2 mr-3 rounded-lg borderCell" name="" id="" />
                    <v-btn color="primary" variant="flat" size="large">
                        <v-icon icon="mdi-check-circle" color="lightprimary" size="x-large"></v-icon>期限保存
                    </v-btn>
                </span>
            </div>
            <div class="d-flex align-end justify-space-between" style="gap: 20px">
                <div class="d-flex align-end pr-15">
                    <div class="text-h2 font-weight-thin pb-5">2024</div>
                    <div class="month-number" v-if="item !== nowMonth">{{ item }}</div>
                    <div class="month-number" v-else>{{ item }}</div>
                </div>
                <div class="w-100">
                    <div class="d-flex flex-column gap-3 pb-5">
                        <div class="text-center number">0<span class="text-subtitle-1">人</span></div>
                        <v-btn color="lightsecondarydisabled" size="large" block flat v-if="item !== nowMonth">
                            <v-icon icon="mdi-alert" size="x-large" color="secondarydisabled"></v-icon>
                            <div class="secondary-color">作成中</div>
                        </v-btn>
                        <v-btn color="error" size="large" block flat v-else>
                            <v-icon icon="mdi-alert" size="x-large" color="lighterror"></v-icon>作成中
                        </v-btn>
                    </div>
                </div>
                <div class="w-100">
                    <div class="d-flex flex-column gap-3 pb-5">
                        <div class="text-center number">0<span class="text-subtitle-1">人</span></div>
                        <v-btn color="lightsecondarydisabled" size="large" block flat v-if="item !== nowMonth">
                            <v-icon icon="mdi-arrow-u-right-top" size="x-large" color="secondarydisabled"></v-icon>
                            <div class="secondary-color">差戻し中</div>
                        </v-btn>
                        <v-btn color="warning" size="large" block flat v-else>
                            <v-icon icon="mdi-arrow-u-right-top" size="x-large" color="lightwarning"></v-icon>差戻し中
                        </v-btn>
                    </div>
                </div>
                <div class="w-100">
                    <div class="d-flex flex-column gap-3 pb-5">
                        <div class="text-center number">0<span class="text-subtitle-1">人</span></div>
                        <v-btn color="lightsecondarydisabled" variant="outlined" size="large" rounded="0" block v-if="item !== nowMonth">
                            <v-icon icon="mdi-file-document" size="x-large" color="secondarydisabled"></v-icon>
                            <div class="secondary-color">承認待ち</div>
                        </v-btn>
                        <v-btn color="success" variant="outlined" size="large" rounded="0" block v-else>
                            <v-icon icon="mdi-file-document" size="x-large" color="lightsuccess"></v-icon>承認待ち
                        </v-btn>
                    </div>
                </div>
                <div class="w-100">
                    <div class="d-flex flex-column gap-3 pb-5">
                        <div class="text-center number">143<span class="text-subtitle-1">人</span></div>
                        <v-btn color="primary" variant="outlined" size="large" rounded="0" block>
                            <v-icon icon="mdi-check-circle" size="x-large" color="lightprimary"></v-icon>承認済み
                        </v-btn>
                    </div>
                </div>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style scoped>
.month-number {
    font-size: 150px;
}
.number {
    font-size: 50px;
}
</style>

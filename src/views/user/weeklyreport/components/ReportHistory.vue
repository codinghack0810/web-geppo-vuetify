<script setup>
const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const formattedMonth = String(nowMonth).padStart(2, '0');
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title> 提出履歴 </v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="borderCell d-sm-inline">
                {{ nowYear }}年 {{ formattedMonth }}月 <span class="pl-5"><v-icon icon="mdi-calendar-blank"></v-icon></span>
            </div>
            <v-row>
                <v-col cols="12" sm="12" md="4">
                    <div class="my-7 py-1 darkText-color">
                        05/06提出<span class="ml-10 lightText-color">送信済み</span>
                        <span class="float-right">
                            <v-btn class="px-10" color="primary">
                                <v-icon color="lightprimary" icon="mdi-playlist-edit" size="large"></v-icon>
                                参照
                            </v-btn>
                        </span>
                    </div>
                    <div class="my-7 py-1 darkText-color">
                        05/13提出<span class="ml-10 lightText-color">送信済み</span>
                        <span class="float-right">
                            <v-btn class="px-10" color="primary">
                                <v-icon color="lightprimary" icon="mdi-playlist-edit" size="large"></v-icon>
                                参照
                            </v-btn>
                        </span>
                    </div>
                    <div class="my-7 py-1 darkText-color">
                        05/20提出<span class="ml-10 error-color">未提出</span>
                        <span class="float-right">
                            <v-btn class="px-10" color="primary">
                                <v-icon color="lightprimary" icon="mdi-playlist-edit" size="large"></v-icon>
                                参照
                            </v-btn>
                        </span>
                    </div>
                    <div class="my-7 py-1 darkText-color">
                        05/DD提出<span class="ml-10 warning-color">ー時保存</span>
                        <span class="float-right">
                            <v-btn class="px-10" color="primary">
                                <v-icon color="lightprimary" icon="mdi-playlist-edit" size="large"></v-icon>
                                参照
                            </v-btn>
                        </span>
                    </div>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

<script setup>
import { shallowRef } from 'vue';
import enrollmentStatusItems from './enrollmentStatusItems.ts';

const enrollmentStatusList = shallowRef(enrollmentStatusItems);
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title> 登録情報 </v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <v-col cols="12" md="3">
                    <div>社員番号</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <div>名字</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <div>名前</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <div>ミョウジ</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <div>ナマエ</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <div>入社日</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <div>勤続</div>
                    <div class="disabled-text-field">321543216</div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <div>生年月日</div>
                    <v-text-field variant="outlined"></v-text-field>
                </v-col>
                <v-col cols="12" md="3">
                    <div>年齢</div>
                    <div class="disabled-text-field">321543216</div>
                </v-col>
            </v-row>
            <div>メールアドレス</div>
            <v-text-field width="50%" variant="outlined"></v-text-field>

            <div class="d-flex align-center my-8">
                <div class="text-h5" style="color: rgb(var(--v-theme-textmain)); width: 100px">所属情報</div>
                <v-divider color="textmain"></v-divider>
            </div>

            <v-row>
                <v-col cols="12" md="3">
                    <div>会社</div>
                    <v-combobox variant="outlined" :items="['グリーンウェイズ', 'グリーンウェイズ', 'グリーンウェイズ']"></v-combobox>
                </v-col>
                <v-col cols="12" md="3">
                    <div>支社</div>
                    <v-combobox variant="outlined" :items="['東京', '東京', '東京']"></v-combobox>
                </v-col>
                <v-col cols="12" md="3">
                    <div>部署</div>
                    <v-combobox variant="outlined" :items="['教育事業部', '教育事業部', '教育事業部']"></v-combobox>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="3">
                    <div>職種</div>
                    <v-combobox variant="outlined" :items="['エンジニア', 'エンジニア', 'エンジニア']"></v-combobox>
                </v-col>
            </v-row>

            <div class="d-flex align-center my-8">
                <div class="text-h5" style="color: rgb(var(--v-theme-textmain)); width: 100px">在籍状況</div>
                <v-divider color="textmain"></v-divider>
            </div>

            <div class="d-flex">
                <div style="width: 200px">休職開始日</div>
                <div style="width: 200px">休職終了日</div>
                <div class="text-center" style="width: 130px">自己都合</div>
                <div>備考</div>
            </div>

            <template v-for="(item, index) in enrollmentStatusList" :key="index">
                <div class="d-flex">
                    <input type="text" class="borderCell" style="width: 200px" :value="item.start" />
                    <input type="text" class="borderCell" style="width: 200px" :value="item.end" />
                    <v-checkbox v-model="item.reason" style="width: 120px" color="primary" label="自己都合"></v-checkbox>
                    <input type="text" class="borderCell" style="width: calc(50% - 120px)" :value="item.note" />
                </div>
            </template>

            <v-btn class="mt-4" color="secondary"> <v-icon icon="mdi-plus-circle" color="lightsecondary" size="large"></v-icon>追加 </v-btn>

            <div class="py-3"></div>

            <div>退職日</div>
            <input type="text" class="borderCell" />

            <div>
                <v-btn class="float-right px-10 my-5" color="primary" size="large">
                    <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                    ユーザー情報を保存
                </v-btn>
            </div>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

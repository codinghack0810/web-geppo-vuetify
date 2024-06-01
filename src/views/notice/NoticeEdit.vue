<script setup></script>
<template>
    <v-row>
        <v-col cols="12">
            <div class="page-title">お知らせ</div>
        </v-col>
    </v-row>
    <v-row>
        <v-col col="12" md="6">
            <div>タイトル</div>
            <v-text-field variant="outlined"></v-text-field>
        </v-col>
    </v-row>
    <v-row>
        <v-col col="12" md="6">
            <div>本文</div>
            <v-textarea variant="outlined"></v-textarea>
        </v-col>
    </v-row>

    <div class="py-10"></div>

    <v-row>
        <v-col cols="12" md="3">
            <v-btn color="primary" size="large" block>
                <v-icon icon="mdi-check-circle" color="lightprimary" size="x-large"></v-icon>
                保存
            </v-btn>
        </v-col>
    </v-row>

    <div class="py-10"></div>

    <v-row>
        <v-col cols="12" md="3">
            <v-btn color="error" size="large" block>
                <v-icon icon="mdi-delete-forever" color="lighterror" size="x-large"></v-icon>
                すぐに削除する
            </v-btn>
        </v-col>
    </v-row>
</template>
<style></style>

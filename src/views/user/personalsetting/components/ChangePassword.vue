<script setup></script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title>パスワード変更</v-expansion-panel-title>
        <v-expansion-panel-text class="input-password">
            <v-text-field label="現在のパスワード" variant="outlined"></v-text-field>
            <v-text-field label="新しいパスワード" variant="outlined"></v-text-field>
            <v-text-field label="確認用-新しいパスワード" variant="outlined"></v-text-field>
            <v-btn class="right-button" color="warning" size="large">
                <v-icon icon="mdi-check-circle" color="lightwarning" size="x-large"></v-icon>
                保 存
            </v-btn>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style></style>

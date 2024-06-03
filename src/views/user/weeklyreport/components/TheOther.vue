<script setup>
const rating = 3;
</script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>その他</v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="py-3"></div>
            <div>今週の充実度</div>
            <v-rating v-model="rating" class="my-2" active-color="warning" color="lightsecondary" density="compact" scale="1.5"></v-rating>
            <div class="py-1"></div>
            <div>その他の連絡事項 ※200文字まで</div>
            <v-text-field variant="outlined" placeholder="例）XX日予定休です。BBQしました。楽しいゲームがあります。"></v-text-field>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

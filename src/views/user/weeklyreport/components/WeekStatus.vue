<script setup></script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>今週の状況</v-expansion-panel-title>
        <v-expandion-panel-text>
            <div>週の残業時間</div>
            <v-row>
                <v-col cols="12">
                    <v-combobox style="width: 250px" :items="['0～5時間', '0～5時間', '0～5時間']" variant="outlined"></v-combobox>
                </v-col>
            </v-row>
            <div class="py-3"></div>
            <div>現在の工程</div>
            <v-row>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">要件定義</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block flat>基本設計</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">詳細設計</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">製造</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">単体テスト</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">結合テスト</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">総合テスト</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">運用・保守</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div class="secondary-color">その他</div></v-btn>
                </v-col>
            </v-row>
            <div class="py-3"></div>
            <div>作業環境</div>
            <v-text-field variant="outlined" placeholder="例）Windows, Mac等"></v-text-field>
            <div>言語</div>
            <v-text-field variant="outlined" placeholder="例）Java, PHP, Python, HTML/CSS, JavaScript, TypeScript, shell等"></v-text-field>
            <div>FW／ライブラリ</div>
            <v-text-field variant="outlined" placeholder="例）SpringBoot, Laravel, Django, Vuejs, React, Angular, jQuery等"></v-text-field>
            <div>サービス</div>
            <v-text-field variant="outlined" placeholder="例）AWS, GCP等"></v-text-field>
            <div>ツール</div>
            <v-text-field variant="outlined" placeholder="例）PowerPlatform, AdobeXD, Figma, IntelliJ, Eclipse, VSCode等"></v-text-field>
        </v-expandion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

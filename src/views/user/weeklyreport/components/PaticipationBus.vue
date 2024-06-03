<script setup></script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title> 参画業務 </v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <v-col cols="12" sm="12" md="2">
                    <div>担当営業</div>
                    <v-combobox :items="['営業太郎', '営業太郎', '営業太郎']" variant="outlined"></v-combobox>
                </v-col>
            </v-row>
            <div class="py-3"></div>
            <div>担当職務</div>
            <v-row>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block>開発</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div style="color: rgb(var(--v-theme-secondary))">テスト</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div style="color: rgb(var(--v-theme-secondary))">保守</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div style="color: rgb(var(--v-theme-secondary))">PMO</div></v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat>
                        <div style="color: rgb(var(--v-theme-secondary))">ヘルプデスク</div></v-btn
                    >
                </v-col>
            </v-row>
            <div class="py-3"></div>
            <div>担当工程</div>
            <v-row>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block>要件定義</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block>要件定義</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block flat>詳細設計</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block flat>製造</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block>単体テスト</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block>単体テスト</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block flat>単体テスト</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="primary" block flat>運用・保守</v-btn>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat>
                        <div style="color: rgb(var(--v-theme-secondary))">ヘルプデスク</div></v-btn
                    >
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <v-btn color="lightsecondarydisabled" block flat> <div style="color: rgb(var(--v-theme-secondary))">その他</div></v-btn>
                </v-col>
            </v-row>
            <div class="py-3"></div>
            <v-row>
                <v-col cols="12" md="2" sm="4">
                    <div>開始定時</div>
                    <div class="borderCell" style="width: 100%">
                        09:00 <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                    </div>
                </v-col>
                <v-col cols="12" md="2" sm="4">
                    <div>終了定時</div>
                    <div class="borderCell" style="width: 100%">
                        18:00 <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
                    </div>
                </v-col>
            </v-row>
            <div class="py-3">
                <div>自社メンバー</div>
                <v-text-field placeholder="" variant="outlined">Aさん、Bさん、Cさん</v-text-field>
            </div>
            <v-row>
                <v-col cols="12" md="2" sm="6">
                    <div>現場最寄り駅</div>
                    <v-text-field placeholder="" variant="outlined"></v-text-field>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

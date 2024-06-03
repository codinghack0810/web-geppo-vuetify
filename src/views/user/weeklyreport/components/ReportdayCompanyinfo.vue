<script setup></script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title> 報告日・自社情報 </v-expansion-panel-title>
        <v-expansion-panel-text>
            <div class="content">
                <div>対象提出日<v-chip color="error" variant="outlined" size="small">必須</v-chip></div>
                <div>提出期限：毎週月曜9:30まで。</div>
                <div>月曜日が自社営業日でない場合は翌営業日9:30</div>
            </div>
            <v-row>
                <v-col cols="12" sm="12" md="4" class="d-flex">
                    <div class="borderCell w-50">
                        2024/05/13
                        <v-icon icon="mdi-calendar-blank" class="float-right"></v-icon>
                    </div>
                    <v-btn color="secondary" class="w-50 mx-1 align-self-center" size="large" rounded="lg">
                        <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary" size="large"></v-icon>
                        次の提出日
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="12" sm="12">
                    <div>職種<v-chip color="error" variant="outlined" size="small">必須</v-chip></div>
                </v-col>
                <v-col cols="12" md="6" sm="12">
                    <v-row>
                        <v-col cols="12" md="4" sm="4">
                            <v-btn color="primary" block>エンジニア</v-btn>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-btn color="lightsecondarydisabled" flat block>
                                <div sclass="secondary-color">営業</div>
                            </v-btn>
                        </v-col>
                        <v-col cols="12" md="4" sm="4">
                            <v-btn color="lightsecondarydisabled" flat block>
                                <div class="secondary-color">総務</div>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
            <div class="d-flex align-center py-5">
                <div class="text-h5 textmain-color w-100">自社所属</div>
                <v-divider thickness="2" color="main" class="my-5"></v-divider>
            </div>
            <v-row>
                <v-col cols="12" md="3" sm="6">
                    <div>支社</div>
                    <v-combobox :items="['東京', '東京', '東京']" variant="outlined"></v-combobox>
                </v-col>
                <v-col cols="12" md="3" sm="6">
                    <div>チームリーダー</div>
                    <v-combobox :items="['理居田太郎', '理居田太郎', '理居田太郎']" variant="outlined"></v-combobox>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

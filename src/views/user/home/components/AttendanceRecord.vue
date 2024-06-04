<script setup></script>
<template>
    <v-expansion-panel>
        <v-expansion-panel-title>出退勤記録</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-row>
                <v-col cols="12"> 現在日時の出退勤を社内勤務表に登録します。 </v-col>
                <v-col cols="12" md="3">
                    <v-switch :model-value="true" color="primary" label="リモートワーク" inset></v-switch>
                </v-col>
                <v-col cols="12" md="3">
                    <v-row>
                        <v-col cols="6">
                            <v-btn color="primary" variant="flat" size="large" block>
                                <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                                出勤
                            </v-btn>
                        </v-col>
                        <v-col cols="6">
                            <v-btn color="primary" variant="flat" size="large" block>
                                <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                                退勤
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>
<style></style>

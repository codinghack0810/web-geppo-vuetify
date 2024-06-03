<script setup></script>

<template>
    <v-expansion-panel>
        <v-expansion-panel-title>週報配信設定</v-expansion-panel-title>
        <v-expansion-panel-text>
            <v-combobox
                class="darkText-color"
                style="width: 200px"
                :items="['2013年入社', '2014年入社', '2015年入社', '2016年入社']"
                variant="outlined"
            ></v-combobox>
            <div class="py-1"></div>
            <v-card style="height: 200px" variant="outlined">
                <v-card-text>
                    <div class="flex-row-column">
                        <div>
                            <v-checkbox color="primary" label="月報太郎"></v-checkbox>
                        </div>
                        <div>
                            <v-checkbox color="primary" label="月報花子"></v-checkbox>
                        </div>
                        <div>
                            <v-checkbox color="primary" label="月報長太郎"></v-checkbox>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
            <div class="flex-row-column py-5">
                <v-checkbox color="primary" label="全ページ"></v-checkbox>
                <v-btn style="width: 150px" color="secondary">ALL ON</v-btn>
                <v-btn style="width: 150px" color="secondary">ALL OFF</v-btn>
            </div>
            <v-btn class="right-button" color="warning" size="large">
                <v-icon icon="mdi-check-circle" color="lightwarning" size="x-large"></v-icon>
                保 存
            </v-btn>
        </v-expansion-panel-text>
    </v-expansion-panel>
</template>

<style></style>

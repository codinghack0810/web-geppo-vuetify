<script setup lang="ts">
const nowDate = new Date();
const nowMonth = nowDate.getMonth() + 1;
const lastMonth = nowDate.getMonth();
const nowYear = nowDate.getFullYear();
// const formattedDate = nowDate.toLocaleDateString('en-US', {
//   year: 'numeric',
//   month: '2-digit',
//   day: '2-digit'
// });
</script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>勤務表・月報提出</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12" md="6">
          <v-col cols="12">
            <div class="text-center">
              <span class="font-weight-thin" style="font-size: 50px">{{ nowYear }}</span>
              <span class="font-weight-thin" style="font-size: 200px">{{ lastMonth }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="12">
            <v-row>
              <v-col cols="6" class="text-center">
                <v-card color="lightsecondarydisabled" variant="flat" rounded="lg">
                  <v-card-text>
                    <div class="text-h3" :style="{ color: 'rgb(var(--v-theme-secondary))' }">勤務表</div>
                    <div class="text-h5" :style="{ color: 'rgb(var(--v-theme-secondary))' }">
                      <v-icon icon="mdi-check-circle" color="secondarydisabled" size="large"></v-icon> 提出済み
                    </div>
                  </v-card-text>
                </v-card>
                <div class="my-3">提出期限 入手後すぐ</div>
              </v-col>
              <v-col cols="6" class="text-center">
                <v-card color="lightsecondarydisabled" variant="flat" rounded="lg">
                  <v-card-text>
                    <div class="text-h3" :style="{ color: 'rgb(var(--v-theme-secondary))' }">月報</div>
                    <div class="text-h5" :style="{ color: 'rgb(var(--v-theme-secondary))' }">
                      <v-icon icon="mdi-check-circle" color="secondarydisabled" size="large"></v-icon> 承認済み
                    </div>
                  </v-card-text>
                </v-card>
                <div class="my-3">提出期限 05/07</div>
              </v-col>
            </v-row>
          </v-col>
        </v-col>

        <v-col cols="12" md="6">
          <v-col cols="12">
            <div class="text-center">
              <span class="font-weight-thin" style="font-size: 50px">{{ nowYear }}</span>
              <span class="font-weight-thin" style="font-size: 200px">{{ nowMonth }}</span>
            </div>
          </v-col>
          <v-col cols="12" md="12">
            <v-row>
              <v-col cols="6" class="text-center">
                <v-card color="warning" variant="flat" rounded="lg">
                  <v-card-text>
                    <div class="text-h3">勤務表</div>
                    <div class="text-h5">未提出</div>
                  </v-card-text>
                </v-card>
                <div class="my-3">提出期限 入手後すぐ</div>
              </v-col>
              <v-col cols="6" class="text-center">
                <v-card color="warning" variant="flat" rounded="lg">
                  <v-card-text>
                    <div class="text-h3">月報</div>
                    <div class="text-h5">未提出</div>
                  </v-card-text>
                </v-card>
                <div class="my-3">提出期限 06/07</div>
              </v-col>
            </v-row>
          </v-col>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>

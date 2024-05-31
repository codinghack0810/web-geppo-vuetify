<script setup>
const nowDate = new Date();
const year = nowDate.getFullYear();
const month = nowDate.getMonth() + 1;
const formattedMonth = String(month).padStart(2, '0');
const weekNum = nowDate.getDay();
const weekDay = ['日', '月', '火', '水', '木', '金', '土'];
const day = nowDate.getDate();
</script>
<template lang="">
  <v-expansion-panel>
    <v-expansion-panel-title>申請・連絡</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-row>
        <v-col cols="12" md="10" sm="12"> </v-col>
        <v-col cols="12" md="2" sm="12">
          <v-icon icon="mdi-help-circle" color="lightsecondary"></v-icon>
          <span class="text-decoration-underline" :style="{ color: 'rgb(var(--v-theme-primary))' }">勤怠申請ルール</span>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <div>申請種別</div>
          <v-combobox :items="['特別休暇', '自社', '自宅']" variant="outlined"></v-combobox>
        </v-col>
        <v-col cols="12" sm="12" md="3">
          <div>詳細種別</div>
          <v-combobox :items="['プレミアムチケット', '自社', '自宅']" variant="outlined"></v-combobox>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" sm="12" md="4">
          <div>日付</div>
          <div class="d-flex">
            <input type="date" class="borderCell" v-model="date" />
            <div
              class="borderCell"
              style="
                width: 40px;
                text-align: center;
                color: rgb(var(--v-theme-secondary));
                background-color: rgb(var(--v-theme-lightsecondarydisabled));
              "
            >
              {{ weekDay[weekNum] }}
            </div>
            <v-btn color="secondary" class="mx-1 align-self-center">
              <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary"></v-icon>
              本日
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="2" sm="4" xs="4">
          <div>開始時刻</div>
          <div class="borderCell">15:00 <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon></div>
        </v-col>
        <v-col cols="12" md="4" sm="4" xs="4">
          <div>終了時刻</div>
          <div class="d-flex">
            <div class="borderCell w-50">18:00 <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon></div>
            <v-btn color="secondary" class="mx-1 align-self-center">
              <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary"></v-icon>
              定時コピー
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="6" sm="12">
          <div>
            添付
            <v-icon icon="mdi-help-circle" color="lightsecondary"></v-icon>
          </div>
          <v-file-input v-model="file" variant="outlined"></v-file-input>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12" sm="12">
          <div>備考</div>
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <v-text-field v-model="text" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-btn class="float-right" color="primary">
                <v-icon icon="mdi-check-circle" color="lightprimary" size="large"></v-icon>
                勤怠申請・連絡を送信
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style lang=""></style>

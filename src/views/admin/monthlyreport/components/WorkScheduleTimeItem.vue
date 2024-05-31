<template lang="">
  <div class="d-flex justify-between border">
    <div style="width: 12%">
      {{ item.date }}
      <v-icon icon="mdi-calendar-blank" class="float-right" size="small"></v-icon>
    </div>
    <div
      style="
        width: 40px;
        text-align: center;
        color: rgb(var(--v-theme-secondary));
        background-color: rgb(var(--v-theme-lightsecondarydisabled));
      "
    >
      {{ week }}
    </div>
    <div style="width: 10%">
      {{ item.startTime }}
      <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
    </div>
    <div style="width: 10%">
      {{ item.endTime }}
      <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
    </div>
    <div style="width: 10%">
      {{ item.restTime }}
      <v-icon icon="mdi-clock-outline" class="float-right" size="small"></v-icon>
    </div>
    <div style="width: 8%; color: rgb(var(--v-theme-secondary)); background-color: rgb(var(--v-theme-lightsecondarydisabled))">
      {{ item.workTime }}
    </div>
    <div style="width: calc(42% - 120px)" v-if="item.note">
      {{ item.note }}
    </div>
    <div style="width: calc(42% - 120px); color: rgb(var(--v-theme-lightsecondary))" v-else>備考</div>
    <div style="width: 8%; border: 0">{{ item.mark }}</div>
    <div style="width: 80px; padding: 0; border: 0">
      <v-btn color="secondary">
        <v-icon color="lightsecondary" icon="mdi-delete-forever" size="large"></v-icon>
        削除
      </v-btn>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
const weekDay = ['日', '月', '火', '水', '木', '金', '土'];

const date = props.item.date;
const dateObject = new Date(date);
const weekNum = dateObject.getDay();

const week = weekDay[weekNum];
</script>
<style lang=""></style>

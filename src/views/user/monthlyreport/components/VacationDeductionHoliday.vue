<script setup lang="ts">
import { shallowRef } from 'vue';
import attendanceItems from '../../home/components/attendanceItem';
import AttendanceList from '../../home/components/AttendanceList.vue';

const attendanceListItems = shallowRef(attendanceItems);
</script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>休暇・控除・休日出勤</v-expansion-panel-title>
    <v-expansion-panel-text>
      <v-card variant="outlined" rounded="lg">
        <v-card-text>
          <v-table class="attendance-list">
            <tbody>
              <template v-for="(item, index) in attendanceListItems" :key="index">
                <AttendanceList :item="item" />
              </template>
            </tbody>
          </v-table>
        </v-card-text>
      </v-card>
      <v-row>
        <v-col>
          <v-btn class="float-right px-10 my-2" color="primary">
            <v-icon icon="mdi-format-list-bulleted" color="lightprimary" size="large"></v-icon>
            勤怠申請追加・変更
          </v-btn>
        </v-col>
      </v-row>
      <v-table class="vacation-list">
        <tr>
          <th>有休残日数（前年）</th>
          <td>4</td>
        </tr>

        <tr>
          <th>有給残日数（今年）</th>
          <td>12</td>
        </tr>

        <tr>
          <th>今月有給消化数</th>
          <td class="text-h4">2.5</td>
        </tr>

        <tr>
          <th>残有給日数</th>
          <td class="text-h4">9.5</td>
        </tr>

        <tr>
          <th>振替休日消化日数</th>
          <td>1</td>
        </tr>

        <tr>
          <th>欠勤控除</th>
          <td>0.5</td>
        </tr>

        <tr>
          <th>未消化振休</th>
          <td>2024/01/01（1日）, 2024/01/02（1日）</td>
        </tr>

        <tr>
          <th>次回有給付与日</th>
          <td>2025/04/01（14日）</td>
        </tr>
      </v-table>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

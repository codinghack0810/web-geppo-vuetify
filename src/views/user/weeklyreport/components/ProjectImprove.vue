<script setup></script>
<template>
  <v-expansion-panel>
    <v-expansion-panel-title>課題改善（KPT+作業報告）</v-expansion-panel-title>
    <v-expandion-panel-text>
      <v-chip color="error" variant="outlined">1つ以上の入力必須</v-chip>
      <div class="py-3"></div>
      <div>良かった点（Keep）※200文字まで</div>
      <v-text-field variant="outlined" placeholder="例）チームメンバーと積極的にコミュニケーションをとれた（先週の改善点）"></v-text-field>
      <div>悪かった点（Problem）※200文字まで</div>
      <v-text-field variant="outlined" placeholder="例）報告内容に誤字脱字が多かった"></v-text-field>
      <div>改善点（Try）※200文字まで</div>
      <v-text-field variant="outlined" placeholder="例）報告前に内容を見直す癖をつける"></v-text-field>
    </v-expandion-panel-text>
  </v-expansion-panel>
</template>
<style></style>

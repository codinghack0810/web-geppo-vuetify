<template lang="">
  <tr>
    <td style="width: 45px">
      <v-text-field variant="outlined" :value="index + 1"></v-text-field>
    </td>
    <td>
      <v-text-field variant="outlined" :value="item.startTime"></v-text-field>
    </td>
    <td>
      <v-textarea variant="outlined" :value="item.endTime"></v-textarea>
    </td>
    <td>
      <v-text-field variant="outlined" :value="item.restTime"></v-text-field>
    </td>
    <td>
      <v-text-field variant="outlined" :value="item.workTime"></v-text-field>
    </td>
    <td class="d-flex ma-0">
      <v-text-field variant="outlined" :value="item.note"></v-text-field>
      <v-btn color="secondarydisabled" variant="flat">
        <v-icon icon="mdi-delete-forever" color="lightsecondarydisabled" size="large"></v-icon>
        <div :style="{ color: 'rgb(var(--v-theme-surface))' }">削除</div>
      </v-btn>
    </td>
  </tr>
</template>
<script setup>
const props = defineProps({ item: Object, index: Number });
</script>
<style lang=""></style>

<template lang="">
  <tr>
    <td>
      <!-- <v-text-field variant="outlined" :value="index + 1"></v-text-field> -->
      <input type="text" class="text-center" style="width: 30px" name="" id="" :value="index + 1" />
    </td>
    <td>
      <!-- <v-text-field variant="outlined" :value="item.startTime"></v-text-field> -->
      <input type="text" style="width: 98%" name="" id="" :value="item.startTime" />
    </td>
    <td>
      <!-- <v-textarea variant="outlined" :value="item.endTime"></v-textarea> -->
      <input type="text" style="width: 98%" name="" id="" :value="item.endTime" />
    </td>
    <td>
      <!-- <v-text-field variant="outlined" :value="item.restTime"></v-text-field> -->
      <input type="text" style="width: 98%" name="" id="" :value="item.restTime" />
    </td>
    <td>
      <!-- <v-text-field variant="outlined" :value="item.workTime"></v-text-field> -->
      <input type="text" style="width: 98%" name="" id="" :value="item.workTime" />
    </td>
    <td>
      <!-- <v-text-field variant="outlined" :value="item.note"></v-text-field> -->
      <input type="text" name="" id="" :value="item.note" />
      <span class="px-3">
        <v-btn color="secondarydisabled" variant="flat">
          <v-icon icon="mdi-delete-forever" color="lightsecondarydisabled" size="large"></v-icon>
          <div :style="{ color: 'rgb(var(--v-theme-surface))' }">削除</div>
        </v-btn>
      </span>
    </td>
  </tr>
</template>
<script setup>
const props = defineProps({ item: Object, index: Number });
</script>
<style lang=""></style>

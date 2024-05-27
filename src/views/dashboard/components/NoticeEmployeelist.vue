<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <v-list-item>
    <div>
      <span>{{ item.date }}</span>
      <span class="px-5"></span>
      <span>{{ item.title }}</span>
    </div>
    <div>
      <v-btn color="secondary" variant="flat"> <v-icon icon="mdi-delete-forever" size="large" color="lightsecondary"></v-icon>削除</v-btn>
      <span class="px-1"></span>
      <v-btn color="primary" variant="flat"> <v-icon icon="mdi-pencil" size="large" color="lightprimary"></v-icon>編集</v-btn>
    </div>
  </v-list-item>
</template>

<style></style>

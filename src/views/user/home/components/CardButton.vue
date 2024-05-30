<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <v-col cols="12" sm="6" lg="3" class="cardButton">
    <v-btn class="text-h5" color="lightprimary" stacked block>
      <v-icon color="surface" style="transform: scale(3)">{{ item.icon }}</v-icon>
      <div class="mt-10" :style="{ color: 'rgb(var(--v-theme-surface))' }">{{ item.title }}</div>
    </v-btn>
  </v-col>
</template>

<style></style>

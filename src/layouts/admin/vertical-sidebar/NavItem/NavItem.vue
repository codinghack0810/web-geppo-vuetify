<script setup>
const props = defineProps({ item: Object, level: Number });
</script>

<template>
  <!---Single Item-->
  <v-list-item
    :to="item.type === 'external' ? '' : item.to"
    :href="item.type === 'external' ? item.to : ''"
    rounded
    class="py-5"
    color="main"
    :disabled="item.disabled"
    :target="item.type === 'external' ? '_blank' : ''"
  >
    <!---If icon-->
    <template v-slot:prepend>
      <!-- <component :is="props.item.icon" class="iconClass" :level="props.level"></component> -->
      <v-icon :icon="props.item.icon" class="iconClass" :level="props.level"></v-icon>
    </template>
    <v-list-item-title class="font-weight-medium">{{ $t(item.title) }}</v-list-item-title>
    <!---If Caption-->
    <v-list-item-subtitle v-if="item.subCaption" class="text-caption mt-n1 hide-menu">
      {{ item.subCaption }}
    </v-list-item-subtitle>
    <!-- -If any chip or label -->
    <template v-slot:append>
      <v-icon icon="mdi-chevron-right" class="iconClass" :level="props.level"></v-icon>
    </template>
  </v-list-item>
</template>

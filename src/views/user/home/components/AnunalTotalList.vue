<script setup>
const props = defineProps({ item: Object });
</script>

<template>
  <td>{{ $t(props.item.key) }}</td>
  <td>{{ $t(props.item.value) }}</td>
</template>

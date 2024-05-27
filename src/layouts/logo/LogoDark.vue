<template>
  <div class="logo">
    <!-- <RouterLink to="/dashboard" aria-label="logo"> -->
    <div class="text-h4 text-decoration-none" :style="{ color: darkmain }">Web Geppo</div>
    <!-- </RouterLink> -->
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
// import { RouterLink } from 'vue-router';
const darkmain = ref('rgb(var(--v-theme-darkmain))');
// const darkprimary = ref('rgb(var(--v-theme-darkprimary))');
</script>

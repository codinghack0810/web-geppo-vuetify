<script setup lang="ts">
import { ref } from 'vue';
const darkmain = ref('rgb(var(--v-theme-darkmain))');
</script>
<template>
  <v-footer class="px-0 pt-2">
    <v-row justify="center" no-gutters>
      <v-col cols="12" md="6" class="text-md-left text-center">
        <p class="text-h5 mb-md-0 mb-4 text-center" :style="{ color: darkmain }">
          Web Geppo
          <a href="/" class="text-lightText">&copy; 2024 greenways inc.</a>
        </p>
      </v-col>
    </v-row>
  </v-footer>
</template>

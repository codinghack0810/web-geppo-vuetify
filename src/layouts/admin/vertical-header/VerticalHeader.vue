<script setup lang="ts">
import { useCustomizerStore } from '../../../stores/customizer';
import NotificationDD from './NotificationDD.vue';

const customizer = useCustomizerStore();
</script>

<template>
    <v-app-bar elevation="0" height="100" class="border-0">
        <v-btn
            class="text-secondary mr-3"
            color="darkText"
            icon
            rounded="sm"
            variant="text"
            @click.stop="customizer.SET_MINI_SIDEBAR(!customizer.mini_sidebar)"
            size="small"
        >
            <v-icon class="text-h2">mdi-menu</v-icon>
        </v-btn>

        <v-spacer />
        <v-app-bar-title v-model="customizer.title" class="text-h3 font-weight-medium app-title">{{ customizer.title }}</v-app-bar-title>
        <NotificationDD />
    </v-app-bar>
</template>

<style scoped>
.app-title {
    color: rgb(var(--v-theme-textmain));
}
</style>

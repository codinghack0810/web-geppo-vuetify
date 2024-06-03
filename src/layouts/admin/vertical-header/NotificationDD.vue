<script setup lang="ts">
import { router } from '@/router';
import { useCustomizerStore } from '@/stores/customizer';

const customizer = useCustomizerStore();

const openNotice = () => {
    customizer.SET_TITLE('お知らせ');
    router.push('/admin/notice');
};
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- notifications DD -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" offset="6, 0">
        <template v-slot:activator="{ props }">
            <v-btn class="text-secondary ml-sm-2 ml-1" icon color="error" rounded="sm" size="large" v-bind="props" @click="openNotice">
                <v-icon>mdi-bell-badge</v-icon>
            </v-btn>
            <div class="pr-3 notice-text">お知らせあり</div>
        </template>
    </v-menu>
</template>

<style lang="scss" scoped>
.v-tooltip {
    > .v-overlay__content.custom-tooltip {
        padding: 2px 6px;
    }
}
.notice-text {
    color: rgb(var(--v-theme-error));
}
</style>

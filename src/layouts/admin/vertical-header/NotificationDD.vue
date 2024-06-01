<script setup lang="ts">
// import { ref } from 'vue';
// icons
// import { CheckCircleOutlined, GiftOutlined, MessageOutlined, SettingOutlined, BellOutlined } from '@ant-design/icons-vue';
import { router } from '@/router';
import { useCustomizerStore } from '@/stores/customizer';

const customizer = useCustomizerStore();

// const isActive = ref(true);

// function deactivateItem() {
//     isActive.value = false;
// }

const openNotice = () => {
    customizer.SET_TITLE('お知らせ');
    router.push('/notice');
};
</script>

<template>
    <!-- ---------------------------------------------- -->
    <!-- notifications DD -->
    <!-- ---------------------------------------------- -->
    <v-menu :close-on-content-click="false" offset="6, 0">
        <template v-slot:activator="{ props }">
            <v-btn class="text-secondary ml-sm-2 ml-1" icon color="error" rounded="sm" size="large" v-bind="props" @click="openNotice">
                <!-- <v-badge :content="isActive ? '2' : '0'" color="error" offset-x="-4" offset-y="-5">
          <BellOutlined :style="{ fontSize: '16px' }" />
        </v-badge> -->
                <v-icon>mdi-bell-badge</v-icon>
            </v-btn>
            <div class="pr-3" :style="{ color: 'rgb(var(--v-theme-error))' }">お知らせあり</div>
        </template>
    </v-menu>
</template>

<style lang="scss">
.v-tooltip {
    > .v-overlay__content.custom-tooltip {
        padding: 2px 6px;
    }
}
</style>

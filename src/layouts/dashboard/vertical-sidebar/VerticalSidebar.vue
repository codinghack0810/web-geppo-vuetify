<script setup lang="ts">
import { shallowRef } from 'vue';
import { useCustomizerStore } from '../../../stores/customizer';
import sidebarItems from './sidebarItem';

// import NavGroup from './NavGroup/NavGroup.vue';
import NavItem from './NavItem/NavItem.vue';
// import NavCollapse from './NavCollapse/NavCollapse.vue';
// import ExtraBox from './extrabox/ExtraBox.vue';
import Logo from '../logo/LogoDark.vue';

const customizer = useCustomizerStore();
console.log(customizer.title);
const sidebarMenu = shallowRef(sidebarItems);
</script>

<template>
  <v-navigation-drawer left v-model="customizer.mini_sidebar" elevation="0" rail-width="60" mobile-breakpoint="lg" app class="leftSidebar">
    <div class="pa-5 text-center">
      <Logo />
    </div>
    <div class="pa-5" :style="{ backgroundColor: 'rgb(var(--v-theme-main)' }">
      <div class="text-white font-weight-bold">管理者</div>
      <div class="py-1"></div>
      <div class="text-h4 text-white font-weight-regular">名字名前</div>
    </div>
    <!-- ---------------------------------------------- -->
    <!---Navigation -->
    <!-- ---------------------------------------------- -->
    <perfect-scrollbar class="scrollnavbar">
      <v-list aria-busy="true" aria-label="menu list">
        <!---Menu Loop -->
        <template v-for="(item, i) in sidebarMenu" :key="i">
          <!---Item Sub Header -->
          <!-- <NavGroup :item="item" v-if="item.header" :key="item.title" /> -->
          <!---Item Divider -->
          <!-- <v-divider class="my-3" v-else-if="item.divider" /> -->
          <!---If Has Child -->
          <NavCollapse class="leftPadding" :item="item" :level="0" v-if="item.children" />
          <!---Single Item-->
          <NavItem :item="item" v-if="item.title != 'ログアウト'" @click.stop="customizer.SET_TITLE(item.title)" />
          <NavItem :item="item" v-else @click.stop="customizer.SET_TITLE('HOME')" />
          <!---End Single Item-->
        </template>
      </v-list>
      <!-- <div class="pa-4">
        <ExtraBox />
      </div> -->
    </perfect-scrollbar>
  </v-navigation-drawer>
</template>

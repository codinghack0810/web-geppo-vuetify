<template>
  <!-- <v-layout> -->
  <v-navigation-drawer v-model="drawer">
    <v-list style="text-align: center; padding: 30px 0">
      <v-text style="color: #6e906d">Web Geppo </v-text>
    </v-list>
    <v-list style="background-color: #6e906d;">
      <v-text style="color: white">管理者</v-text>
      <v-text style="color: white">名字名前</v-text>
    </v-list>
    <v-list>
      <v-list-item v-for="(item, index) in items" :key="index">
        <div style="display: flex; align-items: center;">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </div>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-card-text class="mx-10">
      <v-bar class="d-flex justify-space-between align-center">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
        </v-app-bar-nav-icon>
        <v-text class="text-h5"> HOME </v-text>
        <v-text style="color: #b71c1c">
          <v-btn icon="mdi-bell-badge" variant="text" color="redDarken"></v-btn>
          お知らせおり
        </v-text>
      </v-bar>
    </v-card-text>
  </v-main>
  <!-- </v-layout> -->
</template>

<script>
export default {
  data: () => ({
    drawer: true,
    items: [
      { title: "Home", icon: "mdi-home-variant", to: "/home" },
      { title: "勤務表", icon: "mdi-file-document-outline", to: "/schedule" },
      { title: "月報管理", icon: "mdi-calendar-month", to: "/monthly" },
      { title: "勤怠一覧", icon: "mdi-check-outline", to: "/attendance" },
      { title: "社員管理", icon: "mdi-account-multiple", to: "/employee" },
      { title: "特別休暇管理", icon: "mdi-file-document-edit-outline", to: "/special_holiday" },
      { title: "ログアウト", icon: "mdi-logout", to: "/logout" },
    ],
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped></style>

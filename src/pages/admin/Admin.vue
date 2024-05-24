<template>
  <v-layout>
    <v-navigation-drawer v-model="drawer" permanent fixed>
      <v-list>
        <v-list-item style="text-align: center; margin: 10px">
          <v-text style="color: #6e906d; font-weight: bold">Web Geppo </v-text>
        </v-list-item>
        <v-list-item style="background-color: #6e906d; color: white">
          <p>管理者</p>
          <p>名字名前</p>
        </v-list-item>
        <v-list-item
          prepend-icon="mdi-home-variant"
          title="Home"
          value="home"
          to="/admin/home"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-file-document-outline"
          title="勤務表"
          value="schedule"
          to="/admin/schedule"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-calendar-month"
          title="月報管理"
          value="monthly"
          to="/admin/monthly"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-check-outline"
          title="勤怠一覧"
          value="attendance"
          to="/admin/attendance"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account-multiple"
          title="社員管理"
          value="employee"
          to="/admin/employee"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-file-document-edit-outline"
          title="特別休暇管理"
          value="special_holiday"
          to="/admin/special_holiday"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-logout"
          title="ログアウト"
          value="logout"
          to="/logout"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-card-text class="mx-10">
        <v-bar class="d-flex justify-space-between align-center">
          <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer">
          </v-app-bar-nav-icon>
          <v-text class="text-h6"> HOME </v-text>
          <v-text style="color: #b71c1c">
            <v-btn
              icon="mdi-bell-badge"
              variant="text"
              color="redDarken"
            ></v-btn>
            お知らせおり
          </v-text>
        </v-bar>

        <router-view></router-view>

      </v-card-text>
    </v-main>

    <v-footer name="footer" app>
      <v-text>Web Geppo &copy; 2024 greenways inc.</v-text>
    </v-footer>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    drawer: true,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
};
</script>

<style scoped>
.v-list-item {
  padding: 15px !important;
}
</style>

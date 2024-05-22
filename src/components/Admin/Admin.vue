<template>
  <!-- <v-layout class="rounded, rounded-md"> -->
    <v-navigation-drawer>
      <v-list>
        <v-list-item to="/Home">
          <v-list-item-title>Home</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Home">
          <v-list-item-title>勤務表</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Home">
          <v-list-item-title>月報管理</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Home">
          <v-list-item-title>勤怠一覧</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Home">
          <v-list-item-title>社員管理</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Home">
          <v-list-item-title>特別休暇管理</v-list-item-title>
        </v-list-item>
        <v-list-item to="/Home">
          <v-list-item-title>ログアウト</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      Main Content
    </v-main>
  <!-- </v-layout> -->
</template>

<script>
export default {
  name: "Admin",
};
</script>

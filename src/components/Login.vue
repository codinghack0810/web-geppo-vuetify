<template>
  <div class="container">
    <h4 class="text-center" style="color: #33691e">Web Geppo</h4>

    <div class="py-6"></div>

    <p class="text-center text-h5 font-weight-bold">ログイン</p>

    <div class="py-4"></div>

    <v-text-field
      variant="outlined"
      placeholder="メールアドレス"
      prepend-inner-icon="mdi-email"
      class="my-n3"
    ></v-text-field>
    <v-text-field
      variant="outlined"
      placeholder="パスワード"
      prepend-inner-icon="mdi-lock"
    ></v-text-field>
    <div class="py-2"></div>
    <v-btn
      to="/admin"
      block
      variant="elevated"
      color="greenDarken"
      class="py-6 text-subtitle-1 font-weight-bold"
      >ログイン</v-btn
    >

    <div class="py-8"></div>

    <p class="py-2 text-center text-h6 font-weight-bold">
      パスワードを忘れた場合はこちら
    </p>
    <v-text-field
      variant="outlined"
      placeholder="新しいパスワード"
      prepend-inner-icon="mdi-lock"
    ></v-text-field>
    <v-text-field
      variant="outlined"
      placeholder="新しいパスワード (確認用)"
      prepend-inner-icon="mdi-lock"
      class="my-n3"
    ></v-text-field>
    <div class="py-2"></div>
    <v-btn
      to="/lavor"
      block
      variant="elevated"
      color="greenDarken"
      class="py-6 text-subtitle-1 font-weight-bold"
      >パスワードを変更してログイン</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped>
.container {
  width: 10%;
  min-width: 350px;
  margin: auto;
  margin-top: 5%;
}

.v-input__icon--prepend-inner {
  background-color: red;
}
</style>

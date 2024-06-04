<script setup>
import { ref } from 'vue';
// icons
// import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons-vue';
import { useAuthStore } from '../../../stores/auth';
import { Form } from 'vee-validate';

// const checkbox = ref(false);
const valid = ref(false);
const show1 = ref(false);
const password = ref('admin123');
const password2 = ref('admin123');
const username = ref('info@codedthemes.com');
const passwordRules = ref([
    (v) => !!v || 'Password is required',
    (v) => (v && v.length <= 10) || 'Password must be less than 10 characters'
]);
const emailRules = ref([(v) => !!v || 'E-mail is required', (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid']);

/* eslint-disable @typescript-eslint/no-explicit-any */
function validate(values, { setErrors }) {
    const authStore = useAuthStore();
    return authStore.login(username.value, password.value).catch((error) => setErrors({ apiError: error }));
}
</script>

<template>
    <!-- <div class="d-flex justify-space-between align-center">
    <h3 class="text-h3 text-center mb-0">Login</h3>
    <router-link to="/auth/register" class="text-primary text-decoration-none">Don't Have an account?</router-link>
  </div> -->
    <Form @submit="validate" class="loginForm" v-slot="{ errors, isSubmitting }">
        <div class="text-h4 text-center lightText-color">ログイン</div>
        <div class="py-4"></div>
        <div class="mb-6">
            <v-text-field
                aria-label="email address"
                v-model="username"
                :rules="emailRules"
                class="mt-2"
                required
                hide-details="auto"
                variant="outlined"
                color="inputBorder"
                placeholder="メールアドレス"
                prepend-inner-icon="mdi-email"
            ></v-text-field>
        </div>
        <div>
            <v-text-field
                aria-label="password"
                v-model="password"
                :rules="passwordRules"
                required
                variant="outlined"
                color="inputBorder"
                hide-details="auto"
                :type="show1 ? 'text' : 'password'"
                class="pwdInput mt-2"
                placeholder="パスワード"
                prepend-inner-icon="mdi-lock"
            >
            </v-text-field>
        </div>

        <v-btn
            color="darkmain"
            :loading="isSubmitting"
            block
            class="mt-5 font-weight-bold"
            variant="elevated"
            size="large"
            :disabled="valid"
            type="submit"
        >
            ログイン</v-btn
        >
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
    </Form>

    <div class="py-3"></div>

    <Form @submit="validate" class="mt-7 loginForm" v-slot="{ errors, isSubmitting }">
        <div class="text-h5 text-center lightText-color">パスワードを忘れた場合はこちら</div>
        <!-- <div class="py-1"></div> -->
        <div class="mb-6">
            <v-text-field
                aria-label="password"
                v-model="password"
                :rules="passwordRules"
                required
                variant="outlined"
                color="inputBorder"
                hide-details="auto"
                :type="show1 ? 'text' : 'password'"
                class="pwdInput mt-2"
                placeholder="新しいパスワード"
                prepend-inner-icon="mdi-lock"
            >
            </v-text-field>
        </div>
        <div>
            <v-text-field
                aria-label="password"
                v-model="password2"
                :rules="passwordRules"
                required
                variant="outlined"
                color="inputBorder"
                hide-details="auto"
                :type="show1 ? 'text' : 'password'"
                class="pwdInput mt-2"
                placeholder="新しいパスワード（確認用）"
                prepend-inner-icon="mdi-lock"
            >
            </v-text-field>
        </div>

        <v-btn
            color="darkmain"
            :loading="isSubmitting"
            block
            class="mt-5 font-weight-bold"
            variant="elevated"
            size="large"
            :disabled="valid"
            type="submit"
        >
            パスワードを変更してログイン
        </v-btn>
        <div v-if="errors.apiError" class="mt-2">
            <v-alert color="error">{{ errors.apiError }}</v-alert>
        </div>
    </Form>
</template>
<style lang="scss">
.loginForm {
    .v-text-field .v-field--active input {
        font-weight: 500;
    }
}
</style>

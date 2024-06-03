<script setup lang="ts">
const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
</script>
<template>
    <v-footer class="px-0 pb-10 footer">
        <v-row justify="center" align="center" no-gutters>
            <v-col cols="6">
                <p class="text-h5 mb-0 ligthText-color">Web Geppo &copy; 2024 greenways inc.</p>
            </v-col>
            <v-col class="text-right" cols="6">
                <v-btn icon color="main" rounded="md" @click="scrollTop">
                    <v-icon icon="mdi-chevron-up" size="x-large"></v-icon>
                </v-btn>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style scoped></style>

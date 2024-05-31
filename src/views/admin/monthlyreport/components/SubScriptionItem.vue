<script setup>
import { ref } from 'vue';
const props = defineProps({ item: Object, index: Number });

const method = ref(props.item.method);
</script>
<template>
    <div class="d-flex justify-between">
        <div
            class="borderCell"
            style="
                width: 40px;
                text-align: center;
                color: rgb(var(--v-theme-secondary));
                background-color: rgb(var(--v-theme-lightsecondarydisabled));
            "
        >
            {{ index + 1 }}
        </div>
        <div class="radioCell" style="width: 15%">
            <v-radio-group v-model="method" inline>
                <v-radio color="primary" label="電車" :value="'電車'"></v-radio>
                <v-radio color="primary" label="バス" :value="'バス'"></v-radio>
            </v-radio-group>
        </div>
        <div class="d-flex align-center" style="width: 25%">
            <div class="borderCell w-50">
                {{ item.from }}
            </div>
            ~
            <div class="borderCell w-50">{{ item.to }}</div>
        </div>
        <div class="borderCell" style="width: 10%">
            {{ item.cost }}
        </div>
        <div class="borderCell" style="width: calc(50% - 120px)">
            <div style="color: rgb(var(--v-theme-secondarydisabled))" v-if="!item.note">備考</div>
            <div v-else>{{ item.note }}</div>
        </div>
        <div>
            <v-btn color="secondary" class="float-right" style="width: 80px" flat>
                <v-icon icon="mdi-delete-forever" color="lightsecondary" size="large"></v-icon>
                削除
            </v-btn>
        </div>
    </div>
</template>

<style></style>

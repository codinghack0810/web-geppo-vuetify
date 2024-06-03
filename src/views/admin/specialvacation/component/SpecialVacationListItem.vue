<script setup>
const props = defineProps({ item: Object });
</script>
<template>
    <tr>
        <td class="pa-0" style="width: 300px">
            <input type="text" name="" id="" :value="item.formalName" />
        </td>
        <td style="width: 500px">
            <div class="d-flex">
                <input type="text" name="" id="" :value="item.abbr" />
                <span class="ml-5">
                    <v-btn color="secondary" variant="flat">
                        <v-icon icon="mdi-delete-forever" size="large" color="lightsecondary"></v-icon>
                        削除
                    </v-btn>
                </span>
                <span class="ml-5">
                    <v-btn color="primary" variant="flat">
                        <v-icon icon="mdi-check-circle" size="large" color="lightprimary"></v-icon>
                        更新
                    </v-btn>
                </span>
            </div>
        </td>
        <td></td>
    </tr>
</template>

<style></style>

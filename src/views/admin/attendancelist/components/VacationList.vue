<script setup>
const { item } = defineProps({ item: Object });
</script>
<template>
    <tr>
        <td>{{ item.name }}</td>
        <td>{{ item.vacationDate }}</td>
        <td>{{ item.type }}</td>
        <td>{{ item.notes }}</td>
        <td>{{ item.sendingDate }}</td>
        <td>
            <!-- <input type="text" name="" id="" v-model="reason" /> -->
            <input type="text" name="" id="" :value="item.reason" />
        </td>
        <td>
            <v-btn color="secondary" variant="flat" v-if="item.reason">却下</v-btn>
            <v-btn color="secondarydisabled" variant="flat" v-else><div class="surface-color">却下</div></v-btn>
            <span class="px-2"></span>
            <v-btn color="primary" variant="flat">承認</v-btn>
        </td>
    </tr>
</template>
<style></style>

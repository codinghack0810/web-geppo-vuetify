<script setup>
const props = defineProps({ item: Object });
</script>

<template>
    <tr>
        <td>{{ $t(props.item.date) }}</td>
        <td>
            <div class="font-weight-bold primary-color" v-if="item.type === '通常休暇'">
                {{ $t(props.item.type) }}
            </div>
            <div class="font-weight-bold success-color" v-if="item.type.includes('特別休暇')">
                {{ $t(props.item.type) }}
            </div>
            <div class="font-weight-bold warning-color" v-if="item.type === '欠勤'">
                {{ $t(props.item.type) }}
            </div>
            <div class="font-weight-bold error-color" v-if="item.type === '休日出勤'">
                {{ $t(props.item.type) }}
            </div>
            <div class="font-weight-bold darkText-color" v-if="item.type === '遅刻'">
                {{ $t(props.item.type) }}
            </div>
        </td>
        <td class="px-5">{{ $t(props.item.reason) }}</td>
        <td class="font-weight-thin lightText-color">
            {{ $t(props.item.sendDate) }}
        </td>
        <td>
            <div class="my-1">
                <v-btn color="primary" variant="flat" rounded="lg" v-if="item.type === '遅刻'" block>
                    <v-icon icon="mdi-attachment mdi-rotate-270" color="lightprimary" size="large"></v-icon>
                    添付
                </v-btn>
            </div>
        </td>
        <td>
            <div class="font-weight-bold success-color" v-if="item.status === '承認'">
                {{ $t(props.item.status) }}
            </div>
            <div class="font-weight-bold warning-color" v-if="item.status === '未承認'">
                {{ $t(props.item.status) }}
            </div>
            <div class="font-weight-bold error-color" v-if="item.status === '却下'">
                {{ $t(props.item.status) }}
            </div>
        </td>
    </tr>
</template>

<style></style>

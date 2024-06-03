<script setup>
const props = defineProps({ item: Object, index: Number });

const index = props.index + 1;
</script>

<template>
    <v-list-item class="list-item-bottom">
        <div class="d-flex flex-row justify-between mobile-mode">
            <div class="mobile-show num-panel">{{ index }}</div>
            <div class="main-content">
                <div class="main-content-date">{{ $t(props.item.date) }}</div>
                <div class="main-content-type">
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
                </div>
                <div class="overflow main-content-reason">{{ $t(props.item.reason) }}</div>
                <div class="mobile-hidden font-weight-thin main-content-senddate lightText-color">
                    {{ $t(props.item.sendDate) }}
                </div>
            </div>
            <div class="button-panel">
                <div>
                    <div class="my-1 d-flex">
                        <v-btn class="mobile-hidden mr-1" color="secondary" variant="flat" rounded="lg" icon>
                            <v-icon icon="mdi-delete-forever" color="lightsecondary"></v-icon>
                        </v-btn>

                        <v-btn class="mobile-hidden" color="primary" variant="flat" rounded="lg" style="height: 42px">
                            <v-icon icon="mdi-pencil" color="lightprimary" size="large"></v-icon>
                            修正
                        </v-btn>
                        <v-btn class="mobile-show float-right mb-1" color="primary" variant="flat" rounded="lg" block>
                            <v-icon icon="mdi-pencil" color="lightprimary"></v-icon>
                            修正
                        </v-btn>
                    </div>
                    <div class="my-1">
                        <v-btn
                            class="mobile-hidden float-right"
                            color="primary"
                            variant="flat"
                            rounded="lg"
                            v-if="item.type === '遅刻'"
                            block
                        >
                            <v-icon icon="mdi-attachment mdi-rotate-270" color="lightprimary" size="large"></v-icon>
                            添付
                        </v-btn>
                        <v-btn
                            class="mobile-show float-right"
                            color="warning"
                            variant="flat"
                            rounded="lg"
                            v-if="item.type === '遅刻'"
                            block
                        >
                            <v-icon icon="mdi-attachment mdi-rotate-270" color="lightwarning"></v-icon>
                            未
                        </v-btn>
                    </div>
                </div>
            </div>
            <div class="mobile-hidden main-status">
                <div class="font-weight-bold success-color" v-if="item.status === '承認'">
                    {{ $t(props.item.status) }}
                </div>
                <div class="font-weight-bold warning-color" v-if="item.status === '未承認'">
                    {{ $t(props.item.status) }}
                </div>
                <div class="font-weight-bold error-color" v-if="item.status === '却下'">
                    {{ $t(props.item.status) }}
                </div>
            </div>
        </div>
    </v-list-item>
</template>

<style></style>

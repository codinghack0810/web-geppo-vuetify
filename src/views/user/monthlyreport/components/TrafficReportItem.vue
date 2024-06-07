<script setup>
const props = defineProps({ item: Object, total: Number, index: Number });
const weekDay = ['日', '月', '火', '水', '木', '金', '土'];

const date = props.item.date;
const dateObject = new Date(date);
const weekNum = dateObject.getDay();

const week = weekDay[weekNum];
</script>
<template>
    <div class="d-flex justify-space-between">
        <div class="disabledCell d-flex flex-column text-center justify-space-between" style="width: 40px">
            {{ index + 1 }}
            <div class="borderCell table-button w-100 pa-0 border-0 ma-0">
                <v-btn color="secondary" icon rounded="lg">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever"></v-icon>
                </v-btn>
            </div>
        </div>
        <div class="table-content">
            <div class="traffictable-date-content">
                <div class="traffictable-key">日付</div>
                <div class="traffictable-value">
                    <div class="borderCell w-100">
                        {{ item.date }}
                        <v-icon icon="mdi-calendar-blank" class="float-right" size="small"></v-icon>
                    </div>
                    <div class="disabledCell text-center" style="width: 40px">
                        {{ week }}
                    </div>
                </div>
            </div>

            <div class="traffictable-combobox-group">
                <div class="d-flex align-center w-50">
                    <div class="traffictable-key">行先</div>
                    <div class="traffictable-combobox-value">
                        <div class="borderCell pa-0">
                            <v-combobox v-model="item.destination" :items="['客先', '自社', '自宅']" variant="outlined"></v-combobox>
                        </div>
                    </div>
                </div>
                <div class="d-flex align-center w-50">
                    <div class="traffictable-key">手段</div>
                    <div class="traffictable-combobox-value">
                        <div class="borderCell pa-0">
                            <v-combobox v-model="item.trafficMethod" :items="['電車', 'バス', '他']" variant="outlined"></v-combobox>
                        </div>
                    </div>
                </div>
            </div>
            <div class="subtable-place-group">
                <div class="subtable-key">区間</div>
                <div class="subtable-value">
                    <div class="d-flex align-center">
                        <div class="borderCell w-50">
                            {{ item.from }}
                        </div>
                        <div class="mobile-hidden">~</div>
                        <div class="borderCell w-50">{{ item.to }}</div>
                    </div>
                </div>
            </div>
            <div class="traffictable-cost-group">
                <div class="d-flex w-50 align-center">
                    <div class="traffictable-key">金額</div>
                    <div class="traffictable-cost-value">
                        <div class="borderCell w-100">
                            {{ item.cost }}
                        </div>
                    </div>
                </div>
                <div class="d-flex w-50">
                    <div class="text-center">
                        <v-checkbox v-model="item.round" color="primary" label="往復"></v-checkbox>
                    </div>
                </div>
            </div>
            <div calss="traffictable-button-group">
                <v-btn color="secondary" class="float-right ma-1 mobile-show" flat>
                    <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary" size="large"></v-icon>
                    コピー追加
                </v-btn>
                <v-btn class="float-right ma-1 mobile-show" color="warning" v-if="item.round"
                    ><v-icon icon="mdi-paperclip" color="lightwarning" size="large"></v-icon>未</v-btn
                >
                <v-btn class="float-right ma-1 mobile-show" color="primary" v-else
                    ><v-icon icon="mdi-paperclip" color="lightprimary" size="large"></v-icon>済</v-btn
                >
            </div>
            <div class="table-delete-button pa-0 border-0" style="width: 22%">
                <v-btn color="secondary" class="float-right mx-1" flat>
                    <v-icon icon="mdi-delete-forever" color="lightsecondary" size="large"></v-icon>
                </v-btn>
                <v-btn color="secondary" class="float-right mx-1" flat>
                    <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary" size="large"></v-icon>
                    コピー追加
                </v-btn>
            </div>
        </div>
    </div>
</template>

<style></style>

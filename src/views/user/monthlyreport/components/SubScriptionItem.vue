<script setup>
import { ref } from 'vue';
const props = defineProps({ item: Object, index: Number });

const method = ref(props.item.method);
</script>
<template>
    <div class="d-flex justify-between">
        <div class="disabledCell text-center d-flex flex-column justify-space-between" style="width: 40px">
            {{ index + 1 }}
            <div class="borderCell table-button pa-0 border-0 ma-0 w-100">
                <v-btn color="secondary" icon rounded="lg">
                    <v-icon color="lightsecondary" icon="mdi-delete-forever"></v-icon>
                </v-btn>
            </div>
        </div>
        <div class="table-content">
            <div class="subtable-radio-group">
                <div class="subtable-key">手段</div>
                <div class="subtable-value d-flex">
                    <div class="radioCell ma-auto">
                        <v-radio-group v-model="method" inline>
                            <v-radio color="primary" label="電車" :value="'電車'"></v-radio>
                            <v-radio color="primary" label="バス" :value="'バス'"></v-radio>
                        </v-radio-group>
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
            <div class="table-content-width">
                <div class="subtable-key">金額</div>
                <div class="subtable-value">
                    <div class="borderCell">
                        {{ item.cost }}
                    </div>
                </div>
            </div>
            <div class="subtable-content-note-width">
                <div class="subtable-key">備考</div>
                <div class="subtable-value">
                    <div class="borderCell">
                        <div class="secondarydisabled-color" v-if="!item.note">備考</div>
                        <div v-else>{{ item.note }}</div>
                    </div>
                </div>
            </div>
            <div class="d-flex">
                <v-btn class="mobile-show my-1" color="primary" rounded="lg" block v-if="item.method === '電車'">
                    <v-icon icon="mdi-paperclip" color="lightprimary" size="large"></v-icon>
                    領収書添付済み
                </v-btn>
                <v-btn class="mobile-show my-1" color="warning" rounded="lg" block v-else>
                    <v-icon icon="mdi-paperclip" color="lightwarning" size="large"></v-icon>
                    領収書添付済み
                </v-btn>
            </div>
            <div class="table-delete-button">
                <v-btn color="secondary" class="float-right" style="width: 80px" flat>
                    <v-icon icon="mdi-delete-forever" color="lightsecondary" size="large"></v-icon>
                    削除
                </v-btn>
            </div>
        </div>
    </div>
</template>

<style></style>

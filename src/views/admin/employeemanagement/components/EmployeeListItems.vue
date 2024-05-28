<template lang="">
  <tr>
    <td>
      <div class="text-decoration-underline text-left" :style="{ color: 'rgb(var(--v-theme-primary))' }">
        {{ item.name }}
      </div>
    </td>
    <td>
      <v-card color="success" rounded="circle" flat v-if="item.department === 'GW'">
        <v-card-text>{{ item.department }}</v-card-text>
      </v-card>
      <v-card color="warning" rounded="circle" flat v-if="item.department === 'WT'">
        <v-card-text>{{ item.department }}</v-card-text>
      </v-card>
    </td>
    <td>
      <v-card color="success" rounded="0" variant="flat" v-if="item.status === '承認依頼'">
        <v-card-text>{{ item.status }}</v-card-text>
      </v-card>
      <v-card color="error" rounded="0" variant="flat" v-if="item.status === '作成中'"
        ><v-card-text>{{ item.status }}</v-card-text></v-card
      >
      <v-card color="warning" rounded="0" variant="flat" v-if="item.status === '差戻し中'"
        ><v-card-text>{{ item.status }}</v-card-text></v-card
      >
      <v-card color="lightsecondary" rounded="0" variant="flat" v-if="item.status === '承認済み'"
        ><v-card-text>
          <div style="color: white">{{ item.status }}</div>
        </v-card-text>
      </v-card>
    </td>
    <td>{{ item.subscription }}</td>
    <td>{{ item.trafficCost }}</td>
    <td>{{ item.monthlyReportUpdate }}</td>
    <td>
      <v-card color="secondary" variant="flat" v-if="item.otherCheck">
        <v-card-text> <v-icon icon="mdi-checkbox-multiple-blank-outline" color="lightsecondary"></v-icon> 確認</v-card-text>
      </v-card>
    </td>
    <td>
      <v-card color="secondary" variant="flat" v-if="item.companyWorkSchedule">
        <v-card-text>
          <v-icon icon="mdi-tray-arrow-down" color="lightsecondary" class="pr-3"></v-icon>
          <span style="color: white">自社</span>
        </v-card-text>
      </v-card>
      <v-card color="secondarydisabled" variant="flat" v-if="!item.companyWorkSchedule">
        <v-card-text>
          <v-icon icon="mdi-tray-arrow-down" color="lightsecondarydisabled" class="pr-3"></v-icon>
          <span style="color: white">自社</span>
        </v-card-text>
      </v-card>
    </td>
    <td>
      <div v-if="item.companyWorkSchedule">{{ item.monthlyReportUpdate }}</div>
    </td>
    <td>
      <v-card color="success" variant="flat" v-if="item.customerWorkSchedule?.includes('true')">
        <v-card-text>
          <v-icon icon="mdi-tray-arrow-down" color="lightsuccess" class="pr-3"></v-icon>
          <span style="color: white"> 客先</span>
        </v-card-text>
      </v-card>
      <v-card color="secondarydisabled" variant="flat" v-if="item.customerWorkSchedule?.includes('false')">
        <v-card-text>
          <v-icon icon="mdi-tray-arrow-down" color="lightsecondarydisabled" class="pr-3"></v-icon>
          <span style="color: white"> 客先</span>
        </v-card-text>
      </v-card>
      <v-card color="secondary" variant="flat" v-if="item.customerWorkSchedule?.includes('done')">
        <v-card-text>
          <v-icon icon="mdi-check-circle" color="lightsecondary" class="pr-3"></v-icon>
          <span style="color: white"> 済</span>
        </v-card-text>
      </v-card>
    </td>
    <td>
      <v-card color="primary" variant="flat" v-if="item.approval">
        <v-card-text>
          <v-icon icon="mdi-check-circle" color="lightprimary"></v-icon>
          <span style="color: white"> 承認</span>
        </v-card-text>
      </v-card>
      <v-card color="secondarydisabled" variant="flat" v-if="!item.approval">
        <v-card-text>
          <v-icon icon="mdi-check-circle" color="lightsecondarydisabled"></v-icon>
          <span style="color: white"> 承認</span>
        </v-card-text>
      </v-card>
    </td>
  </tr>
</template>
<script>
const props = defineProps({ item: Object });
</script>
<style lang=""></style>

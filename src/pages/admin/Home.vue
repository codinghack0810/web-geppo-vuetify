<template>
  <v-container class="full-height">
    <v-expansion-panels flat multiple>
      <v-expansion-panel>
        <v-expansion-panel-title>
          <p class="panel-title text-h5">管理者へのお知らせ</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <p
            class="panel-text text-decoration-underline"
            style="color: #ff0000"
          >
            【承認依頼】休暇の未承認があります
          </p>
          <p
            class="panel-text text-decoration-underline"
            style="color: #ff0000"
          >
            客先勤務表が提出されました
          </p>
          <p
            class="panel-text text-decoration-underline"
            style="color: #0000ff"
          >
            有給休暇を消化しきっていません（名字名前）
          </p>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="greenText"
      ></v-divider>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <p class="panel-title text-h5">社員へのお知らせ</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <v-btn color="blueDarken" rounded="lg" width="25%" variant="elevated"
            ><v-icon
              icon="mdi-plus-circle"
              size="x-large"
              color="blueLighten"
              start
            ></v-icon
            >お知らせを追加</v-btn
          >

          <div class="py-2"></div>

          <v-list class="border-b-md border-dotted pb-0">
            <v-list-item
              v-for="item in desserts"
              :key="item.date"
              class="border-t-md border-dotted"
            >
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                "
              >
                <div style="display: flex; column-gap: 30px">
                  <p>{{ item.date }}</p>
                  <p>{{ item.content }}</p>
                </div>
                <div style="display: flex; column-gap: 10px">
                  <v-btn color="greyDarken" rounded="lg" variant="flat"
                    ><v-icon
                      icon="mdi-delete-forever"
                      size="x-large"
                      color="greyLighten"
                    ></v-icon
                    >削除</v-btn
                  >

                  <v-btn color="blueDarken" rounded="lg" variant="flat"
                    ><v-icon
                      icon="mdi-pencil"
                      size="x-large"
                      color="blueLighten"
                    ></v-icon
                    >編集</v-btn
                  >
                </div>
              </div>
            </v-list-item>
          </v-list>
          <div class="py-2"></div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="greenText"
        padding="10px"
      ></v-divider>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <p class="panel-title text-h5">4月月報</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div style="display: flex; column-gap: 10px">
            <p class="panel-title text-subtitle-2">提出期限</p>
            <p class="panel-title text-subtitle-2">2024/05/07</p>
          </div>

          <div
            style="
              color: #b3b3b3;
              display: flex;
              justify-content: space-between;
            "
          >
            <div style="display: flex; align-items: end; column-gap: 15px">
              <p class="text-h6 font-weight-thin">2024</p>
              <p class="text-h1">4</p>
            </div>

            <div style="display: flex; column-gap: 15px">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  0<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="redDarken"
                    rounded="lg"
                    variant="elevated"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-alert"
                      size="x-large"
                      color="redLighten"
                    ></v-icon
                    >作成中</v-btn
                  >
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  0<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="yellowDarken"
                    rounded="lg"
                    variant="elevated"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-arrow-u-right-top"
                      size="x-large"
                      color="yellowLighten"
                    ></v-icon
                    >差戻し中</v-btn
                  >
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  0<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="greenDarken"
                    rounded="0"
                    variant="outlined"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-file-document"
                      size="x-large"
                      color="greenLighten"
                    ></v-icon
                    >承認待ち</v-btn
                  >
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  143<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="blueDarken"
                    rounded="0"
                    variant="outlined"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-check-circle"
                      size="x-large"
                      color="blueLighten"
                    ></v-icon
                    >承認済み</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="greenText"
        padding="10px"
      ></v-divider>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <p class="panel-title text-h5">5月月報</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div style="display: flex; column-gap: 10px; align-items: center">
            <p class="panel-title text-subtitle-2">提出期限</p>
            <v-date-input label="Date input" variant="outlined"></v-date-input>
            <v-btn color="blueDarken" rounded="lg" variant="elevated"
              ><v-icon
                icon="mdi-check-circle"
                size="x-large"
                color="blueLighten"
              ></v-icon
              >期限保存</v-btn
            >
          </div>

          <div
            style="
              color: #b3b3b3;
              display: flex;
              justify-content: space-between;
            "
          >
            <div style="display: flex; align-items: end; column-gap: 15px">
              <p class="text-h6 font-weight-thin">2024</p>
              <p class="text-h1">5</p>
            </div>

            <div style="display: flex; column-gap: 15px">
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  0<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="redDarken"
                    rounded="lg"
                    variant="elevated"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-alert"
                      size="x-large"
                      color="redLighten"
                    ></v-icon
                    >作成中</v-btn
                  >
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  0<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="yellowDarken"
                    rounded="lg"
                    variant="elevated"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-arrow-u-right-top"
                      size="x-large"
                      color="yellowLighten"
                    ></v-icon
                    >差戻し中</v-btn
                  >
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  0<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="greenDarken"
                    rounded="0"
                    variant="outlined"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-file-document"
                      size="x-large"
                      color="greenLighten"
                    ></v-icon
                    >承認待ち</v-btn
                  >
                </div>
              </div>
              <div
                style="
                  display: flex;
                  flex-direction: column;
                  width: 200px;
                  row-gap: 10px;
                "
              >
                <div class="text-center text-h4">
                  143<span class="text-subtitle-1">人</span>
                </div>
                <div>
                  <v-btn
                    color="blueDarken"
                    rounded="0"
                    variant="outlined"
                    width="100%"
                    size="large"
                    ><v-icon
                      icon="mdi-check-circle"
                      size="x-large"
                      color="blueLighten"
                    ></v-icon
                    >承認済み</v-btn
                  >
                </div>
              </div>
            </div>
          </div>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="greenText"
        padding="10px"
      ></v-divider>

      <v-expansion-panel>
        <v-expansion-panel-title>
          <p class="panel-title text-h5">勤怠状況</p>
        </v-expansion-panel-title>
        <v-expansion-panel-text>
          <div class="text-center text-h3 report">
            5<span class="text-h5">月</span>31<span class="text-h5">日</span
            ><span class="text-h5">（金）</span>
          </div>
          <v-table class="border-sm rounded-lg px-7">
            <tbody>
              <tr v-for="(item, index) in attendanceStatus" :key="index">
                <td>{{ item.name }}</td>
                <td>{{ item.time }}</td>
                <td :class="typeClass">{{ item.type }}</td>
                <td>{{ item.reason }}</td>
                <td>{{ item.date }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-expansion-panel-text>
      </v-expansion-panel>

      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="greenText"
        padding="10px"
      ></v-divider>
    </v-expansion-panels>
  </v-container>
</template>

<script lang="ts">
export default {
  data() {
    return {
      desserts: [
        {
          date: "2024/05/31",
          content: "5月分：勤務表とWeb月報の提出のお願い",
        },
        {
          date: "2024/05/01",
          content: "5月のお知らせタイトルサンプル文字",
        },
        {
          date: "2024/04/30",
          content: "4月分：勤務表とWeb月報の提出のお願い ",
        },
        {
          date: "2024/04/01",
          content: "4月のお知らせタイトルサンプル文字 ",
        },
        {
          date: "2024/04/01",
          content: "4月新制度のお知らせ",
        },
        {
          date: "2024/03/29",
          content: "3月分：勤務表とWeb月報の提出のお願い",
        },
        {
          date: "2024/03/15",
          content: "3月のお知らせ",
        },
        {
          date: "2024/02/28",
          content: "2月分：勤務表とWeb月報の提出のお願い",
        },
      ],
      attendanceStatus: [
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "通常休暇",
          reason: "私用のため",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "15:00 - 18:00",
          type: "特別休暇",
          reason: "プレミアムチケット",
          date: "2024/05/10 12:00",
        },
        {
          name: "長い社員氏名氏名氏名サンプルネーム",
          time: "09:00 - 18:00",
          type: "欠勤",
          reason:
            "大変申し訳ありませんが、有給休暇ではなく欠勤にて休暇処理をおねがいいたします。テキストテキスト",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "休日出勤",
          reason: "リリース作業のため",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 11:30",
          type: "遅刻",
          reason: "電車遅延のため",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "特別休暇",
          reason: "リフレッシュ休暇",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "特別休暇",
          reason: "【忌引き】2親等, 忌日：2024/05/30",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "通常休暇",
          reason: "振替休日",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "通常休暇",
          reason: "私用のため",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "15:00 - 18:00",
          type: "特別休暇",
          reason: "プレミアムチケット",
          date: "2024/05/10 12:00",
        },
        {
          name: "長い社員氏名氏名氏名サンプルネーム",
          time: "09:00 - 18:00",
          type: "欠勤",
          reason:
            "大変申し訳ありませんが、有給休暇ではなく欠勤にて休暇処理をおねがいいたします。テキストテキスト",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "休日出勤",
          reason: "リリース作業のため",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 11:30",
          type: "遅刻",
          reason: "電車遅延のため",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "特別休暇",
          reason: "リフレッシュ休暇",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "特別休暇",
          reason: "【忌引き】2親等, 忌日：2024/05/30",
          date: "2024/05/10 12:00",
        },
        {
          name: "社員氏名",
          time: "09:00 - 18:00",
          type: "通常休暇",
          reason: "振替休日",
          date: "2024/05/10 12:00",
        },
      ],
    };
  },
  computed: {
    typeClass() {
      switch (this.item.type) {
        case "通常休暇":
          return "color: blue;";
          break;
        case "特別休暇":
          return "color: green;";
          break;
        case "欠勤":
          return "color: yellow;";
          break;
        case "休日出勤":
          return "color: red;";
          break;
        case "遅刻":
          return "color: blank;";
          break;

        default:
          break;
      }
    },
  },
  name: "Home",
};
</script>

<style>
.panel-title {
  color: #a0b1a0;
}

.panel-text {
  padding: 10px 0;
}

.v-list-item {
  padding: 5px 0 !important;
}

.report {
  color: #b3b3b3;
}

tr td {
  padding: 0 !important;
}
</style>

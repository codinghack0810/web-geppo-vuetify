export interface list {
  date?: string;
  type?: string;
  reason?: string;
  sendDate?: string;
  status?: string;
}

const attendanceItem: list[] = [
  {
    date: '24/05/09（木）09:00 - 18:00',
    type: '通常休暇',
    reason: '私用のため私用のため私用のため',
    sendDate: '送信 24/05/01 17:15',
    status: ''
  },
  {
    date: '24/05/10（金）15:00 - 18:00',
    type: '特別休暇（プレミアム）',
    reason: '',
    sendDate: '送信 24/05/01 17:15',
    status: '承認'
  },
  {
    date: '24/05/13（月）09:00 - 10:00',
    type: '遅刻',
    reason: '山手線遅延のため',
    sendDate: '送信 24/05/01 17:15',
    status: ''
  },
  {
    date: '24/05/18（土）09:00 - 18:00',
    type: '休日出勤',
    reason: 'リリース作業のため',
    sendDate: '送信 24/05/01 17:15',
    status: ''
  },
  {
    date: '24/05/22（水）09:00 - 18:00',
    type: '欠勤',
    reason: '大変申し訳ありませんが欠勤で処理していただきますようおねがいします。',
    sendDate: '送信 24/05/01 17:15',
    status: ''
  },
  {
    date: '24/06/14（金）09:00 - 18:00',
    type: '特別休暇（リフレッシュ）',
    reason: '1日目',
    sendDate: '送信 24/05/01 17:15',
    status: '承認'
  },
  {
    date: '24/06/17（月）09:00 - 18:00',
    type: '特別休暇（リフレッシュ）',
    reason: '2日目',
    sendDate: '送信 24/05/01 17:15',
    status: '承認'
  },
  {
    date: '24/06/18（火）09:00 - 18:00',
    type: '特別休暇（リフレッシュ）',
    reason: '3日目',
    sendDate: '送信 24/05/01 17:15',
    status: '未承認'
  },
  {
    date: '24/06/20（木）15:00 - 18:00',
    type: '特別休暇（スペシャルデー）',
    reason: 'あ',
    sendDate: '送信 24/05/01 17:15',
    status: '却下'
  }
];

export default attendanceItem;

const WeekDay = ['日', '月', '火', '水', '木', '金', '土'];

const nowDate = new Date();
const nowYear = nowDate.getFullYear();
const nowMonth = nowDate.getMonth() + 1;
const nowDay = nowDate.getDate();
const nowWeek = nowDate.getDay();

const formattedMonth = String(nowMonth).padStart(2, '0');
const formattedDay = String(nowDay).padStart(2, '0');
const formattedWeek = WeekDay[nowWeek];

export { nowYear, nowMonth, nowDay, formattedMonth, formattedDay, formattedWeek };

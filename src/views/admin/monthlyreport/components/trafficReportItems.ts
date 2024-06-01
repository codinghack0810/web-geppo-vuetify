import type { trafficReportItem } from '@/types/trafficReportItem';

const trafficReportItems: trafficReportItem[] = [
    {
        date: '2024/05/14',
        destination: '客先',
        trafficMethod: '電車',
        from: '東京',
        to: '池袋',
        round: true,
        cost: '250'
    },
    {
        date: '2024/05/15',
        destination: '自社',
        trafficMethod: 'バス',
        from: '東新宿',
        to: '秋葉原',
        round: false,
        cost: '1250'
    },
    {
        date: '2024/05/16',
        destination: '自宅',
        trafficMethod: '他',
        from: '東京',
        to: '６文字の駅名',
        round: true,
        cost: '12520'
    },
    {
        date: '2024/05/17',
        destination: '客先',
        trafficMethod: '電車',
        from: '恵比寿',
        to: '高田馬場',
        round: true,
        cost: '90'
    },
    {
        date: '2024/05/18',
        destination: '客先',
        trafficMethod: '電車',
        from: '東京',
        to: '池袋',
        round: false,
        cost: '600'
    }
];

export default trafficReportItems;

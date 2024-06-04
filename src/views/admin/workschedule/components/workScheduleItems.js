const workScheduleItems = [
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '月途中で現場変更のため、勤務表が2つ...'
    },
    {
        name: '０１２３４５６７８９',
        department: 'WT',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '再送信しました。'
    },
    {
        name: '社員氏名氏名氏名',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名WT',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名GW',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '月途中で現場変更のため、勤務表が2つ...'
    },
    {
        name: '０１２３４５６７８９',
        department: 'WT',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '再送信しました。'
    },
    {
        name: '社員氏名氏名氏名',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名WT',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名GW',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: false,
        updateDate: '',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '０１２３４５６７８９',
        department: 'WT',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '再送信しました。'
    },
    {
        name: '社員氏名氏名氏名',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名WT',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名GW',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '月途中で現場変更のため、勤務表が2つ...'
    },
    {
        name: '０１２３４５６７８９',
        department: 'WT',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: ''
    },
    {
        name: '社員氏名1',
        department: 'GW',
        companyWorkSchedule: false,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: '再送信しました。'
    },
    {
        name: '社員氏名氏名氏名',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    },
    {
        name: '社員氏名2',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名WT',
        department: 'WT',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: true,
        latestSubmissionDate: '05/30 15:15',
        notice: 'パスワード：ABCDefg'
    },
    {
        name: '社員氏名GW',
        department: 'GW',
        companyWorkSchedule: true,
        updateDate: '05/30 15:15',
        customerWorkSchedule: false,
        latestSubmissionDate: '',
        notice: ''
    }
];

export default workScheduleItems;

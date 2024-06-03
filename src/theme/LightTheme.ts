import type { ThemeTypes } from '@/types/themeTypes/ThemeType';

const DefaultTheme: ThemeTypes = {
    name: 'DefaultTheme',
    dark: false,
    variables: {
        'border-color': '#f0f0f0',
        'carousel-control-size': 10,
        gradient: 'linear-gradient(250.38deg, #e6f4ff 2.39%, #69b1ff 34.42%, #1677ff 60.95%, #0958d9 84.83%, #002c8c 104.37%)',
        gradient2: 'linear-gradient(to right, rgb(9, 89, 218), rgb(22, 119, 255))',
        'card-shadow': '0px 1px 4px rgba(0, 0, 0, 0.08)'
    },
    colors: {
        primary: '#0284C7',
        primarydisabled: '#B3DAEE',
        secondary: '#808080',
        secondarydisabled: '#C0C0C0',
        info: '#13c2c2',
        success: '#3BA573',
        accent: '#FFAB91',
        warning: '#EDA450',
        error: '#D94E5C',
        lightprimary: '#67B5DD',
        lightprimarydisabled: '#D1E9F5',
        lightsecondary: '#BFBFBF',
        lightsecondarydisabled: '#D9D9D9',
        lightsuccess: '#B0DBC7',
        lighterror: '#EF9A9A',
        lightwarning: '#F5C996',
        darkText: '#212121',
        lightText: '#8c8c8c',
        darkprimary: '#0958d9',
        darksecondary: '#7a7878',
        borderLight: '#e6ebf1',
        inputBorder: '#a1a1a5',
        containerBg: '#fafafb',
        surface: '#fff',
        'on-surface-variant': '#fff',
        facebook: '#4267b2',
        twitter: '#1da1f2',
        linkedin: '#0e76a8',
        gray100: '#f5f5f5',
        primary200: '#a1d2ff',
        secondary200: '#eeeeee',
        card: '#7CB9D8',
        main: '#6E906D',
        lightmain: '#E9F6E9',
        darkmain: '#5E845D',
        textmain: '#A0B1A0'
    }
};

export { DefaultTheme };

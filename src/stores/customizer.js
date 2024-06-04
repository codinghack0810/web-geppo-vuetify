import { defineStore } from 'pinia';
import config from '@/config';

export const useCustomizerStore = defineStore({
    id: 'customizer',
    state: () => ({
        Sidebar_drawer: config.Sidebar_drawer,
        mini_sidebar: config.mini_sidebar,
        title: config.title,
        actTheme: config.actTheme,
        fontTheme: config.fontTheme
    }),

    getters: {},
    actions: {
        SET_SIDEBAR_DRAWER() {
            this.Sidebar_drawer = !this.Sidebar_drawer;
        },
        SET_MINI_SIDEBAR(payload) {
            this.mini_sidebar = payload;
        },
        SET_THEME(payload) {
            this.actTheme = payload;
        },
        SET_FONT(payload) {
            this.fontTheme = payload;
        },
        SET_TITLE(payload) {
            this.title = payload;
        }
    }
});

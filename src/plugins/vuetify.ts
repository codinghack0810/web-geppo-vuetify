/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { ThemeDefinition, createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides

const customLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    greenDarken: "#6e906d",
    greenLighten: "#e9f6e9",
    greenDarken2: "#1B5E20",
    greenText: "#A0B1A0",
    blueDarken: "#0284C7",
    blueLighten: "#67B5DD",
    greyDarken: "#757575",
    greyLighten: "#B3B3B3",
    redDarken: "##D94E5C",
    redLighten: "#EF9A9A",
    yellowDarken: "#F57F17",
    yellowLighten: "#FFF9CA",
    white: "#FFFFFF",
  },
}

export default createVuetify({
  theme: {
    defaultTheme: 'customLightTheme',
    themes:{
      customLightTheme,
    },
  },

  defaults: {
    global: {
      ripple: false,
    },
    VSheet: {
      elevation: 4,
    },
  },
});

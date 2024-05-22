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
    greenDarken: "#33691E",
    greenLighten: "#9ccc65",
    greenDarken2: "#1B5E20",
    blueDarken: "#01579B",
    blueLighten: "#29B6F6",
    greyDarken: "#757575",
    greyLighten: "#E0E0E0",
    redDarken: "#B71C1C",
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

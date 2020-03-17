import Vue from "vue";
import Vuetify from "vuetify/lib";

// Types
import { VuetifyPreset } from "vuetify/types/services/presets";

const options = {
  theme: {
    dark: true,
    default: "dark",
    disable: false
  }
};

Vue.use(Vuetify);

export default new Vuetify(options);

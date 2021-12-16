import Vue from "vue";
import { library, config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons"; //free brands
// import { fas } from "@fortawesome/pro-solid-svg-icons"; //pro solid
// import { fad } from "@fortawesome/pro-duotone-svg-icons"; //pro duotone
// import { fal } from "@fortawesome/pro-light-svg-icons"; //pro light
// import { far } from "@fortawesome/pro-regular-svg-icons"; //pro regular

// This is important, we are going to let Nuxt.js worry about the CSS
config.autoAddCss = false;

// You can add your icons directly in this plugin. See other examples for how you
// can add other styles or just individual icons.
library.add(fab);
// library.add(fas);

// Register the component globally
Vue.component("FontAwesomeIcon", FontAwesomeIcon);

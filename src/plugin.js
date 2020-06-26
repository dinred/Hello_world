import "./css/my.styl";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "element-ui/lib/theme-chalk/index.css";
import VueBus from "vue-bus";

export default {
  install(Vue) {
    // Install BootstrapVue
    Vue.use(BootstrapVue);
    // Optionally install the BootstrapVue icon components plugin
		Vue.use(IconsPlugin);
		Vue.use(VueBus);
  },
};

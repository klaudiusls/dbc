import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import "bootstrap";
import "./assets/css/styles.css";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

//import "aos";
import AOS from "aos";
import "aos/dist/aos.css";
new AOS.init();

//import axios from 'axios'
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

//import VueSweetalert2 from 'vue-sweetalert2';
import VueSweetalert2 from "vue-sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);

//import VueLazyload from 'vue-lazyload'
/*import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload);
// or with options
const loadimage = require("@/assets/loading.gif");
const errorimage = require("@/assets/error.gif");
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: errorimage,
  loading: loadimage,
  attempt: 1,
});*/

/*/import VueAgile from 'vue-agile'
import VueAgile from 'vue-agile';
Vue.use(VueAgile);*/

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");

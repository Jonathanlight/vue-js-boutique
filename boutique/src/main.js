import Vue from 'vue'
import App from './App.vue'
import * as Filters from './utils/filters.js'
import router from './router';
import axios from 'axios';
import store from './store/store';

axios.defaults.baseURL = 'https://boutique-2f849.firebaseio.com';

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Object.keys(Filters).forEach((f) => {
    Vue.filter(f, Filters[f]);
});

new Vue({
    router: router,
    store: store,
    render: h => h(App),
}).$mount('#app');

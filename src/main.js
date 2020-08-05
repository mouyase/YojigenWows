import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueJsonp from 'vue-jsonp'
import qs from 'qs'
import '@/permission'
import '@/interceptors'
import util from '@/util'

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(VueAxios, axios)
Vue.use(VueJsonp)

Vue.prototype.$env = process.env
Vue.prototype.$qs = qs
Vue.prototype.$util = util


new Vue({
    el: '#app',
    router,
    render: h => h(App)
}).$mount('#app')

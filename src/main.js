import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Mint from 'mint-ui';
//import api from './api/api'
import config from './lib/config/config'
import VueCorvova from 'vue-cordova'
import echarts from 'echarts'
import '@/assets/styles/reset.css'
import '@/assets/styles/iconfont/iconfont.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/style/index.scss'
import '@/assets/style/fugai.css'
import $ from "jquery";
import "@/assets/jquery-2.2.2.min.js";
import "@/assets/jSignature.js";

/* eslint-disable no-unused-vars */
//import vConsole from './utils/log'
import Print from 'vue-print-nb'
Vue.use(Print) //注册打印功能
Vue.use(VueAwesomeSwiper);
Vue.prototype.$echarts = echarts
Vue.use(VueCorvova);
Vue.use(Mint);
//Vue.prototype.api = api;
Vue.use(config);
Vue.config.productionTip = false;

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
});

router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
  })


// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
    // 聚焦元素
    el.focus()
    }
    })

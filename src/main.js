import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/style/border.css'
import './assets/style/reset.css'
import fastclick from 'fastclick'
import './assets/style/icon-font.css'
import "swiper/swiper-bundle.css";

// Vue.use(Swiper);

Vue.config.productionTip = false

fastclick.attach(document.body);
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
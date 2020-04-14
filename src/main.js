import Vue from 'vue'
import store from "./store/store"
import App from './app.vue'


Vue.config.productionTip = false;

App.mpType = 'app'

Vue.prototype.$store = store

const app = new Vue(App)

app.$mount()

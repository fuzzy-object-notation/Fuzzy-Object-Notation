import "@babel/polyfill"
import Vue from "vue"
import App from "../vue/app.vue"

new Vue({
    el: '#app',
    render: h => h(App)
});
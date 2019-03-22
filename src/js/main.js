import "@babel/polyfill"
import * as MDC from "../lib/@material/material-components-web.min.js"
import "../lib/@material/material-components-web.min.css"
import Vue from "vue"
import App from "../vue/app.vue"

new Vue({
    el: '#app',
    render: h => h(App)
});
const tabBar = new MDC.tabBar.MDCTabBar(document.querySelector('.mdc-tab-bar'));



let SaveData = {
    KnowledgeBase: [
        {
            FS: "Fuzzy01", //Fuzzy Sets
            Type: "in", //類型
            DomainLeft: 0, //下限
            DomainRight: 10, //上限 

            FuzzyTerm: [
                { FN: "TrapezoidShape", Scale: 1, NodeData: [0, 1, 2, 3] }, //單一FN資訊
            ]

        }
    ],
    RuleBase: []
}
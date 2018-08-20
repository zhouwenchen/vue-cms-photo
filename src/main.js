// 程序的入口
console.log('ok')

// 导入vue
import Vue from 'vue'

// 导入mui的样式
import './lib/mui/css/mui.min.css'

// 按需导入mint-ui的
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header )



import app from './App.vue'

var vm = new Vue({
    el : '#app',
    render : c => c(app)
})
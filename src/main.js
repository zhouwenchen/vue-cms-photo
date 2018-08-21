// 程序的入口
console.log('ok')

// 导入vue
import Vue from 'vue'

// 1.1导入路由
import VueRouter from 'vue-router'
// 1.2安装路由
Vue.use(VueRouter)
// 1.3 导入自己的router.js 路由模块
import router from './router.js'

// 导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui的
import { Header,Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name,Header )
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 解决跨域问题
import axios from 'axios';
Vue.prototype.axios=axios;





import app from './App.vue'

var vm = new Vue({
    el : '#app',
    render : c => c(app),
    router // 1.4 挂载路由模块
})
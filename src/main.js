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

// 定义全局的时间过滤器组件
import moment from 'moment'
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern)
})

// 导入mui的样式
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

// 按需导入mint-ui的
// import { Header,Swipe, SwipeItem,Button,Lazyload} from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.component(Header.name,Header )
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);

// 由于导入Lazyload，不能使用按需导入，需要全部导入才可以生效
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 图片缩略图的插件 vue-preview
import VuePreview from 'vue-preview'
// defalut install
Vue.use(VuePreview)

// with parameters install
// Vue.use(VuePreview, {
//     mainClass: 'pswp--minimal--dark',
//     barsSize: {top: 0, bottom: 0},
//     captionEl: false,
//     fullscreenEl: false,
//     shareEl: false,
//     bgOpacity: 0,
//     tapToClose: true,
//     tapToToggleControls: false
//   })


// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 设置全局的请求域名
Vue.http.options.root = 'http://localhost:8081/';

// 全局设置post的发送格式为json
Vue.http.options.emulateJSON = true;

// 解决跨域问题
import axios from 'axios';
Vue.prototype.axios=axios;

import app from './App.vue'

var vm = new Vue({
    el : '#app',
    render : c => c(app),
    router // 1.4 挂载路由模块
})
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

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 当刷新页面的时候，将本地持久化的文件，加载出来
var car = JSON.parse(localStorage.getItem('car') || '[]')
var store = new Vuex.Store({
    state:{ // this.$store.state.***
        car : car// {id:1,count:3,price:3.2,selected : true} 将购物车中的商品的数据存储起来，存储的格式如上所示，id，购买数量，价格，是否显示
    },
    mutations : { // this.$store.commit('方法名','按需传入参数与')
        addToCar(state,goodinfo){
            // 需要判断添加 的 商品 是否在购物车中存在了，如果存在的话，就增加数量，如果不存在的话，就直接push进去
            var flag = false;
            state.car.some(item =>{
                
                // 如果car中存在，就 将数量增加
                if(item.id == goodinfo.id){
                    item.count += parseInt(goodinfo.count);
                    flag = true;
                    return true
                }
            });
            
            // 此时表示没有直接push
            if(!flag){
                state.car.push(goodinfo)
            }

            // 将数据保存到 本地的持久化
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsInfo(state,goodsinfo){ // 使用按钮，修改购物车中的数量，
            state.car.some(item =>{
                if(item.id == goodsinfo.id){
                    item.count = parseInt(goodsinfo.count);
                    return true;
                }
            })

            // 将数据保存到localStoreage
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        removeShopCart(state,id){
            // 根据id，从store中删除数据
            state.car.some((item,i) =>{
                if(item.id == id){
                    state.car.splice(i,1)
                    return true;
                }
            })

            // 将数据保存到localStoreage
            localStorage.setItem('car',JSON.stringify(state.car))
        },
        updateGoodsSelected(state,obj){
            // console.log(obj)
            state.car.forEach(item=>{
                if(item.id == obj.id){
                    item.selected = obj.selected;
                }
            })
        
            // 将数据保存到localStoreage
            localStorage.setItem('car',JSON.stringify(state.car))
        }
    },
    getters : { // this.$store.getters.***  ,计算属性
        getAllCount(state){
            var c = 0;
            state.car.forEach(item =>{
                c += item.count
            })
            return c
        },
        getShopCartCount(state){
            var o = {};
            state.car.forEach(item =>{
                o[item.id] = item.count;
            })
            return o;
        },
        getGoodsSelected(state){ // 获取到按钮是否是开着的状态
            var o = {};
            state.car.forEach(item =>{
                o[item.id] = item.selected;
            })
            return o;
        },
        getGoodsCountAndAmount(state){ // 统计购物车中的购买数量和总价
            var o = {count:0,amount:0};
            state.car.forEach(item=>{
                if(item.selected){
                    o.count +=item.count;
                    o.amount += item.count * item.price;
                }
            })
            return o;
        }
    }
})

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
    router, // 1.4 挂载路由模块
    store // 挂载store
})
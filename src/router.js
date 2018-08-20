// 自定义的路由js


import VueRouter from 'vue-router'

// 导入各个路由的组件
import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopCarContainer from './component/tabbar/ShopCarContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'

// 2.创建路由对象
var router = new VueRouter({
    routes : [// 设置路由规则的
        {path : '/home',component : HomeContainer},
        {path : '/member',component : MemberContainer},
        {path : '/shopcar',component : ShopCarContainer},
        {path : '/search',component : SearchContainer}
    ],
    linkActiveClass : 'mui-active'
    
})


export default router
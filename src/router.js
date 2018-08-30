// 自定义的路由js


import VueRouter from 'vue-router'

// 导入各个路由的组件
import HomeContainer from './component/tabbar/HomeContainer.vue'
import MemberContainer from './component/tabbar/MemberContainer.vue'
import ShopCarContainer from './component/tabbar/ShopCarContainer.vue'
import SearchContainer from './component/tabbar/SearchContainer.vue'
import NewsListContainer from './component/news/NewsList.vue'
import NewsInfoContainer from './component/news/newsinfo.vue'
import PhotoList from './component/photos/PhotoList.vue'
import PhotoInfo from './component/photos/PhotoInfo.vue'
import GoodsList from './component/goods/GoodsList.vue'
import GoodsInfo from './component/goods/GoodsInfo.vue'
import GoodsDesc from './component/goods/GoodsDesc.vue'
import GoodsComment from './component/goods/GoodsComment.vue'
// 2.创建路由对象
var router = new VueRouter({
    routes : [// 设置路由规则的
        {path : '/',redirect: '/home'},
        {path : '/home',component : HomeContainer},
        {path : '/member',component : MemberContainer},
        {path : '/shopcar',component : ShopCarContainer},
        {path : '/search',component : SearchContainer},
        {path : '/home/newslist',component:NewsListContainer},
        {path : '/home/newsinfo/:id',component : NewsInfoContainer},
        {path : '/home/photolist',component: PhotoList},
        {path : '/home/photoinfo/:id', component:PhotoInfo},
        {path : '/home/goodlist',component : GoodsList},
        {path : '/home/goodsinfo/:id',component:GoodsInfo},
        {path : '/home/goodsdesc/:id',component : GoodsDesc,name : 'goodsdesc'},
        {path : '/home/goodscomment/:id',component: GoodsComment,name : 'goodscomment'}
    ],
    linkActiveClass : 'mui-active'
    
})


export default router
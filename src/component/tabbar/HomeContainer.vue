<template>
    <div>
        <!-- 这是轮播图的效果-->
        <swiper :lunbotuList="lunbotuList" :isfull="true"></swiper>

        <!-- 六宫格的组件-->
        <ul class="mui-table-view mui-grid-view mui-grid-9">
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/newslist">
                    <img src="../../images/menu1.png" alt="">
                    <div class="mui-media-body">新闻资讯</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/photolist">
                   <img src="../../images/menu2.png" alt="">
                    <div class="mui-media-body">图片分享</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                <router-link to="/home/goodlist">
                  <img src="../../images/menu3.png" alt="">
                    <div class="mui-media-body">商品购买</div></router-link></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu4.png" alt="">
                    <div class="mui-media-body">留言反馈</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                   <img src="../../images/menu5.png" alt="">
                    <div class="mui-media-body">视频专区</div></a></li>
            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <img src="../../images/menu6.png" alt="">
                    <div class="mui-media-body">联系我们</div></a></li>
        </ul> 
    </div>
</template>

<script>
// 导入Toast的组件，消息提示
import { Toast } from 'mint-ui'
// 导入轮播图的组件
import swiper from '../subcomponent/swiper.vue'

export default {
    data(){
        return {
            lunbotuList : []
        }
    },
    created(){
        this.getLunbotu()
    },
    methods : {
        getLunbotu(){
            this.$http.get('api/getlunbolist').then(result => {
                console.log(result.data)
                if(result.data.status === 0){
                    this.lunbotuList = result.body.message
                } else {
                    Toast('加载轮播图数据失败。。。。')
                }
            })
            // this.axios.get('http://localhost:8081/api/getlunbolist').then(result => {
            //     console.log(result)
            //      if(result.data.status === 0){
            //         this.lunbotuList = result.data.message
            //     } else {
            //         Toast('加载轮播图数据失败。。。。')
            //     }
            // })
        }
    },
    components : {
        swiper
    }
}
</script>

<style lang="scss" scoped>

// 六宫格的背景
.mui-grid-view.mui-grid-9{
    background-color: #fff;

    img{
        width: 55x;
        height: 55px;
    }
}

.mui-grid-view.mui-grid-9 .mui-table-view-cell{
    border: 0
}
</style>

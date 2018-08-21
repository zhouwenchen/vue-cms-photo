<template>
    <div>
        <!-- 这是轮播图的效果-->
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img">
            </mt-swipe-item>
        </mt-swipe>
        <h1>HomeContainer</h1>
    </div>
</template>

<script>
// 导入Toast的组件，消息提示
import { Toast } from 'mint-ui'

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
            this.$http.get('http://localhost:8888/').then(result => {
                console.log(result.body)
                if(result.body.status === 0){
                    this.lunbotuList = result.body.message
                } else {
                    Toast('加载轮播图数据失败。。。。')
                }
            })
            // this.axios.get('http://localhost:8888/').then(result => {
            //     console.log(result)
            // })
        }
    }
}
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        &:nth-child(1){
            background-color: red;
        }
        &:nth-child(2){
            background-color: blue;
        }
        &:nth-child(3){
            background-color: cyan;
        }

        img{
            height: 100%;
            width: 100%;
        }
    }

}
</style>

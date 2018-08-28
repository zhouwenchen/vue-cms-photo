<template>
    <div class="photoInfo-container">
        <h3>{{ photoInfo.title }}</h3>
        <p class="subtitle">
            <span >发表时间：{{ photoInfo.add_time | dateFormat }}</span>
            <span>点击次数：{{ photoInfo.click }}次</span>
        </p>
        <hr>

        <!-- 缩略图的区域 -->
        <div class="thumbs">
             <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
        </div>

        <!-- 图片内容区域 -->
        <div class="content" v-html="photoInfo.content"></div>

        <!-- 评论子组件 -->
        <comment-box v-bind:id="id"></comment-box>
    </div>
</template>

<script>
// 1. 导入评论的子组件
import comment from '../subcomponent/comment.vue'


export default{
    data(){
        return {
            id : this.$route.params.id, // 从路由中获取到的图片id
            photoInfo:{},// 图片的详细信息
            slide1 : [] // 缩略图的数据
        }
    },
    created(){
        this.getPhotoInfo(), // 获取图片的 详细信息
        this.getPhotoThumb() // 获取图片的 缩略图的数据 
    },
    methods:{
        getPhotoInfo(){ // 获取图片的详情信息
            this.$http.get('api/getphotoinfo/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.photoInfo = result.body.message[0]
                } else {

                }
            })
        },
        getPhotoThumb(){ // 获取图片缩略图的数据
            this.$http.get('api/getphotothumbbypid/'+this.id).then(result => {
                if(result.body.status === 0){
                    // 不全数据中的 宽 和 高
                    result.body.message.forEach(item => {
                        item.w = 600;
                        item.h = 400;
                    });
                    
                    this.slide1 = result.body.message;
                }
            })
        },
        handleClose () {
            console.log('close event')
        }
    }, 
    components : {// 2. 注册子组件
        "comment-box" : comment
    }
}
</script>

<style lang="scss" scoped>
.photoInfo-container{
    padding: 3px;
    h3{
        color: #26a2ff;
        font-size: 15px;
        text-align: center;
        margin: 15px 0;
    }
    .subtitle{
        font-size: 13px;
        display: flex;
        justify-content: space-between;
    }
    .content{
        font-size: 13px;
        line-height: 30px;
    }
    .thumbs{
       img{
           margin: 10px;
           box-shadow: 0 0 8px;
       }
       
    }
   
}
</style>

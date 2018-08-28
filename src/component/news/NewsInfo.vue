<template>
    <div class="newsinfo-container">
        <!-- 标题 -->
        <h3 class="title">{{ newsinfo.title}}</h3>
        <!-- 子标题 -->
        <p class="subtitle">
            <span>发布时间：{{ newsinfo.add_time | dateFormat}}</span>
            <span>点击次数：{{ newsinfo.click}}次</span>
        </p>
        <hr>
        
        <!-- 内容 -->
        <div class="content" v-html="newsinfo.content"></div>
         <!-- 评论的子组件-->
        <comment-box v-bind:id="id"></comment-box>
    </div>    
</template>

<script>
import { Toast } from 'mint-ui'
// 1. 导入评论的子组件
import comment from '../subcomponent/comment.vue'

export default {
    data(){
        return {
            id : this.$route.params.id,  // 将url中传递过来的id值，保存到id上
            newsinfo : {}
        }
    },
    created() {
        this.getNewsInfo()
    },
    methods : {
        getNewsInfo(){
            this.$http.get("api/getnewsinfo/" + this.id).then(result => {
                if(result.body.status === 0){
                    this.newsinfo = result.body.message
                    console.log(result.body.message)
                    Toast('加载成功')
                } else {
                    Toast('加载失败')
                }
            })
        }
    },
    components : {// 2. 注册子组件
        "comment-box" : comment
    }
}
</script>

<style lang="scss" scoped>
.newsinfo-container {
    padding : 0 4px;
    padding-bottom: 50px;
    .title {
        font-size : 16px;
        text-align : center;
        margin : 15px 0;
        color: red;
    }
    .subtitle{
        font-size: 13px;
        color: #226aff;
        display: flex;
        justify-content: space-between;
    }
    .content{
        img{
            width: 100%
        }
    }
}
</style>

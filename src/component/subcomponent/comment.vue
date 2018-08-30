<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（不超过120）" maxlength="120" v-model="msg"></textarea>

        <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>
        <div class="cmt-list" v-for="(item ,i) in comments" :key="item.add_time">
            <div class="cmt-item">
                <div class="cmt-title">
                第{{i+1}}楼&nbsp;&nbsp;用户：{{item.userName == undefined ?'匿名用户':item.userName}}&nbsp;&nbsp;发表时间: {{item.add_time | dateFormat}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return  {
            pageIndex : 1,
            comments : [],
            msg : '' // 评论输入的内容
        }
    },
    props:[
        "id"
    ],
    created () {
        this.getcommentList()
    },
    methods : {
        getcommentList(){
            this.$http.get('api/getcommentlist/'+this.id+'?pageIndex=' + this.pageIndex).then(result => {
                if(result.body.status === 0){
                    // this.comments = result.body.message
                    this.comments = this.comments.concat(result.body.message)
                } else if(result.body.status === 1){
                    Toast(result.body.message)
                    this.pageIndex--
                } else {
                    Toast('加载数据失败')
                }
            })
        },
        getMore(){
            console.log('加载更多')
            this.pageIndex++;
            this.getcommentList();
        },
        postComment(){
            // 检验评论是否为空
            if(this.msg.trim().length === 0){
                return Toast('评论不能为空')
            }

            /** 1. 第一个参数表示post请求的路径
                2. 第二个参数提交给服务器的数据对象{ content : this.msg }
                3. 第三个参数，定义提交的时候，表单中数据的格式{emulateJson:true}
             */
            this.$http.post('api/postComment/' + this.$route.params.id,{content : this.msg})
            .then(function(result){
                if(result.body.status === 0){
                    // 将次数据保存到之前的msg中，显示最新的评论数据
                    var cmt = {user_name : '匿名用户',add_time : Date.now(),content : this.msg.trim()}
                    this.comments.unshift(cmt)
                    this.msg = ""
                    Toast(result.body.message)
                } else {
                    Toast('评论失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.cmt-container{
    margin-bottom: 50px;
    h3{
        font-size: 18px;
    }

    textarea{
        font-size: 14px;
        height: 85px;
        margin: 0;
    }
    .cmt-list{
        margin : 10px;
        .cmt-item{
            font-size: 12px;
            .cmt-title{
                line-height: 20px;
                background-color: #ccc;
            }
            .cmt-body{
                line-height: 25px;
                text-indent: 2em;
            }
        }
    }

}
</style>
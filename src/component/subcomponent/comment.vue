<template>
    <div class="cmt-container">
        <h3>发表评论</h3>
        <hr>
        <textarea placeholder="请输入要BB的内容（不超过120）" maxlength="120"></textarea>

        <mt-button type="primary" size="large" >发表评论</mt-button>
        <div class="cmt-list" v-for="(item ,i) in comments" :key="item.add_time">
            <div class="cmt-item">
                <div class="cmt-title">
                第{{i+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time}}
                </div>
                <div class="cmt-body">
                    {{item.content}}
                </div>
            </div>
        </div>

        <mt-button type="danger" size="large" plain >加载更多</mt-button>
    </div>
</template>

<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return  {
            comments : []
        }
    },
    created () {
        this.getcommentList()
    },
    methods : {
        getcommentList(){
            this.$http.get('http://localhost:8890/api/getcommentlist').then(result => {
                if(result.body.status === 0){
                    this.comments = result.body.message
                    console.log(result)
                    Toast('加载数据成功')
                } else {
                    Toast('加载数据失败')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.cmt-container{
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
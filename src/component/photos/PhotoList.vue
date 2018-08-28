<template>
    <div class="body">
        <div id="slider" class="mui-slider">
            <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                <div class="mui-scroll">
                    <a :class="['mui-control-item', item.id == 0?'mui-active':'']" v-for="item in cates" :key="item.id" @click="getPhotoListByCateId(item.id)">
                        {{item.title}}
                    </a>
            
                </div>
            </div>
        </div>
        
        <!-- 图片列表区域 -->
        <ul class="photo-list">
            <router-link v-for="item in list" :key="item.id" :to="'/home/photoinfo/' + item.id" tag="li">
                <img v-lazy="item.img_url">
                <div class="info">
                    <h1 class="info-title">{{item.title }}</h1>
                    <div class="info-body">{{ item.zhaiyao}}</div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
// 导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'

    export default{
        data (){
            return {
                cates : [], // 存放分类的集合数据
                list : [] // 存放图片列表的数据
            }
        },
        created(){
            this.getAllCategory(),
            // 第一次进入的时候，加载数据
            this.getPhotoListByCateId(0)
        },
        mounted(){// 等待dom元素加载完成之后，才可以去执行
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getAllCategory(){
                this.$http.get('api/getcategorylist').then(result => {
                    // 需要手动拼接一个全部的按钮
                    if(result.body.status === 0){
                        result.body.message.unshift({title : '全部',id : 0});
                        this.cates = result.body.message;
                    }
                })
            },
            getPhotoListByCateId(cateId){// 根据分类列表的id，查询出图片的列表信息
                this.$http.get('api/getphotolistbycateid/'+ cateId).then(result =>{
                   if(result.body.status === 0){
                       this.list = result.body.message
                   } else {
                       Toast('加载图片失败')
                   }
                })

            }
        }
    }

</script>

<style lang="scss" scoped>
*{
    touch-action: pan-y;
}

.photo-list{
    list-style : none;
    margin: 0;
    padding: 10px;
    padding-bottom: 0;
    li{
        background-color: #ccc;
        text-align: center;
        margin-bottom: 10px;   
        box-shadow: 0 0 6px #999; 
        position: relative;
        img{
            width: 100%;
            vertical-align: middle;
        }
        img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
        }
        .info{
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0,0,0,0.4);
            max-height: 84px;
            .info-title{
                font-size: 14px;
            }
            .info-body{
                font-size: 13px;
            }
        }
    }
}
.body{
    padding-bottom: 50px;
}
</style>

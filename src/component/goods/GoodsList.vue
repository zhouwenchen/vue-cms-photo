<template>
    <div class="goods-list">
        <router-link class="good-item" v-for="item in goods" :key="item.id" :to="'/home/goodsinfo/'+item.id" tag="div">
            <img :src="item.imgUrl" alt="" class="">
            <h1 class="title">{{ item.title }}</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥{{ item.sellPrice }}</span>
                    <span class="old">￥{{ item.marketPrice }}</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩 {{ item.stockQuantity }}件</span>
                </p>
            </div>
        </router-link>
        <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
    </div>

</template>

<script>
import { Toast } from 'mint-ui'
export default{
    data(){
        return {
            goods : [],
            pageIndex : 1,
        }
    },
    created(){
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get('api/getgoodslist?pageIndex='+this.pageIndex).then(result =>{
                if(result.body.status === 0){
                    this.goods = this.goods.concat(result.body.message)
                } else if(result.body.status === 1){
                    Toast('没有更多的数据了')
                }
            })
        },
        getMore(){
            this.pageIndex++;
            this.getGoodsList();
        }
    }
}
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
    margin-bottom: 50px;
    .good-item{
        width: 49%;
        border: 1px solid #ccc;
        box-shadow: 0 0 8px #ccc;
        margin: 3px 0;
        padding: 2px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        min-height: 293px;
        img{
            width: 100%;
        }
        .title{
            font-size: 14px;
        }
        .info{
            background-color: #eee;
            p{
                margin: 0;
                padding: 5px;
            }
            .price{
                .now{
                    color: red;
                    font-weight: bold;
                    font-size: 16px;
                }
                .old{
                    text-decoration:line-through;
                    font-size: 12px;
                    margin-left: 10px;
                }
            }
            .sell{
                display: flex;
                justify-content: space-between;
                font-size: 13px;
            }
        }
    }
}
</style>

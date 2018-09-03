<template>
    <div class="shopCar-container">
        <!-- 商品列表区域 -->
        <div class="goods-list">
            <div class="mui-card" v-for="(item,i) in goodsList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch v-model="$store.getters.getGoodsSelected[item.id]" @change="changeSelected(item.id,$store.getters.getGoodsSelected[item.id])">开关</mt-switch>
                        <img :src="item.thumbPath">
                        <div class="info">
                            <h1>{{ item.title }}</h1>
                            <p>
                                <span class="price">￥{{ item.sellPrice}}</span>
                                <numbox :initcount="$store.getters.getShopCartCount[item.id]" :goodsinfoId="item.id"></numbox>
                                <a href="#" @click.prevent="removeShopCart(item.id,i)">删除</a>
                            </p>
                        </div>
					</div>
				</div>
			</div>
        </div>

        <!-- 商品结算区域 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner jiesuan">
                    <div class="left">
                        <p>总计 (不包含运费) </p>
                        <p>已都选商品 <span class="red">{{ $store.getters.getGoodsCountAndAmount.count }}</span> 件，总价 <span class="red">￥{{ $store.getters.getGoodsCountAndAmount.amount }}</span></p>
                    </div>
                    <mt-button type="danger">去结算</mt-button>
                </div>
            </div>
        </div>
        <p>{{ $store.getters.getGoodsSelected }}</p>

    </div>
</template>

<script>
import numbox from '../subcomponent/shopcart_numbox.vue'
export default {
    data(){
        return {
            goodsList:[]
        }
    },
    created(){
        this.getGoodList();
    },
    methods : {
        getGoodList(){
            // 获取到 store 中所有的商品的id，然后拼接成一个 逗号分割 的字符串
            var idArr = [];
            this.$store.state.car.forEach(item => idArr.push(item.id))
            // 如果购物车中没有商品，直接返回
            if(idArr.length<=0){
                return;
            }
            this.$http.get('api/goods/getshopcarlist/' + idArr.join(',')).then(result =>{
                console.log(result)
                if(result.body.status === 0){
                    this.goodsList = result.body.message
                }
            })
        },
        removeShopCart(id,index){// 删除购物车中的数据
            this.goodsList.splice(index,1);
            // console.log(id)
            this.$store.commit('removeShopCart',id);
        },
        changeSelected(id,val){
            // console.log(id + '----' + val)
            this.$store.commit('updateGoodsSelected',{id:id,selected : val});
        }
    },
    components:{
        numbox
    }
}
</script>

<style lang="scss" scoped>
.shopCar-container{
    background-color: #eee;
    overflow: hidden;
    .goods-list { 
        .mui-card-content-inner{
            display: flex;
            align-items: center;
        }

        img {
            width: 50px;
            height: 50px;
        }

        h1{
            font-size: 13px;
        }
        .info{
            display: flex;
            flex-direction: column;
            .price{
                color: red;
                font-weight: bold;
            }
        }
    }
    .jiesuan{
        display:flex;
        justify-content: space-between;
        align-content: center;
        .red{
            color: red;
            font-weight: bold;
            font-size: 16px;
        }
    }
}
</style>

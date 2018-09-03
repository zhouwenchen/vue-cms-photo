<template>
    <div class="goodinfo-container">

        <!-- 小球的图片 -->
        <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="ballFlag" ref="ball"></div>
        </transition>

        <!-- 商品轮播图的图片 -->
        <div class="mui-card">
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                    <swiper :lunbotuList="lunbotuList" :isfull="false"></swiper>
                </div>
            </div>
        </div>

        <!-- 商品购买区域 -->
        <div class="mui-card">
            <div class="mui-card-header">{{ goodsinfo.title }}</div>
            <div class="mui-card-content">
                <div class="mui-card-content-inner">
                   <p class="price">
                       市场价: <del>￥{{ goodsinfo.marketPrice }}</del>&nbsp;&nbsp;销售价：<span class="now_price">￥{{ goodsinfo.sellPrice }}</span>
                   </p>
                   <p>购买数量：<numbox @getCount="getSelectCount" :max="goodsinfo.stockQuantity"></numbox></p> 
                   
                   <p>
                       <mt-button type="primary" size="small">立即购买</mt-button>
                       <mt-button type="danger" size="small" @click="addShopCart">加入购物车</mt-button>
                   </p>
                </div>
            </div>
        </div>

        <!-- 商品参数区域 -->
        <div class="mui-card">
				<div class="mui-card-header">商品参数</div>
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<p>商品货号：{{ goodsinfo.goodNo }}</p>
						<p>库存情况：{{ goodsinfo.stockQuantity }}</p>
						<p>上架时间：{{ goodsinfo.addTime | dateFormat}}</p>

					</div>
				</div>
				<div class="mui-card-footer">
                    <mt-button type="primary" size="large" plain @click="getGoodsDesc(id)">图文介绍</mt-button>
                    <mt-button type="danger" size="large" plain @click="getGoodsComment(id)">商品评论</mt-button>
                </div>
			</div>

    </div>
</template>

<script>
// 1.导入轮播图的组件
import swiper from '../subcomponent/swiper.vue'

// numbox的组件
import numbox from '../subcomponent/goodsinfo_numbox.vue'

export default{
    data(){
        return {
            id : this.$route.params.id,
            lunbotuList : [],
            goodsinfo : {},   // 商品图文介绍
            ballFlag : false,  // 小球是否显示
            selectCount : 1 // 默认选择购买的数量为1
        }
    },
    created()  {
        this.getlunbotu()
        this.getGoodInfoBygid()
    },
    methods : {
        getlunbotu(){
            this.$http.get('api/getphotothumbbypid/'+this.id).then(result =>{
                if(result.body.status === 0){
                    // 由于轮播图，需要使用的是 img 属性，故需要使用遍历数据 ，添加 img
                    result.body.message.forEach(item =>{
                        item.img = item.src;
                    })
                    this.lunbotuList = result.body.message
                }
            })
        },
        getGoodInfoBygid(){
            this.$http.get('api/getgoodInfoByGid/'+this.id).then(result =>{
                if(result.body.status === 0){
                    this.goodsinfo = result.body.message[0];
                } else {

                }
            })
        },
        // 以下使用的是编程式的方式，实现路由规则
        getGoodsDesc(id){// 图文介绍页面
            this.$router.push({name : 'goodsdesc',params: { id }});
        },
        getGoodsComment(id){// 图文评论页面
            this.$router.push({name : 'goodscomment',params : { id }});
        },
        addShopCart(){
            this.ballFlag = ! this.ballFlag;

            // 需要拼接处 {id:1,count:3,price:3.2,selected : true}  这样的对象，存储到  vuex  上
            var goodinfo = { id : this.id, count : this.selectCount, price : this.goodsinfo.sellPrice,selected : true };
            // 调用
            this.$store.commit("addToCar",goodinfo);
        },
        beforeEnter(el){
            el.style.transform = "translate(0 , 0)"
        },
        enter(el,done){
            el.offsetWidth ;// 有动画的效果
            // 
            const ballPosition = this.$refs.ball.getBoundingClientRect();
            const badgePosition = document.getElementById("badge").getBoundingClientRect();

            const xDist = badgePosition.left - ballPosition.left;
            const yDist = badgePosition.top - ballPosition.top;

            el.style.transform = `translate(${xDist}px, ${yDist}px)`;
            el.style.transition = "all 1s cubic-bezier(.59,.07,.66,.95)";
            done()
        },
        afterEnter(el){
            this.ballFlag = ! this.ballFlag
        },
        getSelectCount(count){
            this.selectCount = count;
            console.log('父组件获取到 子组件中的数据' + this.selectCount);
        }
    },
    components : {
        swiper,numbox
    }
}
</script>

<style lang="scss" scoped>
.goodinfo-container{
    background-color: #eee;
    overflow: hidden;
    margin-bottom: 48px;

    .mui-card-footer{
        display: block;
        button{
            margin: 15px 0 ;

        }
    }

    .ball{
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        z-index: 99;
        left: 148px;
        top: 393px;
        // transform: translate(160px, 426px);
    }
}

.now_price{
    color: red;
    font-size: 16px;
    font-weight: bold;
}
</style>
<template>
    <div class="goods-list">
        <div class="good-item">
            <img src="https://cbu01.alicdn.com/img/ibank/2018/468/616/9250616864_769866269.220x220.jpg" alt="" class="">
            <h1 class="title">工厂批发J2 5.0寸3G智能手机四核跨</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩66件</span>
                </p>
            </div>
        </div>

        <div class="good-item">
            <img src="https://cbu01.alicdn.com/img/ibank/2018/468/616/9250616864_769866269.220x220.jpg" alt="" class="">
            <h1 class="title">工厂批发J2 5.0寸3G智能手机四核跨境热销低价OEM定制举报</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩66件</span>
                </p>
            </div>
        </div>

        <div class="good-item">
            <img src="https://cbu01.alicdn.com/img/ibank/2018/468/616/9250616864_769866269.220x220.jpg" alt="" class="">
            <h1 class="title">工厂批发J2 5.0寸3G智能手机四核跨境热销低价OEM定制举报</h1>
            <div class="info">
                <p class="price">
                    <span class="now">￥899</span>
                    <span class="old">￥999</span>
                </p>
                <p class="sell">
                    <span>热卖中</span>
                    <span>剩66件</span>
                </p>
            </div>
        </div>
    </div>

</template>

<script>
    
</script>

<style lang="scss" scoped>
.goods-list{
    display: flex;
    flex-wrap: wrap;
    padding: 7px;
    justify-content: space-between;
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

<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item v-for="item in lunbotuList" :key="item.url">
                <img :src="item.img" :class="{fall : isfull}">
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>
export default{
    props : [
        'lunbotuList','isfull'
    ]
};
</script>

<style lang="scss" scoped>
.mint-swipe{
    height: 200px;

    .mint-swipe-item{
        text-align: center;
        img{
            height: 100%;
            // width: 100%;
        }
    }

}
.fall{
    width: 100%;
}
</style>

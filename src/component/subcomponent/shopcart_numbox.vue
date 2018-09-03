<template>
    <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" :value="initcount" @change="changeValue" ref="numbox" readonly/>
        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
    </div>      
</template>

<script>
import mui from '../../lib/mui/js/mui.min.js'
export default{
    mounted() {
        mui(".mui-numbox").numbox();
    },
    methods:{
       changeValue(){
        //    console.log(this.$refs.numbox.value)   // 拿到当前改变的值
        // 此时，需要将改变的值保存到store中去
        this.$store.commit('updateGoodsInfo',{id:this.goodsinfoId,count:this.$refs.numbox.value})
       }
    },
    props : [
        "max","initcount","goodsinfoId"
    ]
}
</script>

<style lang="scss" scoped>

</style>

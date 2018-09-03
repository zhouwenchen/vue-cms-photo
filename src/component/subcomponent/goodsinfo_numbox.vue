<template>

    <div class="mui-numbox" data-numbox-min='1'>
        <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
        <input id="test" class="mui-input-numbox" type="number" value="1" @change="changeValue" ref="numbox"/>
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
        // 每当文本框中的数据被改变了，就传递到 父组件
       changeValue(){
        //    console.log(this.$refs.numbox.value)
        // console.log(this.max)
        this.$emit('getCount',parseInt(this.$refs.numbox.value))
       }
    },
    props : [
        "max"
    ],
    // 父组件 向 子组件 传值 
    watch : {
        max : function(newVal,oldVal){
            mui(".mui-numbox").numbox().setOption("max",newVal);
        }
    }
}
</script>

<style lang="scss" scoped>

</style>

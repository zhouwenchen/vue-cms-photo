<template>
    <div>
        <div id="slider" class="mui-slider">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', item.id == 0?'mui-active':'']" v-for="item in cates" :key="item.id">
							{{item.title}}
						</a>
				
					</div>
				</div>

			</div>
    </div>
</template>

<script>
// 导入mui的js文件
import mui from '../../lib/mui/js/mui.min.js'


    export default{
        data (){
            return {
                cates : []
            }
        },
        created(){
            this.getAllCategory()
        },
        mounted(){// 等待dom元素加载完成之后，才可以去执行
            mui('.mui-scroll-wrapper').scroll({
                deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            });
        },
        methods:{
            getAllCategory(){
                this.$http.get('http://localhost:8892/api/getcategory').then(result => {
                    // 需要手动拼接一个全部的按钮
                    if(result.body.status === 0){
                        result.body.message.unshift({title : '全部',id : 0});
                        this.cates = result.body.message;
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
</style>

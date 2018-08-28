<template>
    <div class="app-container">
        <!-- 头部Header的组件-->
        <mt-header fixed title="黑马程序员.vue项目"></mt-header>

        <!-- 中间的组件-->
		<transition mode="out-in">
			<router-view></router-view>
		</transition>

        <!-- 底部的组件-->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-llb" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/member">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-llb" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
export default {
   
}
</script>

<style lang="scss" scoped>
.mint-header{
    z-index: 99;
}
.app-container{
    padding-top: 40px;
	overflow: hidden;
}

// 切换效果
.v-enter{
	opacity: 0;
	transform: translateX(100%);
}

.v-leave-to{
	opacity: 0;
	transform: translateX(-100%);
	position: absolute;
}

.v-enter-active,
.v-leave-active{
	transform: all 1s ease;
}

// 改类名，当滑动条可以滑动，但是解决tabbar无法滑动的问题
.mui-bar-tab .mui-tab-item-llb.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-llb {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-llb .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-llb .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
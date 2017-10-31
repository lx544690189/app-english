<template>
	<div>
		<m-header fixed>
			<div slot="center" style="color:teal">
				<span>logo</span>
			</div>
		</m-header>
		<transition name="fade">
			<router-view></router-view>
		</transition>
		<mt-tabbar v-model="tab" fixed>
			<mt-tab-item id="/home">
				<i slot="icon" class="iconfont">&#xe609;</i> 首页
			</mt-tab-item>
			<mt-tab-item id="/lecture">
				<i slot="icon" class="iconfont">&#xe797;</i> 课程
			</mt-tab-item>
			<mt-tab-item id="/teacher">
				<i slot="icon" class="iconfont">&#xe657;</i> 老师
			</mt-tab-item>
			<mt-tab-item id="/usercenter">
				<i slot="icon" class="iconfont">&#xe60a;</i> 我的
			</mt-tab-item>
		</mt-tabbar>
	</div>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			tab: '/home',
			swipestyle: {
				width: '100%',
				height: document.body.clientWidth * 0.4 + 'px'
			}
		}
	},
	created(){

	},
	watch: {
		tab: function(val) {
			this.$router.replace(val)
		}
	},
	created() {
		if (this.$router.history.current.path != '/') {
			this.tab = this.$router.history.current.path
		}
		this.$router.replace(this.tab)
	}
}
</script>

<style scoped>
.foot-bar {
	display: flex;
}

.foot-bar .item {
	flex: 1;
	text-align: center;
	padding-top: 2px;
	color: #616161;
}

.foot-bar .item.active {
	color: teal;
}

.foot-bar .item .iconfont {
	font-size: 1.2em;
	display: block;
	margin-bottom: -2px;
}

.foot-bar .item span {
	font-size: 0.7em;
}
</style>

<template>
	<m-container header footer>
		<div class="user">
			<div class="avatar">
				<img src="../assets/imgs/userface.png">
			</div>
			<mt-badge size="small" class="level">高级会员</mt-badge>
			<div class="user-name">
				昵称
			</div>
			<div class="user-info">
				已学课时：268小时
			</div>
		</div>
		
		<mt-cell title="系统通知" is-link>
			<mt-badge size="small" type="warning">3</mt-badge>
			<i slot="icon" class="iconfont icon">&#xe600;</i>
		</mt-cell>
		<mt-cell title="我的课程" is-link>
			<span class="note alert">今日有课</span>
			<i slot="icon" class="iconfont icon">&#xe797;</i>
		</mt-cell>
		<div class="history">
			<div class="card">
				<div class="title">皮克斯动画的成功秘诀</div>
				<div class="time"><i class="iconfont">&#xe61b;</i>20分钟前</div>
			</div>
			<div class="card">
				<div class="title">food and talk</div>
				<div class="time"><i class="iconfont">&#xe61b;</i>5个小时前</div>
			</div>
			<div class="card">
				<div class="title">《老人与海》-- 第32天</div>
				<div class="time"><i class="iconfont">&#xe61b;</i>两天前</div>
			</div>
			<div class="card">
				<div class="title">《老人与海》-- 第33天</div>
				<div class="time"><i class="iconfont">&#xe61b;</i>两天前</div>
			</div>
			<div class="card">
				<div class="title">《老人与海》-- 第34天</div>
				<div class="time"><i class="iconfont">&#xe61b;</i>两天前</div>
			</div>
		</div>
		<mt-cell title="关注老师" is-link>
			<span class="note">5个关注</span>
			<i slot="icon" class="iconfont icon">&#xe61d;</i>
		</mt-cell>
		<mt-cell title="账号设置" is-link>
			<i slot="icon" class="iconfont icon">&#xe618;</i>
		</mt-cell>
		<mt-cell title="联系客服" is-link>
			<i slot="icon" class="iconfont icon">&#xe634;</i>
		</mt-cell>
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			text: 'hello'
		}
	}
}
</script>

<style scoped>
.user {
	position: relative;
	height: 150px;
	background: #80cbc4;
}

.avatar {
	width: 60px;
	margin: 0 auto;
	padding-top: 10px;
}

.avatar img {
	width: 100%;
}

.user-name {
	text-align: center;
	margin-top: 15px;
	color: #fff;
	font-weight: bold;
}

.user-info {
	text-align: center;
	margin-top: 10px;
	color: #f5f5f5;
	font-size: 0.8em;
}

.level {
	position: absolute;
	right: 20px;
	top: 20px;
}

.iconfont.icon {
	font-size: 16px;
	margin: 0 5px;
}

.note {
	font-size: 0.8em;
}

.note.alert {
	color: #ff9800;
}

.history {
	white-space: nowrap;
	overflow-x: scroll;
	overflow-y: hidden;
	padding: 10px;
	height: 70px;
}

.history::-webkit-scrollbar {
	display: none;
}

.card {
	background: #fff;
	width: 40%;
	height: 70px;
	display: inline-block;
	margin-left: 10px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.01), 0 1px 1px -1px rgba(0, 0, 0, 0.06);
}

.card .title {
	margin: 10px;
	white-space: initial;
	font-size: 0.8em;
	line-height: 14px;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	color: #616161;
	height: 28px;
}

.card .time {
	padding: 0 20px;
	text-align: right;
	font-size: 0.7em;color: #9e9e9e;
}
.card .time .iconfont{
	font-size: 1em;
	margin-right: 2px;
}
</style>

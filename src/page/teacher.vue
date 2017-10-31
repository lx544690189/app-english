<template>
	<m-container header footer>
		<div class="select-content">
			<mt-button :type="item.selecte?'primary':'default'" class="bt-select" v-for="(item,index) in selecte" :key="index" @click="item.selecte=!item.selecte">{{ item.text }}</mt-button>
		</div>
		<div style="padding:10px;">
			<mt-button plain type="primary" size="small" style="width:100%" @click="$router.push('/lecture/teacher/quickOrder')">快速预约</mt-button>
		</div>
		<ul class="list">
			<li class="item">
				<div class="card" @click="$router.push('/teacher/detail')">
					<div class="avatar">
						<img src="../assets/imgs/teacher_2.jpg">
					</div>
					<div class="teacher-name">
						Micheal-Mike
					</div>
					<div class="evaluate">
						评价：
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
					</div>
					<div class="lecture-info">
						课时 ： 78小时
					</div>
					<div class="fee-info">
						资费 ：
						<span class="fee">￥108/小时</span>
					</div>
				</div>
			</li>
			<li class="item">
				<div class="card" @click="$router.push('/teacher/detail')">
					<div class="avatar">
						<img src="../assets/imgs/teacher_1.jpg">
					</div>
					<div class="teacher-name">
						Hanna
					</div>
					<div class="evaluate">
						评价：
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star">&#xe607;</i>
					</div>
					<div class="lecture-info">
						课时 ： 78小时
					</div>
					<div class="fee-info">
						资费 ：
						<span class="fee">￥108/小时</span>
					</div>
				</div>
			</li>
			<li class="item" v-for="i in 10" :key="i">
				<div class="card" @click="$router.push('/teacher/detail')">
					<div class="avatar">
						<img src="../assets/imgs/teacher_2.jpg">
					</div>
					<div class="teacher-name">
						Micheal-Mike
					</div>
					<div class="evaluate">
						评价：
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
					</div>
					<div class="lecture-info">
						课时 ： 78小时
					</div>
					<div class="fee-info">
						资费 ：
						<span class="fee">￥108/小时</span>
					</div>
				</div>
			</li>
		</ul>
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			selecte: [{
				text: '现在可预约',
				selecte: true
			}, {
				text: '职业教师',
				selecte: false
			}, {
				text: '英国',
				selecte: false
			}, {
				text: '美国',
				selecte: false
			}]
		}
	}
}
</script>

<style scoped>
.select-content {
	padding: 5px 10px;
}

.bt-select.mint-button {
	height: 25px;
	font-size: 0.8em;
	margin: 5px;
}

ul.list {
	margin: 0;
	padding: 0;
	display: flex;
	flex-flow: row wrap;
}

ul.list>li.item {
	list-style: none;
	width: 50%;
	overflow: hidden;
}

.card {
	background: #fff;
	margin: 10px;
	box-shadow: 0 1px 2px rgba(0, 0, 0, .2);
	border-radius: 4px;
	position: relative;
	overflow: hidden;
	padding-bottom: 10px;
}

.avatar {
	position: relative;
	width: 100%;
}

.avatar>img {
	width: 100%;
	display: block;
}

.teacher-name {
	position: relative;
	padding: 5px 10px;
	font-size: 0.8em;
	text-align: center;
	background: #fafafa;
}

.teacher-name::after {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 1px;
	background: #e0e0e0;
	transform: scaleY(0.5);
}

.evaluate {
	font-size: 0.8em;
	padding: 5px 10px;
}

.iconfont.star {
	font-size: 1em;
	color: #bdbdbd;
}

.iconfont.star.active {
	color: #ff9800;
}

.lecture-info,
.fee-info {
	padding: 5px 10px;
	font-size: 0.8em;
	color: #757575;
}

.fee {
	color: #ef6c00;
}
</style>

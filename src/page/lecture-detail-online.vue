<template>
	<m-container header footer style="background: #eeeeee;height:100%;">
		<m-header fixed>
			<div slot="center">
				<span>在线课堂</span>
			</div>
		</m-header>
		<div class="teacher">
			<div class="base-info">
				<div class="avatar">
					<img src="../assets/imgs/userface.png">
					<div class="teacher-name">Hanna</div>
				</div>
				<ul class="info">
					<li class="lecture-title">iPhoneX 还有哪些槽点？</li>
					<li>参与人数：536</li>
					<li>课程评价：
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
					</li>
				</ul>
			</div>
		</div>
		<m-chat></m-chat>
		<m-chat-input></m-chat-input>
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			t:1
		}
	},
	methods: {
		
	}
}
</script>

<style scoped>
.teacher {
	background: #fff;
}

.base-info {
	display: flex;
}

.base-info .avatar {
	width: 100px;
	padding: 10px 20px;
	box-sizing: border-box;
}

.base-info .avatar img {
	width: 100%;
	display: block;
}

.base-info .teacher-name {
	text-align: center;
	font-size: 0.9em;
}

.base-info ul.info {
	flex: 1;
	margin: 10px;
	padding: 0;
	font-size: .9em;
}

.base-info ul.info li {
	list-style: none;
	padding: 5px 0;
	font-size: 0.9em;
	color: #757575;
}

.base-info ul.info li.lecture-title {
	font-size: 1em;
	color: initial;
}

.iconfont.star {
	font-size: 1em;
	color: #bdbdbd;
}

.iconfont.star.active {
	color: #ff9800;
}










/** chat **/




</style>

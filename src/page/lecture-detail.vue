<template>
	<m-container header>
		<m-header fixed>
			<a slot="left" @click="$router.go(-1)">
				<i class="iconfont">&#xe63e;</i>返回
			</a>
			<div slot="center">
				<span>课程详情</span>
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
					<li v-if="$route.query.state=='waitting'">开始时间：2017年9月17日14:08:07</li>
					<li v-if="$route.query.state=='over'">课程评价：
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
						<i class="iconfont star active">&#xe607;</i>
					</li>
				</ul>
			</div>
			<div class="time-info">
				<mt-button v-if="$route.query.state=='waitting'" size="small" :type="time==0?'primary':'default'" @click="$route.query.state=='waitting'&&time==0&&$router.push('/lecture/detail/online')" style="width:100%">
					<template v-if="time!=0">离开课还有：00:0{{ time }}</template>
					<template v-else>进入课程</template>
					<template v-if="$route.query.state=='over'">课程已结束</template>
				</mt-button>
				<mt-button v-if="$route.query.state=='over'" size="small" type="default" @click="$router.push('/lecture/detail/online')" style="width:100%">
					课程已结束，回顾此课
				</mt-button>
			</div>
		</div>

		<m-card class="lecture-detail">
			<span slot="title" class="lecture-detail-title">课程介绍</span>
			<div slot="content">
				this is the lecture detail this is the lecture detail this is the lecture detail this is the lecture detail this is the lecture detail this is the lecture detail this is the lecture detail this is the lecture detail
			</div>
		</m-card>
		<m-card class="lecture-detail">
			<span slot="title" class="lecture-detail-title">用户评价</span>
			<m-evaluate slot="content" v-if="$route.query.state=='over'">
			</m-evaluate>
			<div slot="content" v-if="$route.query.state=='waitting'" style="line-height:100px;text-align:center;color:grey">
				课程还未结束
			</div>
		</m-card>
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			time: 9
		}
	},
	mounted() {
		let timer = setInterval(() => {
			this.time--
			if (this.time == 0) {
				clearInterval(timer)
			}
		}, 1000)
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

.time-info {
	padding: 10px;
}

.lecture-detail {
	margin: 10px 0;
}

.lecture-detail-title {
	color: teal;
}
</style>

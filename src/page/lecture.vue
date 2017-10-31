<template>
	<m-container header footer>
		<mt-navbar v-model="selected" class="m-navbar">
			<mt-tab-item id="1">在线课堂</mt-tab-item>
			<mt-tab-item id="2">作业练习</mt-tab-item>
			<mt-tab-item id="3">专业英语</mt-tab-item>
			<mt-tab-item id="4">商务英语</mt-tab-item>
		</mt-navbar>

		<!-- tab-container -->
		<mt-tab-container v-model="selected" class="m-tab-container">
			<mt-tab-container-item id="1">
				<div class="loading" v-show="loading">
					<mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
				</div>
				<transition-group name="fade">
					<div class="lecture-type-info" v-show="!loading" :key="0">
						tips：在线课堂，实时与老师文字语音沟通
					</div>
					<div v-show="!loading" class="lecture" v-for="i in 5" :key="i" @click="toDetail(i)">
						<div class="title">
							皮克斯动画
							<mt-badge size="small" type="warning" v-if="i <= 2">今天</mt-badge>
							<mt-badge size="small" color="#9e9e9e" v-if="i > 2">已结束</mt-badge>
							<span class="evaluate" v-if="i > 2">
								<em class="person-num">68人参加</em>4.9分</span>
						</div>
						<div class="content">
							<div class="img">
								<img src="../assets/imgs/userface.png" alt="">
							</div>
							<div class="info">
								<ul>
									<li class="name">
										<i class="iconfont">&#xe61a;</i> Hanna
										<span class="lab">英国</span>
										<span class="lab">职业教师</span>
									</li>
									<li class="description">
										this is the description this is the description this is the description ...
									</li>
									<li class="time">
										时间：2017-09-12 20:00:00
									</li>
								</ul>
							</div>
						</div>
					</div>
				</transition-group>
			</mt-tab-container-item>
			<mt-tab-container-item id="2">
				<div class="loading" v-show="loading">
					<mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
				</div>
				<transition-group name="fade">
					<div class="lecture-type-info" v-show="!loading" :key="0">
						tips：根据题目，练习发音，老师给您订正
					</div>
					<div v-show="!loading" class="lecture" v-for="i in 10" :key="i">
						<div class="title">
							温故知新特辑
							<span class="evaluate">
								<em class="person-num">1453人参加</em>4.8分</span>
						</div>
						<div class="content">
							<div class="img">
								<img src="../assets/imgs/userface.png">
							</div>
							<div class="info">
								<ul>
									<li class="name">
										<i class="iconfont">&#xe61a;</i> Hanna
										<span class="lab">美国</span>
										<span class="lab">职业教师</span>
									</li>
									<li class="description">
										this is the description this is the description this is the description ...
									</li>
									<li class="time">
										时间：2017-09-13 20:00:00
									</li>
								</ul>
							</div>
						</div>
					</div>
				</transition-group>
			</mt-tab-container-item>
			<mt-tab-container-item id="3">
				<div class="loading" v-show="loading">
					<mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
				</div>
				<transition-group name="fade">
					<div v-show="!loading" class="lecture" v-for="i in 10" :key="i">
						<div class="title">
							皮克斯动画的成功秘诀
							<span class="evaluate">
								<em class="person-num">2468人参加</em>4.9分</span>
						</div>
						<div class="content">
							<div class="img">
								<img src="../assets/imgs/userface.png" alt="">
							</div>
							<div class="info">
								<ul>
									<li class="name">
										<i class="iconfont">&#xe61a;</i> Hanna
										<span class="lab">英国</span>
										<span class="lab">职业教师</span>
									</li>
									<li class="description">
										this is the description this is the description this is the description ...
									</li>
									<li class="time">
										时间：2017-09-12 20:00:00
									</li>
								</ul>
							</div>
						</div>
					</div>
				</transition-group>
			</mt-tab-container-item>
			<mt-tab-container-item id="4">
				<div class="loading" v-show="loading">
					<mt-spinner type="triple-bounce" color="#26a2ff"></mt-spinner>
				</div>
				<transition-group name="fade">
					<div v-show="!loading" class="lecture" v-for="i in 10" :key="i">
						<div class="title">
							皮克斯动画的成功秘诀
							<span class="evaluate">
								<em class="person-num">2468人参加</em>4.9分</span>
						</div>
						<div class="content">
							<div class="img">
								<img src="../assets/imgs/userface.png" alt="">
							</div>
							<div class="info">
								<ul>
									<li class="name">
										<i class="iconfont">&#xe61a;</i> Hanna
										<span class="lab">英国</span>
										<span class="lab">职业教师</span>
									</li>
									<li class="description">
										this is the description this is the description this is the description ...
									</li>
									<li class="time">
										时间：2017-09-12 20:00:00
									</li>
								</ul>
							</div>
						</div>
					</div>
				</transition-group>
			</mt-tab-container-item>
		</mt-tab-container>
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			selected: "0",
			loading: false
		}
	},
	mounted() {
		this.selected = '1'
	},
	watch: {
		selected: function(val) {
			this.loading = true
			setTimeout(() => {
				this.loading = false
			}, 500);
		}
	},
	methods: {
		toDetail(i) {
			this.$router.push({
				path: "lecture/detail",
				query: {
					state: i>2?'over':'waitting'
				}
			})
		}
	}
}
</script>

<style scoped>
.m-navbar {
	position: fixed;
	top: 45px;
	left: 0;
	right: 0;
	z-index: 10;
}

.m-tab-container {
	margin-top: 50px;
}

.lecture {
	background: #fff;
	margin: 15px 10px;
	border-radius: 2px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.01), 0 1px 1px -1px rgba(0, 0, 0, 0.06);
}

.lecture>.title {
	position: relative;
	padding: 10px 15px;
	color: #26a2ff;
	font-size: 0.9em;
}

.lecture>.title::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1px;
	transform: scaleY(0.5);
	background: #eeeeee;
}

.lecture>.title .evaluate {
	color: #ffb74d;
	font-size: 0.8em;
	float: right;
	line-height: 1;
	margin-top: 2px;
}

.lecture>.content {
	display: flex;
	padding: 10px;
}

.lecture>.content>.img {
	width: 50px;
	height: 50px;
	padding: 5px 0;
}

.lecture>.content>.img img {
	width: 100%;
}

.lecture>.content>.info {
	flex: 1;
}

.lecture>.content>.info ul {
	margin: 0;
	padding: 0 10px;
	font-size: 0.8em;
}

.lecture>.content>.info ul li {
	list-style: none;
	margin: 0;
	padding: 0;
}

.lecture>.content>.info ul li .lab {
	color: #9e9e9e;
	margin-left: 5px;
	font-size: 0.9em;
}

.lecture>.content>.info ul li.description {
	color: #616161;
	font-size: 0.9em;
	padding: 10px 0;
}

.lecture>.content>.info ul li.time {
	color: #616161;
	font-size: 0.9em;
}

.person-num {
	color: #9e9e9e;
	margin-right: 10px;
}

.loading {
	text-align: center;
	padding: 40% 0;
}

.lecture-type-info{
	margin: 10px;
	padding: 15px 5px;
	font-size: 0.8em;
	background: #ffe0b2 ;
	color: #616161;
	border-radius: 5px;
}
</style>

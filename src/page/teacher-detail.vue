<template>
	<m-container>
		<div class="teacher">
			<img src="../assets/imgs/userface.png" class="avatar">
			<div class="content">
				<div class="name">Micheal-Mike</div>
				<ul class="info">
					<li>
						<div class="big">4.9</div>
						<div class="small">
							<i class="iconfont star active">&#xe607;</i>
							<i class="iconfont star active">&#xe607;</i>
							<i class="iconfont star active">&#xe607;</i>
							<i class="iconfont star active">&#xe607;</i>
							<i class="iconfont star active">&#xe607;</i>
						</div>
					</li>
					<li>
						<div class="big">108小时</div>
						<div class="small">完成课时</div>
					</li>
					<li>
						<div class="big">28</div>
						<div class="small">学生</div>
					</li>
				</ul>
				<div class="option">
					<mt-button plain size="small">联系教师</mt-button>
					<mt-button size="small" type="primary">预约课程</mt-button>
				</div>
			</div>
		</div>
		<m-card :title="false" shadow>
			<ul class="information" slot="content">
				<li>教学专长：
					<mt-badge size="small" color="#80cbc4">商务</mt-badge>
					<mt-badge size="small" color="#80cbc4">备考</mt-badge>
					<mt-badge size="small" color="#80cbc4">IELTS</mt-badge>
					<mt-badge size="small" color="#80cbc4">CAE</mt-badge>
				</li>
				<li>个人标签：
					<mt-badge size="small" color="#80cbc4">Supportive</mt-badge>
					<mt-badge size="small" color="#80cbc4">Attentive</mt-badge>
					<mt-badge size="small" color="#80cbc4">Competent</mt-badge>
					<mt-badge size="small" color="#80cbc4">Honest</mt-badge>
					<mt-badge size="small" color="#80cbc4">Punctual</mt-badge>
					<mt-badge size="small" color="#80cbc4">Prepared</mt-badge>
				</li>
				<li>自我介绍：
					<p>
						If you keep studying German like you did until now, you will get the same results!
						<ul>
							<li>Are you unhappy with the results of your current learning method?</li>
							<li>Are you doing a bit here and there without any strategy?</li>
							<li>Do you have doubts about your German pronunciatioFn?</li>
							<li>Is German grammar a book of seven seals to you?</li>
						</ul>

						Then my German lessons are perfect for you!
					</p>
				</li>
			</ul>
		</m-card>

		<mt-navbar v-model="active" style="margin-top:10px">
			<mt-tab-item id="container1">可预约课时</mt-tab-item>
			<mt-tab-item id="container2">免费课时</mt-tab-item>
		</mt-navbar>
		<mt-tab-container swipeable v-model="active">
			<mt-tab-container-item id="container1">
				<mt-cell title="lecture one" is-link @click.native="toLecture(1)">
					1.5 hours
					<span style="color: #ff9800 ">￥180</span>
				</mt-cell>
				<mt-cell title="lecture two" is-link @click.native="toLecture(1)">
					2 hours
					<span style="color: #ff9800 ">￥280</span>
				</mt-cell>
				<mt-cell title="lecture three" is-link @click.native="toLecture(1)">
					3 hours
					<span style="color: #ff9800 ">￥180</span>
				</mt-cell>
			</mt-tab-container-item>
			<mt-tab-container-item id="container2">
				<mt-cell title="lecture one" is-link @click.native="toLecture(3)">
					1 hour
				</mt-cell>
				<mt-cell title="lecture two" is-link @click.native="toLecture(3)">
					2 hours
				</mt-cell>
				<mt-cell title="lecture three" is-link @click.native="toLecture(3)">
					3 hours
				</mt-cell>
			</mt-tab-container-item>
		</mt-tab-container>

		<m-card shadow style="margin-top:10px">
			<span slot="title" class="lecture-detail-title">学生评价</span>
			<m-evaluate slot="content">
			</m-evaluate>
		</m-card>
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			active: 'container1'
		}
	},
	methods: {
		toLecture(i) {
			this.$router.push({
				path: "/lecture/detail",
				query: {
					state: i > 2 ? 'over' : 'waitting'
				}
			})
		}
	}
}
</script>

<style scoped>
.teacher {
	position: relative;
	background: #fff;
	margin: 50px 10px 10px 10px;
	padding-top: 40px;
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.01), 0 1px 1px -1px rgba(0, 0, 0, 0.16);
}

.teacher .avatar {
	position: absolute;
	top: -40px;
	left: 50%;
	width: 80px;
	transform: translateX(-45px);
}

.teacher .content {
	text-align: center;
}

.teacher .content .name {
	font-size: 1.1em;
	padding: 5px 0;
}

ul.info {
	margin: 0;
	padding: 0;
	display: flex;
	margin-top: 10px;
}

ul.info>li {
	display: inline-block;
	list-style: none;
	border-right: 1px solid #e1e1e1;
	flex: 1;
	padding: 10px 0;
}

ul.info>li:last-of-type {
	border-right: none;
}

ul.info>li .big {
	font-size: 1em;
}

ul.info>li .small {
	font-size: 0.9em;
	padding-top: 10px;
	color: #757575;
}

.iconfont.star {
	font-size: 1em;
	color: #bdbdbd;
}

.iconfont.star.active {
	color: #ff9800;
}

.teacher .option {
	padding: 20px 0;
	display: flex;
}

.teacher .option .mint-button {
	flex: 1;
	margin: 0 20px;
}

ul.information {
	margin: 10px;
	padding: 0;
}

ul.information>li {
	list-style: none;
	padding: 15px 0;
	border-bottom: 1px solid #e1e1e1;
}

ul.information>li .mint-badge {
	margin-top: 5px;
}

ul.information>li p {
	color: #616161;
	font-size: 0.9em;
}

ul.information>li p ul {
	padding-left: 20px;
	margin: 10px 0;
}

ul.information>li p ul li {
	list-style: none;
}
</style>

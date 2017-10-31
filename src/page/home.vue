<template>
	<m-container header footer>
		<mt-swipe :auto="4000" :style="swipestyle">
			<mt-swipe-item>
				<img class="swiper-img" src="../assets/imgs/banner_1.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img class="swiper-img" src="../assets/imgs/banner_2.jpg" />
			</mt-swipe-item>
			<mt-swipe-item>
				<img class="swiper-img" src="../assets/imgs/banner_3.jpg" />
			</mt-swipe-item>
		</mt-swipe>
		<div class="introduce">
			<dl class="des">
				<dt>随时随地，线上学习</dt>
				<dd>英美系外教+情景式互动交流</dd>
				<dd>练习发音、语句，老师帮您订正</dd>
			</dl>
		</div>
		<div class="day-article" @click="article">
			<h5>每日阅读</h5>
			<p>职场英文口语|礼貌的请求(3)</p>
		</div>
		<div class="card">
			<div class="title">课程</div>
			<div class="content">
				<ul class="list">
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/course_1.jpg">
							<div class="course-name">
								实用英语口语
							</div>
							<div class="more">
								3000精选主题试听课任选1节，1对1英语学习规划与指导与指导
							</div>
						</div>
					</li>
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/course_2.jpg">
							<div class="course-name">
								实战商务英语
							</div>
							<div class="more">
								3000精选主题试听课任选1节，1对1英语学习规划与指导与指导
							</div>
						</div>
					</li>
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/course_3.jpg">
							<div class="course-name">
								全能青少英语
							</div>
							<div class="more">
								3000精选主题试听课任选1节，1对1英语学习规划与指导与指导
							</div>
						</div>
					</li>
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/course_4.jpg">
							<div class="course-name">
								零基础英语
							</div>
							<div class="more">
								3000精选主题试听课任选1节，1对1英语学习规划与指导与指导
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="card">
			<div class="title">老师</div>
			<div class="content">
				<ul class="list">
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/teacher_1.jpg">
							<div class="job">
								<i class="iconfont">&#xe61a;</i> 课程顾问
							</div>
							<div class="teacher-name">
								Hanna 谈维春
							</div>
						</div>
					</li>
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/teacher_2.jpg">
							<div class="job">
								<i class="iconfont">&#xe61a;</i> 英语教师
							</div>
							<div class="teacher-name">
								Hanna 谈维春
							</div>
						</div>
					</li>
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/teacher_3.jpg">
							<div class="job">
								<i class="iconfont">&#xe61a;</i> 教务专员
							</div>
							<div class="teacher-name">
								Hanna 谈维春
							</div>
						</div>
					</li>
					<li class="item">
						<div class="block">
							<img src="../assets/imgs/teacher_4.jpg">
							<div class="job">
								<i class="iconfont">&#xe61a;</i> 课程顾问
							</div>
							<div class="teacher-name">
								Hanna 谈维春
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="ads" :class="{show:ads}" @touchmove="touchmove" @click="adsClick">
			<div class="ads-card">
				<img src="../assets/imgs/ads.png">
				<p>新用户注册</p>
				<p>免费领取一节试听课程</p>
				<mt-button size="small" plain type="primary" @click="ads = false">免费领取</mt-button>
			</div>
		</div>
	</m-container>
</template>

<script>
export default {
	name: 'hello',
	data() {
		return {
			ads:false,
			swipestyle: {
				width: '100%',
				height: document.body.clientWidth * 0.4 + 'px'
			}
		}
	},
	mounted(){
		setTimeout(() =>{
			this.ads = true
		}, 1000);
	},
	methods:{
		touchmove(e){
			event.preventDefault();
		},
		adsClick(e){
			if(e.target.className.indexOf('ads-card')!=-1){
				
			}else{
				if(e.target.className)
				this.ads = false
			}
		},
		article(){
			window.location.href='https://mp.weixin.qq.com/s?src=11&timestamp=1506099449&ver=408&signature=m9hLNH25KkuiXWDmLuroARCsqPnipbkw5aFBuGe1iEksBtKZq*Lk3GqQBUEd0QK3-Y0WCIQlr7sVoqWD5kxbWPuIpkwgIQKOGUkW-1AYn4u8GXj9Ljz1Xl4WHs-HDFpw&new=1'
		}
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

.swiper-img[lazy="loading"] {
	width: 40px;
	height: 40px;
	margin: 30px auto;
}

.swiper-img {
	width: 100%;
	display: block;
}

.introduce {
	box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
	margin-bottom: 10px;
	background: #fff;
}

dl.des {
	margin: 0;
	padding: 10px 0;
	text-align: center;
}

dl.des dt {
	margin-bottom: 10px;
	padding: 0;
	color: #2196f3;
	font-weight: bold;
}

dl.des dd {
	margin: 0 0 5px 0;
	padding: 0;
	font-size: 0.8em;
	color: #757575;
}

.card {
	background: #fff;
	margin-bottom: 10px;
}

.card>.title {
	position: relative;
	padding: 10px 10px 10px 30px;
	color: #616161;
}

.card>.title::before {
	content: '';
	position: absolute;
	top: 12px;
	left: 15px;
	bottom: 12px;
	width: 3px;
	background: #009688;
}

.card>.title::after {
	content: '';
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	height: 1px;
	background: #e0e0e0;
	transform: scaleY(0.5);
}

.card>.content {
	padding: 10px;
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
	margin-bottom: 15px;
}

ul.list>li.item .block {
	padding: 0 10px;
	position: relative;
	overflow: hidden;
}

ul.list>li.item .block img {
	width: 100%;
	border-radius: 5px;
}

ul.list>li.item .block .teacher-name,ul.list>li.item .block .course-name{
	font-size: 0.9em;
	text-align: center;
	padding: 5px 0;
}

ul.list>li.item .block .job {
	font-size: 0.7em;
	padding: 0px 5px;
	color: #757575;
}

ul.list>li.item .block .iconfont {
	font-size: 1.2em;
}

ul.list>li.item .block .more {
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
	overflow: hidden;
	font-size: 0.7rem;
	color: #757575;
	height: 2em;
}

.ads{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.5);
	opacity: 0;
	transition: opacity 300ms ease-in-out;
	transform: scale(0);
}

.ads.show{
	opacity: 1;
	transform: scale(1);
}

.ads.hide{
	display: none;
}

.ads-card{
	opacity: 0;
	width: 200px;
	background: #fff;
	margin: 0 auto;
	margin-top: 40%;
	padding: 20px;
	border-radius: 5px;
	transform: scale(0.5);
	text-align: center;
	transition: all 300ms ease-in-out;
}

.ads.show .ads-card{
	opacity: 1;
	transform: scale(1);
}

.ads-card img{
	display: block;
	margin: 0 auto;
	width: 80px;
}
.ads-card p{
	
	font-size: 14px;
}

.day-article{
	background: #fff;
	padding:10px 20px;
	margin-bottom: 10px;
}
.day-article h5{
	font-size: 16px;
	margin: 0;
	color: teal;
}

.day-article p{
	margin: 10px 0;
	font-size: 14px;
}
</style>

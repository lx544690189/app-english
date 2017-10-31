<template>
	<ul class="m-evaluate">
		<li>
			<div class="info">
				<img src="../assets/imgs/userface.png">
				<span>网站用户1</span>
				<span class="star-content">
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
				</span>
			</div>
			<div class="evaluate">
				Today we have analyzed together my essay on International aid and Michael has given to me very useful stylistic advises to improve it. Great lesson!!
			</div>
		</li>
		<li>
			<div class="info">
				<img src="../assets/imgs/userface.png">
				<span>网站用户2</span>
				<span class="star">
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
				</span>
			</div>
			<div class="evaluate">
				'I really enjoyed my first lesson with David! He speaks a clear, standard English (and slow...to begin ;) ) He's very well organized and as soon as I explained the goals I'd like to achieve, he planned our programme! Recommended!'
			</div>
		</li>
		<li>
			<div class="info">
				<img src="../assets/imgs/userface.png">
				<span>网站用户1</span>
				<span class="star">
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
				</span>
			</div>
			<div class="evaluate">
				The teacher was very interesting and answered in great detail
			</div>
		</li>
		<li>
			<div class="info">
				<img src="../assets/imgs/userface.png">
				<span>网站用户2</span>
				<span class="star">
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
					<i class="iconfont star active">&#xe607;</i>
				</span>
			</div>
			<div class="evaluate">
				老师讲的很好！很有耐心！
			</div>
		</li>
	</ul>
</template>

<script>
export default {
	name: 'm-evaluate',
	data() {
		return {
			text: 'hello'
		}
	}
}
</script>

<style scoped>
ul.m-evaluate {
	margin: 0;
	padding: 0;
}

ul.m-evaluate>li {
	position: relative;
	list-style: none;
	padding: 10px 0;
}

ul.m-evaluate>li::after {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1px;
	transform: scaleY(0.5);
	background: #eeeeee;
}

ul.m-evaluate>li .info {
	height: 20px;
	line-height: 20px;
	font-size: 0.9em;
}

ul.m-evaluate>li .info img {
	width: 20px;
	float: left;
	margin: 0 10px;
	display: block;
}

ul.m-evaluate>li .evaluate {
	padding: 10px;
	font-size: 0.9em;
	color: #616161;
}

ul.m-evaluate>li .star{
	float: right;
	font-size: 12px;
	margin-right: 2px;
}

ul.m-evaluate>li .star.active {
	color: #ff9800;
}

</style>

<template>
	<div class="chat">
		<ul>
			<li class="left">
				<div class="user">
					<img src="../assets/imgs/userface.png">
					<span class="name">Hanna</span>
					<span class="time">2017-09-10 23:31:17</span>
				</div>
				<div class="content">
					Apple just announced its latest product lineup the day before yesterday in all-new Apple Campus, at the Steve Jbs Theater. The new iphone8 and iphoneX were criticized by a lot of people.
				</div>
			</li>
			<li class="left">
				<div class="user">
					<img src="../assets/imgs/userface.png">
					<span class="name">Hanna</span>
					<span class="time">2017-09-10 23:31:17</span>
				</div>
				<div class="audio">
					<audio src="http://audio.xmcdn.com/group32/M0B/9F/7E/wKgJS1m6aGiTTOvdABDnxYGhv8E363.m4a" controls="controls">
						Your browser does not support the audio element.
					</audio>
				</div>
			</li>
			<li class="right">
				<div class="user">
					<img src="../assets/imgs/userface_1.png">
					<span class="name">student</span>
					<span class="time">2017-09-10 23:31:17</span>
				</div>
				<div class="content">
					this is my question blablabla...
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'm-chat',
	data() {
		return {
			text: 'hello'
		}
	}
}
</script>

<style scoped>
.chat {
	margin: 10px 0;
	padding: 10px 0;
}

.chat>ul {
	margin: 0;
	padding: 0;
}

.chat>ul>li {
	list-style: none;
	padding: 0;
}

.chat>ul>li.left .user,
.chat>ul>li.right .user {
	height: 30px;
}

.chat>ul>li.left .user img {
	width: 30px;
	padding: 0 10px;
	float: left;
}

.chat>ul>li.right .user img {
	width: 30px;
	padding: 0 10px;
	float: right;
}

.chat>ul>li.left .user .name {
	line-height: 30px;
	float: left;
	padding: 0 5px;
}

.chat>ul>li.right .user .name {
	line-height: 30px;
	float: right;
	padding: 0 5px;
}

.chat>ul>li.left .user .time {
	line-height: 30px;
	float: left;
	padding: 0 10px;
	font-size: 0.9em;
	color: #999;
}

.chat>ul>li.right .user .time {
	float: right;
	line-height: 30px;
	padding: 0 10px;
	font-size: 0.9em;
	color: #999;
}

.chat>ul>li.left .content {
	margin: 10px 10% 10px 10px;
	border-radius: 4px;
	background: #fff;
	padding: 10px;
	font-size: 0.9em;
	line-height: 1.2;
}

.chat>ul>li.right .content {
	margin: 10px 10px 10px 10%;
	border-radius: 4px;
	background: #fff;
	padding: 10px;
	font-size: 0.9em;
}

.chat>ul>li .audio {
	margin: 10px;
	border-radius: 3px;
}

.chat>ul>li .audio>audio {
	width: 80%;
	box-shadow: 1px 1px 1px #e1e1e1;
}
</style>

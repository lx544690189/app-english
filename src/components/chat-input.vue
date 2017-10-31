<template>
	<div class="chat-input">
		<div class="sound">
			<i class="iconfont" v-show="inputType == 'keyboard'" @click="inputTypeChange('sound')">&#xe818;</i>
			<i class="iconfont" v-show="inputType == 'sound'" @click="inputTypeChange('keyboard')">&#xe60d;</i>
		</div>
		<div class="input">
			<input v-show="inputType == 'keyboard'" type="text">
			<button :class="{active:soundReceive}" v-show="inputType == 'sound'" @touchstart="soundStart" @touchend="soundEnd">
				<template v-if="!soundReceive">按住 说话</template>
				<template v-if="soundReceive">松开 发送</template>
			</button>
		</div>
		<div class="send">
			<mt-button type="primary" @click="send">发送</mt-button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'm-chat-input',
	data() {
		return {
			inputType: 'keyboard',
			soundReceive: false,
			toast_soundReceive:null
		}
	},
	methods: {
		inputTypeChange(type) {
			this.inputType = type
		},
		soundStart(e) {
			e.preventDefault();
			this.soundReceive = true
			navigator.vibrate([50, 100])
			this.toast_soundReceive = this.$toast({
				message: '正在录音...',
				position: 'center'
			});
		},
		soundEnd(e) {
			this.soundReceive = false
			navigator.vibrate(0)
			this.toast_soundReceive.close()
		},
		send(){

		}
	}
}
</script>

<style scoped>
.chat-input {
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 50px;
	background: #fff;
	display: flex;
	box-shadow: -1px 2px 2px #e1e1e1
}

.chat-input .sound {
	width: 50px;
	text-align: center;
}

.chat-input .sound .iconfont {
	font-size: 25px;
	line-height: 50px;
}

.chat-input .input {
	flex: 1;
	padding: 10px 5px;
}

.chat-input .input input {
	height: 30px;
	width: 100%;
	box-sizing: border-box;
	border: none;
	border-bottom: 1px solid #bdbdbd;
	font-size: 0.9em;
	outline: none;
}

.chat-input .input input:focus {
	border-bottom: 1px solid #26a2ff;
}

.chat-input .input button {
	height: 30px;
	width: 100%;
	box-sizing: border-box;
	border: 1px solid #e0e0e0;
	background: #fff;
	font-size: 0.9em;
	line-height: 30px;
	border-radius: 5px;
}

.chat-input .input button.active {
	background: #eeeeee;
}

.chat-input .send {
	width: 70px;
	text-align: center;
}

.chat-input .send .mint-button {
	padding: 0;
	font-size: 0.9em;
	height: 30px;
	width: 50px;
	margin: 10px 10px;
}
</style>

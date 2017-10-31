<template>
	<div class="m-card" :class="{'shadow':shadow}">
		<div class="title" v-if="title">
			<slot name="title"></slot>
		</div>
		<div class="content">
			<slot name="content"></slot>
		</div>
	</div>
</template>

<script>
export default {
	name:'m-card',
	props: {
		shadow: {
			type: Boolean,
			default: false
		},
		title: {
			type: Boolean,
			default: true
		}
	},
	data() {
		return {
			text: 'hello'
		}
	}
}
</script>

<style scoped>
.m-card {
	background: #fff;
	border-radius: 2px;
}

.m-card.shadow {
	box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.01), 0 1px 1px -1px rgba(0, 0, 0, 0.06);
}

.m-card>.title {
	position: relative;
	padding: 10px 15px;
	font-size: 0.9em;
}

.m-card>.title::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1px;
	transform: scaleY(0.5);
	background: #eeeeee;
}

.m-card>.content {
	font-size: 0.9em;
	padding: 10px;
}
</style>

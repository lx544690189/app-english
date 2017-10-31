/**
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {boolean} [transparent=false] - 透明
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [center] - 显示在中间区域（可放置img标签）
 * @param {slot} [right] - 显示在右侧区域
 */
<template>
	<div class="m-header" :class="{'fixed':fixed,'hasafter':!transparent}" :style="headerStyle">
		<div class="left">
			<slot name="left"></slot>
		</div>
		<div class="center">
			<slot name="center"></slot>
		</div>
		<div class="right">
			<slot name="right"></slot>
		</div>
	</div>
</template>
<script>
export default {
	name: 'm-header',
	props: {
		fixed: {
			type: Boolean,
			default: false
		},
		transparent: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		headerStyle() {
			if (this.transparent) {
				return { 'backgroundColor': 'rgba(247, 247, 247, 0)' }
			} else {
				return { 'backgroundColor': '#fff' }
			}
		}
	}
}
</script>
<style>
.m-header {
	height: 45px;
	z-index: 10;
	text-align: center;
	overflow: hidden;
	position: relative;
}

.m-header.fixed {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
}

.hasafter::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 1px;
	background-color: #bdbdbd;
	transform: translateY(-0.5px);
	transform: scaleY(0.5);
}

.m-header>.center {
	line-height: 45px;
}

.m-header>.center>img {
	height: 21px;
	margin: 12px 0;
}

.m-header>.left {
	position: absolute;
	left: 0;
	top: 0;
	line-height: 45px;
	padding-left: 10px;
	text-align: left;
}

.m-header>.right {
	position: absolute;
	right: 0;
	top: 0;
	line-height: 45px;
	padding-right: 10px;
	text-align: right;
}

.m-header>.left>a,
.m-header>.right>a {
	color: #26a2ff;
	text-decoration: none
}
</style>
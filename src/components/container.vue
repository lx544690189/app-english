/**
 * @desc 页面容器
 * @param {boolean} [header=false] - 页面是否有header
 * @param {boolean} [footer=false] - 页面是否有footer
 * @param {slot} - 内容区域
 * @param {slot} [fixed] - 页面固定元素
 */
<template>
	<div class="m-container" :class="containerClass">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'm-container',
		props: {
			header: {
				type: Boolean,
				default: false
			},
			footer: {
				type: Boolean,
				default: false
			},
			background: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				containerClass: {
					'hasHeader': this.header,
					'hasFooter': this.footer,
					'hasBackground':this.background
				}
			}
		}
	}
</script>

<style>
	.m-container.hasHeader {
		padding-top: 45px;
	}
	
	.m-container.hasFooter {
		padding-bottom: 55px;
	}
</style>
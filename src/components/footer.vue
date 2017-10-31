<template>
	<div class="m-footer fixed" :class="{'hide':!show}">
		<slot></slot>
	</div>
</template>
<script>
	export default {
		name: 'm-footer',
		props: {
			show: {
				type: Boolean,
				default: true
			}
		}
	}
</script>
<style>
	.m-footer {
		height: 45px;
		background-color: #fff;
		z-index: 10;
		overflow: hidden;
		transform: translate3d(0, 0, 0);
	}
	
	.m-footer.fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
	}
	
	.m-footer::after {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 1px;
		background-color: #bdbdbd;
		transform: scaleY(0.5);
		transform: translateY(-0.5px);
	}
</style>
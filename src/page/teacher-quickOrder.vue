<template>
	<m-container header>
		<m-header fixed>
			<div slot="center">
				<span>快速预约</span>
			</div>
		</m-header>
		<m-card :title="false">
			<template slot="content">请选择预约时间，有教师接受预约后，会第一时间微信消息通知您。预约成功后支付相关课时费用即可开始学习。</template>
		</m-card>
		<mt-cell title="预约当前时间">
			<mt-switch v-model="timeNow"></mt-switch>
		</mt-cell>
		<mt-cell v-show="!timeNow" title="选择其他时间" is-link @click.native="openPicker" :value="timeOthers&&timeOthers.format('yyyy-MM-dd hh:mm')"></mt-cell>
		
		<mt-field label="备注" placeholder="input your other required" type="textarea" rows="3" v-model="note"></mt-field>
		<div style="padding:30px 20px;">
			<mt-button type="primary" style="width:100%" @click="order">预约</mt-button>
		</div>
		<mt-datetime-picker ref="picker" @confirm="timeConfirm" type="datetime" year-format="{value}" month-format="{value} 月" date-format="{value} 日" hour-format="{value} 时" minute-format="{value} 分" :startDate="new Date(new Date().setHours(0,0,0,0))" :endDate="new Date(new Date().getTime() + 1000*60*60*24*7)" v-model="pickerValue">
		</mt-datetime-picker>
		<mt-popup v-model="popupVisible" position="bottom">
			<mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
		</mt-popup>
		
	</m-container>
</template>

<script>
export default {
	data() {
		return {
			timeNow: true,
			timeOthers: null,
			pickerValue: '',
			note: '',
			popupVisible:false,
			slots:[{
				value:['选项一','选项二','选项三','选项四']
			}]
		}
	},
	methods: {
		openPicker() {
			this.$refs.picker.open();
		},
		timeConfirm(time) {
			this.timeOthers = time
		},
		others() {
			this.popupVisible = true
		},
		order() {
			this.$messagebox({
				title: '正在为你匹配预约信息',
				message: '请关注微信消息'
			});
		},
		onValuesChange(){

		}
	}
}
</script>

<style scoped>

</style>

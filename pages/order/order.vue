<template>
	<view class="order-container">
		<view class="order-tabs">
			 <u-sticky bgColor="#fff">
			    <u-tabs :list="tabs" :scrollable="false"></u-tabs>
			  </u-sticky>
		</view>
		<view class="order-list">
			<order-item></order-item>
		</view>
	</view>
</template>

<script>
	import orderItem from '@/components/OrderItem/OrderItem.vue'
	export default {
		data() {
			return {
				orderType:0,
				tabs:[
					{
						name:'全部'
					},
					{
						name:'审核中'
					},{
						name:'已通过'
					},{
						name:'已驳回'
					},
				]
			}
		},
		components: {
			'order-item':orderItem
		},
		onLoad({type}) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#0660FF'
			});
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
.order-container{
	.order-tabs{
		width:100%;
	}
	.order-list{
		margin:20rpx;
	}
}
</style>

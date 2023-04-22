<template>
	<view class="order-item">
		<view class="left">
			<view class="avatar">
				<image src="../../static/WX20230402-125019@2x.png" mode="aspectFit"></image>
			</view>
			<view class="info">
					<text class="title u-line-2">
						快手极速版123啊啊啊啊啊啊啊
					</text>
					
					<view class="time">
						2023-04-05   12:33:21
					</view>
			</view>
		</view>
		<view class="right">
			<!-- <view class="status-1">
				已通过-待打款
			</view> -->
			<!-- <view class="status-2">
				已驳回
			</view> -->
			<view class="status-3">
				审核中
			</view>
			
			<view class="">
				<count-down :endTime="1681995600000" ></count-down>
			</view>
			
			
			<view class="price">
				28.8
			</view>
		</view>
	</view>
</template>

<script>
	import CountDown from '@/components/CountDown/CountDown.vue'
	export default {
		name:"OrderItem",
		data() {
			return {
				
			};
		},
		components: {
			'count-down':CountDown
		},
	}
</script>

<style lang="scss" scoped>
.order-item{
	background-color: #ffffff;
	padding:20rpx;
	border-radius:20rpx;
	display: flex;
	justify-content: space-between;
	padding-top:30rpx;
	.left{
		display: flex;
		.avatar{
			image{
				border-radius:20rpx;
				width:140rpx;
				height:140rpx;
			}
		}
		.info{
			display: inline-flex;
			flex-flow: column;
			padding-left:20rpx;
			
			justify-content: space-between;
			.title{
				max-width: 280rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				font-size: 28rpx;
				font-weight: bold;
				
			}
			.time{
				color:#909090;
				font-size: 26rpx;
			}
		}
	}
	.right{
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		align-items: flex-end;
		
		.status-1{
			color:#00A312;
			
		}
		.status-2{
			color:#6B6B6B;
		}
		.status-3{
			color:#F6390D;
		}
		.price{
			font-size: 32rpx;
			font-weight: bold;
			&::before{
				content: '￥';
				font-size: 24rpx;
			}
		}
	}
}
</style>
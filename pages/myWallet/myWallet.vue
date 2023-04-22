<template>
	<view class="wallet-container">
		<view class="wallet-card">
			<view class="left">
				<text class="label">我的余额</text>
				<view class="price">999元</view>
			</view>
			<view class="right"><u-button :customStyle="customStyle" plain text="提现" color="#3B7DF7" @click="onDeposit"></u-button></view>
		</view>
		<view class="wallet-list">
			<view class="tabs"><u-tabs :list="tabs" :scrollable="false"></u-tabs></view>
			<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y" @scrolltolower="lower">
				<view class="wallet-list-item" v-for="item in 20">
					<view class="info">
						<view class="name u-line-1">用户12312312312312提交订单分成</view>
						<view class="time">2012-09-09</view>
					</view>
					<view class="price">+ 1.00元</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			scrollTop: 0,
			tabs: [
				{
					name: '收益记录'
				},
				{
					name: '提现记录'
				}
			],
			customStyle: {
				color: '#ffffff'
			}
		};
	},
	onLoad({ type }) {
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#0660FF'
		});
	},
	methods: {
		onDeposit(){
			uni.navigateTo({
				url:'/pages/withdrawDeposit/withdrawDeposit'
			})
		},
		lower() {
			console.log('到底了');
		}
	}
};
</script>

<style lang="scss" scoped>
.wallet-container {
	padding: 20rpx;
}
.wallet-card {
	background-color: #5c72fb;
	border-radius: 20rpx;
	color: #ffffff;
	padding: 40rpx 80rpx;
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		.label {
			font-size: 30rpx;
		}
		.price {
			font-size: 65rpx;
			font-weight: bold;
		}
	}
	.right {
		width: 140rpx;
	}
}
.wallet-list {
	margin-top: 20rpx;
	.tabs {
		background-color: #ffffff;
	}
	.scroll-Y {
		height: calc(100vh - 350rpx);
	}
	.wallet-list-item {
		background-color: #ffffff;
		padding: 30rpx 40rpx;
		margin-top: 20rpx;
		height: 100rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		.info {
			display: flex;
			flex-flow: column;
			justify-content: space-between;
			.name {
				font-size: 32rpx;
				max-width: 320rpx;
			}
			.time {
				margin-top: 20rpx;
				font-size: 28rpx;
				color: #999999;
			}
		}
		.price {
			color: #00a312;
			font-size: 40rpx;
		}
		.price-red {
			color: #ff5252;
		}
	}
}
</style>

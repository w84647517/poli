<template>
	<view class="share-container" style="background-image: url('../../static/shareBg.png');">
		<view class="share-qrcode">
			<view class="share-xcxm"></view>
			<view class="share-sm"></view>
		</view>

		<view class="share-btn"><u-button @click="onSaveCode" shape="20" size="large" color="#213C6B" border>保存图片</u-button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		onSaveCode() {}
	}
};
</script>

<style lang="less" scoped>
.share-container {
	position: relative;
	top: 0;
	width: 100%;
	height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;

	.share-bg {
		width: 100%;
		height: 100vh;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.share-qrcode {
		position: absolute;
		bottom: 200rpx;
		border: 1px solid red;
		background-image: url('../../static/ewm.png');
		background-size: 100% 100%;
		width: 600rpx;
		left: 50%;
		margin-left: -300rpx;
		height: 650rpx;
		.share-xcxm {
			width: 400rpx;
			height: 400rpx;
			position: absolute;
			top: 40rpx;
			left: 100rpx;
			border: 1px solid red;
		}
		.share-sm {
			height: 120rpx;
			position: absolute;
			background-size: 90% 100%;
			background-position: center center;
			background-repeat: no-repeat;
			bottom: 20rpx;
			width: 100%;
			background-image: url('../../static/sm.png');
		}
	}
	.share-btn {
		width: 600rpx;
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		bottom: 80rpx;
	}
}
</style>

<template>
	<view class="tx-container">
		<view class="tx-card">
			
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		onLoad({ type }) {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#0660FF'
			});
		},
	}
</script>

<style lang="scss">
	.tx-container{
		margin:20rpx;
		.tx-card{
			background-color: #ffffff;
		}
	}
</style>

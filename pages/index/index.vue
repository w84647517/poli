<template>
	<view class="index-container">
		<view class="status_bar bar-color"></view>
		<view class="index-header" :style="{ paddingTop: searchStyle.top + 'px' }">
			<view class="index-header-search" :style="{ width: searchStyle.width + 'px' }">
				<u-search placeholder="请输入搜索内容" @search="onSearch" :showAction="false" v-model="searchText"></u-search>
			</view>
		</view>

		<view class="index-swiper" :style="{ paddingTop: swiperStyle.top + 'px' }">
			<u-swiper
				:list="['https://cdn.uviewui.com/uview/swiper/swiper3.png', 'https://cdn.uviewui.com/uview/swiper/swiper3.png']"
				indicator
				indicatorMode="line"
				circular
			></u-swiper>
		</view>

		<view class="index-notice">
			<view class="label">平台通知</view>
			<view class="notice"><u-notice-bar icon=" " bgColor="white" color="#000" text="通知公告"></u-notice-bar></view>
		</view>
		<view class="index-list">
			<u-grid :border="false" col="5">
				<u-grid-item v-for="(listItem, listIndex) in list" :key="listIndex">
					<u-avatar size="50" :src="listItem.thumb" mode="widthFix" shape="square"></u-avatar>
					<u-text :text="listItem.title" color="#000" size="14" align="center"></u-text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="index-share"><image src="../../static/share1.png" mode="scaleToFill"></image></view>
		<view class="index-recommend">
			<view class="header">
				<view class="title">每日必做</view>
				<view class="title" style="margin:0 10rpx;padding-left:0rpx;">|</view>
				<view class="sub-title">精选应用推荐</view>
			</view>
			<view class="list"><product-item v-for="i in 20" :key="i"></product-item></view>
		</view>
	</view>
</template>

<script>
import ProductItem from '@/components/ProductItem/ProductItem.vue';
export default {
	name: 'index',
	components: {
		'product-item': ProductItem
	},
	data() {
		return {
			searchText: '',
			searchStyle: {
				top: 40
			},
			swiperStyle: {
				top: 0
			},
			list: [
				{
					thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/12.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/13.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/14.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/15.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/11.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/11.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/11.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/11.png',
					title: '额度类'
				},
				{
					thumb: 'https://cdn.uviewui.com/uview/menu/11.png',
					title: '额度类'
				}
			]
		};
	},
	onLoad() {
		// #ifdef MP-WEIXIN
		let menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		console.log(menuButtonInfo);
		const width = uni.getWindowInfo().windowWidth - menuButtonInfo.width;
		this.searchStyle.width = width - 40;
		let statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
		console.log(statusBarHeight, '状态栏高度');
		//胶囊距离状态栏高度
		let mt = menuButtonInfo.top;
		console.log(mt, '胶囊距离状态栏top');
		this.searchStyle.top = mt - 2;
		this.swiperStyle.top = menuButtonInfo.height + mt + 10;
		// #endif
	},
	methods: {
		onSearch(value) {
			if(value.trim()=='') return
			uni.navigateTo({
				url: '/pages/search/search?searchValue=' + value
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.index-container {
	background-color: $main-bg;
	.bar-color {
		position: fixed;
		top: 0;
		z-index: 99;
		background-image: url('../../static/bg.png');
	}
	.index-header {
		position: fixed;
		z-index: 99;
		width: 100%;
		height: 80rpx;
		background-size: 100% 100%;
		background-image: url('../../static/bg.png');
		background-repeat: no-repeat;
		&-search {
			padding-left: 30rpx;
		}
	}
	.index-swiper {
		background-size: 100% 70%;
		background-image: url('../../static/bg.png');
		background-repeat: no-repeat;
		padding: $main-padding;
	}
	.index-notice {
		padding: 20rpx 0 20rpx;
		margin: 0rpx 0rpx 15rpx 0;
		display: flex;
		justify-items: center;
		align-items: center;
		background-color: #ffffff;
		height: 40rpx;
		overflow: hidden;
		.label {
			text-align: center;
			min-width: 150rpx;
			color: $main-color;
		}
		.notice {
			width: 100%;
		}
	}
	.index-list {
		background-color: #fff;
		margin: 20rpx;
		border-radius: 10rpx;
		padding: 20rpx 0rpx;
		.label {
			margin-top: 15rpx;
			font-size: 24rpx;
			font-weight: normal;
		}
	}
	.index-share {
		margin: 20rpx;
		height: 150rpx;
		image {
			border-radius: 50rpx;
			width: 100%;
			height: 100%;
		}
	}
	.index-recommend {
		margin: 20rpx;
		.header {
			height: 70rpx;
			border-top-left-radius: 45rpx;
			border-top-right-radius: 45rpx;
			background-color: $main-color;
			display: flex;
			align-items: center;
			.title {
				padding-left: 20rpx;
				color: #fff;
			}
			.sub-title {
				color: #fff;
				font-size: 22rpx;
			}
		}
		.list {
			background-color: #fff;
		}
	}
}
</style>

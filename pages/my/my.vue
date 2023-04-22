<template>
	<view class="my-container">
		<view class="my-info">
			<view class="my-info-left">
				<view class="avatar"><u-avatar text="178" fontSize="20" size="70" randomBgColor></u-avatar></view>
				<view class="my-center">
					<view class="name">17888899888</view>
					<view class="level">初级会员</view>
				</view>
			</view>
			<view class="my-zl">
				<p class="num">4</p>
				<text class="label">助力人数</text>
			</view>
		</view>
		<view class="tips-box">
			<view class="icon"><image src="../../static/king.png" mode="aspectFit"></image></view>
			<text class="tips">邀请好友助力，得全额奖励</text>
			<view class="btn" @click="toSharePage">去邀请</view>
		</view>
		<view class="my-bg"></view>
		<view class="my-order">
			<view class="top">
				<view class="title">我的任务</view>
				<view class="more" @tap="onOrder(0)">全部订单</view>
			</view>
			<view class="bottom">
				<view class="item" v-for="(order,index) in orderList" :key="index" @tap="onOrder(index)">
					<view class="number">{{order.num}}</view>
					<view class="label">{{order.name}}</view>
				</view>
			
			</view>
		</view>
		<view class="my-menu">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(listItem, listIndex) in menuList" :key="listIndex" @click="onMenuClick(listItem)">
					<image :src="listItem.icon" mode="aspectFit"></image>
					<text class="grid-text">{{ listItem.name }}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<view class="exit-btn"><u-button  shape="20" size="large" color="#0660FF" border>退出登录</u-button></view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			orderList:[
				{
					name:'全部任务',
					num:'99'
				},{
					name:'审核中',
					num:'99'
				},{
					name:'已通过',
					num:'99'
				},{
					name:'已驳回',
					num:'99'
				},
			],
			menuList: [
				{
					name: '我的钱包',
					path:'/pages/myWallet/myWallet',
					icon: '../../static/icon/1.png'
				},
				{
					name: '我的助力',
					icon: '../../static/icon/2.png'
				},
				{
					name: '绑定信息',
					icon: '../../static/icon/3.png'
				},
				{
					name: '联系客服',
					icon: '../../static/icon/4.png'
				},
				{
					name: '平台简介',
					icon: '../../static/icon/5.png'
				},
				{
					name: '平台合作',
					icon: '../../static/icon/6.png'
				},
				{
					name: '操作帮助',
					icon: '../../static/icon/7.png'
				}
			]
		};
	},
	onLoad() {
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#0660FF'
		});
	},
	methods: {
		onMenuClick(item){
			uni.navigateTo({
				url:item.path
			})
		},		
		onOrder(value){
			uni.navigateTo({
				url:'/pages/order/order?type='+value
			})
		},
		toSharePage() {
			uni.switchTab({
				url: '/pages/share/share'
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.my-container {
	.my-bg {
		background-color: $main-color;
		border-bottom-left-radius: 40rpx;
		border-bottom-right-radius: 40rpx;
		position: fixed;
		top: 0;
		width: 100%;
		height: 240rpx;
		z-index: 1;
	}
	.my-info {
		width: 85%;
		border-radius: 15rpx;
		background-color: #fff;
		padding: 20rpx;
		height: 180rpx;
		margin: 35rpx auto auto;
		position: relative;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
		.my-info-left {
			display: flex;
		}
		.my-center {
			padding-left: 20rpx;
			display: inline-flex;
			flex-flow: column;
			justify-content: space-evenly;
			.name {
				font-size: 34rpx;
				font-weight: 400;
			}
			.level {
				background-color: #e6f2fe;
				color: $main-color;
				padding: 4rpx;
				border-radius: 30rpx;
				position: relative;
				text-indent: 50rpx;
				font-size: 30rpx;
				&::before {
					position: absolute;
					content: '';
					display: block;
					background-color: $main-color;

					border-radius: 45rpx;
					width: 35rpx;
					height: 35rpx;
					border-radius: 45rpx;
					left: 12rpx;
					top: 7.5rpx;
				}
				&::after {
					content: '';
					background-image: url('../../static/vip.png');
					background-repeat: no-repeat;
					background-size: cover;
					background-position: center center;
					height: 20rpx;
					width: 20rpx;
					position: absolute;
					top: 17rpx;
					left: 19rpx;
				}
			}
		}
		.my-zl {
			text-align: center;
			font-size: 28rpx;
			.num {
				padding-bottom: 20rpx;
			}
		}
	}
	.tips-box {
		background-color: #fbeedd;
		height: 40rpx;
		width: 85%;
		padding: 20rpx;
		margin: -15rpx auto auto;
		position: relative;
		z-index: 3;
		display: flex;
		justify-content: space-around;
		align-items: center;
		.icon {
			height: 40rpx;
			width: 40rpx;
			image {
				width: 100%;
				height: 100%;
			}
		}
		.tips {
			color: #d09742;
			font-size: 30rpx;
		}
		.btn {
			text-align: center;
			background-color: #f5c079;
			color: #775525;
			width: 120rpx;
			height: 40rpx;
			font-size: 28rpx;
			padding: 5rpx;
			border-radius: 40rpx;
		}
	}
	.my-order {
		width: 85%;
		margin: 35rpx auto auto;
		background: #ffffff;
		padding: 20rpx;
		border-radius: 20rpx;
		.top {
			display: flex;
			justify-content: space-between;
			padding: 10rpx 0;
			align-items: center;
			.title {
				font-size: 33rpx;
				color: #000000;
			}
			.more {
				font-size: 28rpx;
				color: #898989;
				&::after {
					content: '>';
					margin-left: 20rpx;
					color: #898989;
				}
			}
		}
		.bottom {
			display: flex;
			justify-content: space-around;
			text-align: center;

			.item {
				padding: 35rpx 0 50rpx 0;
				.number {
					font-size: 40rpx;
					font-weight: bold;
					color: #000000;
				}
				.label {
					font-size: 28rpx;
				}
			}
		}
	}
	.my-menu{
		width:85%;
		margin: 35rpx auto;
		background-color: #ffffff;
		padding:20rpx;
		border-radius: 20rpx;
		image{
			margin-top:20rpx;
			width:50rpx;
			height: 50rpx;
		}
		.grid-text{
			font-size: 24rpx;
			margin-top:10rpx;
		}
	}
	.exit-btn{
		width:85%;
		margin:80rpx auto auto;
		
	}
}
</style>

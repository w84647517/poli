<template>
	<view class="product-container">
		<view class="thumb"><image src="@/static/WX20230402-125019@2x.png" mode="aspectFill"></image></view>
		<view class="detail">
			<view class="title-tag">
				<view class="name">{{ product.title }}</view>
				<view class="tag"><u-tag size="mini" bgColor="#0660FF" :text="product.tagName"></u-tag></view>
			</view>
			<view class="price">{{ product.price }}</view>
		</view>
		<view class="btn"><u-button @click="onDetail(product.id,product.title)" shape="circle" text="详情" color="#01A70A" :custom-style="btnStyle" plain></u-button></view>
	</view>
</template>

<script>
export default {
	name: 'ProductItem',
	props: {
		product: {
			type: Object,
			default: () => {
				return {
					title: '商品名称',
					tagName: '生活类',
					thumb: 'https://cdn.uviewui.com/uview/menu/12.png',
					price: '28.88'
				};
			}
		}
	},
	data() {
		return {
			btnStyle: {
				width: '140rpx', // 注意驼峰命名，并且值必须用引号包括，因为这是对象
				height:'60rpx'
			}
		};
	},
	methods: {
		onDetail(id='1',title) {
			uni.navigateTo({
				url:`/pages/detail/detail?id=${id}&title=${title}`
			})
		}
	},
};
</script>

<style lang="scss" scoped>
.product-container {
	padding: 20rpx;
	display: flex;
	align-items: center;
	justify-content: space-around;
	border-bottom: 1px solid #efefef;
	.thumb {
		width: 120rpx;
		height: 120rpx;
		border-radius: 20rpx;
		overflow: hidden;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.detail {
		display: flex;
		height:100rpx;
		margin-left:10rpx;
		align-items: flex-start;
		align-content: flex-start;
		justify-content: space-between;
		flex-direction: column;
		max-width: 400rpx;
		min-width: 400rpx;
		.title-tag {
			display: flex;
			align-items: center;

			.name {
				font-size: 28rpx;
				max-width: 260rpx;
				padding-right:10rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.tag {
			}
		}
		.price {
			font-size:26rpx;
			color:#FF2020;
			&::before{
				content: '赏';
				padding-right:10rpx;
			}
			&::after{
				content: '元';
			}
		}
	}
}
</style>

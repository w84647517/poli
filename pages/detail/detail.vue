<template>
	<view class="detail-container">
		<view class="detail-item">
			<view class="detail-box-left">
				<view class="image-box"><image src="../../static/WX20230402-125019@2x.png" mode="scaleToFill"></image></view>

				<view class="title-box">
					<view class="title">快手极速版快手极速版快手极速版</view>
					<p class="tag">额度类</p>
				</view>
			</view>
			<view class="price-box">
				<view class="price">29988</view>
				<view class="btn"><u-button text="镂空按钮" plain size="small" type="info" color="#A3A3A3" shape="circle" @click="onViewVideo()">查看教程</u-button></view>
			</view>
		</view>
		<view class="detail-card">
			<view class="header"><text class="title">流程详情</text></view>
			<view class="inner"><rich-text nodes="<img src=&quot;https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png&quot;/>"></rich-text></view>
		</view>
		<view class="detail-card">
			<view class="header"><text class="title">附件下载</text></view>
			<view class="inner"><rich-text nodes="<img src=&quot;https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png&quot;/>"></rich-text></view>
		</view>
		<view class="detail-card">
			<view class="header"><text class="title">交单格式</text></view>
			<view class="inner-fj">
				<view class="fj-list" v-for="item in 10">
					<view class="name">附件112312312312312312312</view>
					<view class="download-link" @tap="downloadFile(item)">下载附件</view>
				</view>
			</view>
		</view>
		<view class="detail-card">
			<view class="header"><text class="title">凭证信息</text></view>
			<view class="inner">
				<view class="" style="padding:20rpx;">图片上传 <text style="color: #0660FF;" @click="onViewExplan">（查看示例）</text></view>
				<view class=""><u-upload :fileList="fileList" @afterRead="afterRead" @delete="deletePic" name="1" multiple :maxCount="10"></u-upload></view>
				<view class="" style="padding:20rpx;">其他</view>
				<view class="" style="padding:20rpx;border:1px solid rgba(244, 244, 244, 0.51)">
					<u--textarea v-model="value1" border="surround" placeholder="请按交单格式填写"></u--textarea>
				</view>

				<view class="m-t-30"><u-button shape="20" size="large" color="#0660FF" border>凭证信息提交</u-button></view>
			</view>
		</view>
		<u-popup :show="showVideo" :round="20" mode="bottom">
			<view style="padding:40rpx;text-align: center;">
				<text style="font-size: 34rpx;;">视频教程</text>
				<video
				style="width:100%;margin-top:20rpx;"
					id="myVideo"
					src="https://img.cdn.aliyun.dcloud.net.cn/guide/uniapp/%E7%AC%AC1%E8%AE%B2%EF%BC%88uni-app%E4%BA%A7%E5%93%81%E4%BB%8B%E7%BB%8D%EF%BC%89-%20DCloud%E5%AE%98%E6%96%B9%E8%A7%86%E9%A2%91%E6%95%99%E7%A8%8B@20200317.mp4"

					controls
				></video>
				<view class="m-t-30"><u-button @click="onCloseVideo" shape="20" size="large" color="#0660FF" border>关闭</u-button></view>
			</view>
		</u-popup>
		<u-popup :show="showExplan" round="20" mode="center">
			<view style="padding:20rpx;width:90%;min-width: 400rpx;">
				<rich-text nodes="<img src=&quot;https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png&quot;/>"></rich-text>
				<view class="m-t-30"><u-button @click="onCloseExplan" shape="20" size="large" color="#0660FF" border>关闭</u-button></view>
			</view>
		</u-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			showExplan:false,
			showVideo: false,
			fileList: [],
			action: 'http://www.example.com/upload'
		};
	},
	onLoad({ id, title }) {
		console.log(id);
		uni.setNavigationBarTitle({
			title: title
		});
		uni.setNavigationBarColor({
			frontColor: '#ffffff',
			backgroundColor: '#0660FF'
		});
	},
	methods: {
		onViewExplan(){
			this.showExplan=true
		},
		onCloseExplan(){
			this.showExplan=false
		},
		onCloseVideo() {
			this.showVideo = false;
		},
		onViewVideo() {
			this.showVideo = true;
		},
		deletePic(event) {
			this.fileList.splice(event.index, 1);
		},
		async afterRead(event) {
			console.log(event);
			// 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			let lists = [].concat(event.file);
			let fileListLen = this.fileList.length;
			lists.map(item => {
				this.fileList.push({
					...item,
					status: 'done',
					message: '上传中'
				});
			});
			// for (let i = 0; i < lists.length; i++) {
			// 	const result = await this.uploadFilePromise(lists[i].url);
			// 	let item = this[`fileList${event.name}`][fileListLen];
			// 	this[`fileList${event.name}`].splice(
			// 		fileListLen,
			// 		1,
			// 		Object.assign(item, {
			// 			status: 'success',
			// 			message: '',
			// 			url: result
			// 		})
			// 	);
			// 	fileListLen++;
			// }
		},
		getDetail(id) {},
		downloadFile(item) {
			console.log(item);
			const downloadTask = uni.downloadFile({
				url: 'https://web-assets.dcloud.net.cn/unidoc/zh/uni@2x.png', //仅为示例，并非真实的资源
				success: res => {
					if (res.statusCode === 200) {
						uni.showToast({
							title: '下载成功',
							icon: 'success'
						});
					}
					let that = this;
					uni.saveFile({
						tempFilePath: res.tempFilePath,
						success: function(red) {
							uni.openDocument({
								filePath: red.savedFilePath,
								success: sus => {
									console.log('成功打开');
								}
							});
						}
					});
				}
			});
			downloadTask.onProgressUpdate(res => {
				console.log('下载进度' + res.progress);
				console.log('已经下载的数据长度' + res.totalBytesWritten);
				console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
			});
		}
	}
};
</script>

<style lang="scss">
.detail-container {
	padding: 20rpx;
	height: 100%;
	background-color: $main-bg;
	.detail-item {
		align-items: center;
		border-radius: 10rpx;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		padding: 20rpx;
		.detail-box-left {
			display: flex;
		}
		.image-box {
			width: 150rpx;
			height: 150rpx;
			image {
				border-radius: 20rpx;
				width: 150rpx;
				height: 150rpx;
			}
		}
		.title-box {
			display: flex;
			padding: 10rpx;
			flex-flow: column;
			padding-left: 20rpx;
			align-items: flex-start;
			justify-content: space-between;
			.title {
				font-size: 40rpx;
				max-width: 320rpx;
				padding-right: 10rpx;
				white-space: nowrap;
				overflow: hidden;
				text-overflow: ellipsis;
			}
			.tag {
				border: 1px solid $main-color;
				color: $main-color;
				padding: 5rpx;
				font-size: 26rpx;
				margin-top: 30rpx;
				border-radius: 10rpx;
			}
		}
		.price-box {
			display: flex;
			flex-flow: column;
			align-items: center;
			.price {
				font-size: 28rpx;
				color: #ff2020;
				&::before {
					content: '赏';
					padding-right: 10rpx;
				}
				&::after {
					content: '元';
				}
			}
			.btn {
				max-width: 140rpx;
				margin-top: 30rpx;
			}
		}
	}
	.detail-card {
		margin-top: 20rpx;
		background-color: #ffffff;
		border-radius: 20rpx;
		padding: 20rpx;
		.header {
			.title {
				font-size: 30rpx;
				font-weight: bold;
				color: #000;
				border-bottom: 6rpx solid $main-color;
			}
		}
		.inner {
			padding-top: 20rpx;
		}
		.inner-fj {
			padding-top: 20rpx;

			.fj-list {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 15rpx 0px;
				.name {
					font-size: 34rpx;
					color: #000;
					max-width: 600rpx;
					padding-right: 10rpx;
					white-space: nowrap;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.download-link {
					color: $main-color;
				}
			}
		}
	}
}
</style>

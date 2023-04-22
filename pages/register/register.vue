<template>
	<view class="app-padding">
		<view class="status_bar"></view>
		<!-- <back-btn>返回</back-btn> -->
		<view class="login-title"><u-text size="20" bold text="注册账户"></u-text></view>
		<view class="login-form">
			<view class="login-form-box">
				<u--form class="login-form-box-inner" labelPosition="left" :model="formModel" ref="uForm">
					<u-form-item label="+86" borderBottom><u--input placeholder="请输入手机号" v-model="formModel.username" border="none"></u--input></u-form-item>
					<u-form-item borderBottom>
						<u-text text="验证码" size="12" margin="10px 0"></u-text>
						<u-input placeholder="请输入验证码" password v-model="formModel.password" border="none">
							<template slot="suffix">
								<u-button color="#0660FF" shape="10" size="small" :plain="true" :text="tips"></u-button>
							</template>
						</u-input>
					</u-form-item>
					<u-form-item borderBottom>
						<u-text text="新密码" size="12" margin="10px 0"></u-text>
						<u--input placeholder="请输入密码" password v-model="formModel.password" border="none"></u--input>
					</u-form-item>
					<view class="m-t-30"><u-button @click="loginSubmit" shape="20" size="large" color="#0660FF" border>同意协议并注册</u-button></view>
					<view class="login-xy">
						<u-text text="我已阅读并同意" color="#C7C7CC" size="12"></u-text>
						<u-text @click="toAgreement" text="软件服务协议" align="left" margin="5px 5px" color="#0660FF" size="12"></u-text>
					</view>
				</u--form>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	
	data() {
		return {
			tips: '获取验证码',
			formModel: {
				username: '',
				password: ''
			}
		};
	},
	onLoad() {
			uni.setNavigationBarColor({
				frontColor:'#000000',
				backgroundColor:'#ffffff',
				
			})
	},
	methods: {
		toAgreement(){
			uni.navigateTo({
				url:'/pages/agreement/agreement'
			})
		},
		loginSubmit() {
			console.log('tijiao');
			const { username, password } = this.formModel;
			if (username.trim() == '') {
				uni.showToast({
					title: '请输入用户名',
					icon: 'none'
				});
				return;
			}
			if (password.trim() == '') {
				uni.showToast({
					title: '请输入密码',
					icon: 'none'
				});
				return;
			}
		}
	}
};
</script>

<style lang="less">
	.login-xy{
		display: flex;
		 .u-text{
			flex: none !important;
			width:auto !important;
		}
	}
.login-title {
	margin-top: 0rpx;
	margin-left: 20rpx;
}
.login-form {
	margin-top: 100rpx;
	&-box {
		margin: 0 auto;
		width: 90%;
		&-inner {
		}
	}
	&-fotter {
		display: flex;
		justify-content: space-between;
	}
}
</style>

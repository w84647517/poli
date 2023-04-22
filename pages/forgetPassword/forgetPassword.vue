<template>
	<view class="app-padding">
		<view class="status_bar"></view>
		<view class="login-title"><u-text size="20" bold text="忘记密码"></u-text></view>
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
					<view class="m-t-30"><u-button @click="loginSubmit" shape="20" size="large" color="#0660FF" border>重置密码</u-button></view>
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

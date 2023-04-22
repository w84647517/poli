<template>
	<view class="app-padding">
		<view class="status_bar"></view>
		<view class="login-title">
			<u-text size="22" bold text="坡里网络科技"></u-text>
			<u-text size="22" bold text="欢迎你"></u-text>
		</view>
		<view class="login-form">
			<view class="login-form-box">
				<u--form class="login-form-box-inner" labelPosition="left" :model="formModel" ref="uForm">
					<u-form-item label="+86" borderBottom><u--input placeholder="请输入手机号" v-model="formModel.username" border="none"></u--input></u-form-item>
					<u-form-item borderBottom>
						<u-text text="密码" size="12" margin="10px 0"></u-text>
						<u--input placeholder="请输入密码" password v-model="formModel.password" border="none"></u--input>
					</u-form-item>
					<view class="m-t-30">
						<u-button @click="loginSubmit" shape="20" size="large" color="#0660FF" border>登录</u-button>
					</view>
					<view class="m-t-15 login-form-fotter">
						<u-text align="left" color="#C7C7CC" size="14" text="忘记密码" @click="toForgetPassword"></u-text>
						<u-text align="right" color="#5190FF" size="14" text="注册账号" @click="toRegister"></u-text>
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
			formModel: {
				username:'',
				password:''
			}
		};
	},
	methods: {
		loginSubmit() {
			console.log('tijiao');
			const {username,password} = this.formModel
			if(username.trim()==''){
				uni.showToast({
					title:'请输入用户名',
					icon:'none'
				})
				return
			}
			if(password.trim()==''){
				uni.showToast({
					title:'请输入密码',
					icon:'none'
				})
				return
			}
		},
		//忘记密码
		toForgetPassword(){
			uni.navigateTo({
				url:'/pages/forgetPassword/forgetPassword'
			})
		},
		//注册
		toRegister(){
			uni.navigateTo({
				url:'/pages/register/register'
			})
		}
	}
};
</script>

<style lang="less">
.login-title {
	margin-top: 80rpx;
	margin-left:20rpx;
}
.login-form {
	margin-top:100rpx;
	&-box {
		margin: 0 auto;
		width: 90%;
		&-inner {
		}
	}
	&-fotter{
		display: flex;
		justify-content: space-between;
	}
}
</style>

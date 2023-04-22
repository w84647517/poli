<template>
	<view>
		<product-item v-for="i in listLength"></product-item>
	</view>
</template>

<script>
	import ProductItem from '@/components/ProductItem/ProductItem.vue';
	export default {
		data() {
			return {
				listLength:10
			}
		},
		components:{
			'product-item':ProductItem
		},
		onReachBottom(){
			console.log('到底');
			uni.showLoading({
				mask:true,
				title:'加载中'
			})
			this.listLength+=10
			setTimeout(()=>{
				uni.hideLoading()
			},1500)
			
		},
		onLoad(options) {
				
				uni.setNavigationBarTitle({
					title:options.searchValue
				})
				console.log(options);
		},
		methods: {
			
		}
	}
</script>

<style>

</style>

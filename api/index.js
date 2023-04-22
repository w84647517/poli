import request from '../request/index.js'
//轮播图
export const getBanner = ()=>request.get('/app/bannerlist')
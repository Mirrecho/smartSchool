// components/mybtn/mybtn.js
Component({
	/*组件的方法(函数/功能)列表*/
	methods: {
		//返回顶部功能
		returnTop(){
			wx.pageScrollTo({
				scrollTop: 0,//滚动至目标地址
				duration: 200, //滚动的时长
				// 提示框
				success(){
					wx.showToast({
						title: '成功',
						icon: 'success',
						duration: 2000
					})
				}
			})
		},
		// 拨打电话功能
		phone(){
			wx.makePhoneCall({
				phoneNumber: '1340000' //仅为示例，并非真实的电话号码
			})
		},
		//地图页面跳转
		mapHandle(){
			// 页面跳转
			wx.navigateTo({
				url: '/pages/map/map',
			})
		}
	}
})

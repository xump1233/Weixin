// index.js
Page({
    jumpTo(){
        wx.navigateTo({
          url: '/pages/target/target',
        })
    },
    onPullDownRefresh(){
        console.log('别往下拉了。。。')
    },
    onReachBottom(){
        console.log('我到底了。。。')
    },
    onHide(){
        console.log('我是index，我被掩藏了')
    },
    onShow(){
        console.log('我是index，我又被显示了')
    }
})

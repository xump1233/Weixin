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
    }
})

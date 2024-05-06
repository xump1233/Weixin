// pages/compare/compare.js
Page({

    /**
     * 页面的初始数据
     */
    
    data: {
        num:0
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {
        this.setData({num1:''})
        this.setData({num2:''})
        this.setData({result:'快去比较比较'})
    },
    compare(e){
        // console.log(e.target)
        if(Number(this.data.num1)>Number(this.data.num2)){
            this.setData({result:'第一个比第二个更大'})
        }
        else{
            this.setData({result:'第二个比第一个更大'})
        }
        
    },
    touch(e){
        console.log('触摸开始',e)
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage() {

    }
})
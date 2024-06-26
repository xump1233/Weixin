// pages/userform/userform.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        onceForm:{
            name:'xxhh',
            gender:'男',
            skills:[
                {
                    name:'HTML',
                    isChecked:true
                },
                {
                    name:'CSS',
                    isChecked:true
                },
                {
                    name:'JavaScript',
                    isChecked:true
                },
                {
                    name:'Vue',
                    isChecked:false
                },
                {
                    name:'React',
                    isChecked:false
                }
            ],
            suggest:''
        }
    },
    submitForm(){
        let form = this.data.onceForm
        new Promise((resolve,reject)=>{
            wx.request({
                url: 'http://127.0.0.1:8000',
                method:'POST',
                data:form,
                success(res){
                  resolve(res.data)
                },
                fail(err){
                    reject(err)
                }
              })
        }).then(value=>{
            this.setData({onceForm:value})
        })
        
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad(options) {

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
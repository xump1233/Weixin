// pages/computer/computer.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        content:['123','+','213'],
    },
    getSet(){
        const set = new Set()
        set.add('÷')
        set.add('×')
        set.add('+')
        set.add('-')
        return set
    },
    addNum(e){
        let value = e.currentTarget.dataset.value
        let afterContent = this.data.content
        if(value === '.'){
            if(afterContent[afterContent.length-1] === ''){
                afterContent[afterContent.length-1] += 0
            }
        }
        
        afterContent[afterContent.length-1] += value
        this.setData({content:afterContent})
    },
    clear(){
        this.setData({content:['']})
    },
    delete(){
        let afterContent = this.data.content
        if(afterContent[afterContent.length-1]>=1){
            afterContent[afterContent.length-1]=afterContent[afterContent.length-1].substring(0,afterContent[afterContent.length-1].length-1)
        }
        this.setData({content:afterContent})
    },
    addOp(e){
        let value = e.currentTarget.dataset.value
        let afterContent = this.data.content
        if(afterContent[afterContent.length-1] === ''){
            return
        }
        afterContent.push(value)
        afterContent.push('')
        this.setData({content:afterContent})
    },
    getResult(){
        let result;
        let afterContent = this.data.content
        if(afterContent.length<=1){
            result = Number(afterContent[0])
            afterContent.push('=')
            afterContent.push(result)
            this.setData({content:afterContent})
            return 
        } 
        else{
            let nums = []
            let operate = []
            const set1 = new Set()
            set1.add('÷')
            set1.add('×')
            const set2 = new Set()
            set2.add('+')
            set2.add('-')
            let isCompute = false
            afterContent.forEach(item=>{
                if(isCompute){
                    nums[nums.length-1] = this.compute()[operate[operate.length-1]](nums[nums.length-1],Number(item))
                    operate.pop()
                    isCompute = false
                    return
                }
                if(set2.has(item)){
                    operate.push(item)
                }
                else if(set1.has(item)){
                    operate.push(item)
                    isCompute = true
                }
                else{
                    nums.push(Number(item))
                }
            })
            result = nums[nums.length-1]
            for(let i=nums.length-2;i>=0;i--){
                result = this.compute()[operate[operate.length-1]](result,nums[i])
                operate.pop()
            }
            afterContent.push('=')
            afterContent.push(result)
            this.setData({content:afterContent})
        }
        
    },
    compute(){
        return {
            '÷':(x,y)=>x/y,
            '×':(x,y)=>x*y,
            '+':(x,y)=>x+y,
            '-':(x,y)=>x-y
        }
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
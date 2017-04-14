//case.js
//获取应用实例
var app = getApp();
    Page({
        data: {
        motto: 'Hello World',
        userInfo: {}
    },
    // 跳转到联系摄影师
    goCaseContact: function(){
        wx.navigateTo({
            url: '../case/case_contact'
        });
    },
    onLoad: function () {
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo
            });
        });
    }
});

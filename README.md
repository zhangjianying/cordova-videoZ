# cordova-videoZ
cordova视频录制插件 ,只有android端


* 支持暂停继续拍摄
* 支持切换出去后回来继续拍摄
* 针对android6.0做权限提醒
* 针对android7.0做FileUri适配

## 安装: 
```
 cordova plugin add https://github.com/zhangjianying/cordova-videoZ.git
```

## 使用:
```javascript
   window.videoZ.showSmallVideo({time:30,videoEncodingBitRate:4000*1024},function(ret){
            alert(ret.path);
            alert(ret.size);
            alert(ret.sizeDesc);
            alert(ret.fileUri);
       },
       function(err){
   });

```

## 说明

window.videoZ.showSmallVideo: 调用视频录制界面.

time:最大录制时间,单位(秒)

videoEncodingBitRate:视频码率

## 预览

![预览1](https://github.com/zhangjianying/cordova-videoZ/raw/master/readme/1.jpg)
 ![预览2](https://github.com/zhangjianying/cordova-videoZ/raw/master/readme/2.jpg)

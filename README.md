# cordova-videoZ
cordova视频录制插件

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



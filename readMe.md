* 最近忙到飞起,
* 几条业务线随时切换,人设都快崩溃了.
* 随便写点什么吧.
* 2018年04月13日10:52:05
* 交接文档一直拖拖拖还没写2333
* 想赶紧到新部门



# 支付宝项目填坑

## 兼容类 
### 安卓手机的scoll-view叠加在一起, 需要增加下列属性 加在view里
-webkit-flex-shrink: 0;
    flex-shrink: 0;
    -webkit-box-flex: 0;
    -webkit-flex-grow: 0;
    flex-grow: 0;


## 正则类
去空格
str.replace(/(^\s+)|(\s+$)/g,"")   去掉前后空格
str.replace(/\s/g,"")           去除文章中间空格

## 转换类
转货币单位
number.toLocaleString('en-US')
两位小数金额转货币单位
左侧 
Number(a.toFixed(2).split('.')[0]).toLocaleString()
右侧 
a.toFixed(2).split('.')[0]
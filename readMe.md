* 最近忙到飞起,
* 几条业务线随时切换,人设都快崩溃了.
* 随便写点什么吧.
* 2018年04月13日10:52:05
* 交接文档一直拖拖拖还没写2333
* 想赶紧到新部门
2018年04月16日21:32:19
* 今天算是正式入职新部门了, 签证还没下来, 期待巴西
2018年04月19日11:02:10
* 本周入职巴西,签证已出,react6的飞起,生活总会越来越好
* 最近研究vscode的vim模式,用键盘敲代码真心不想碰鼠标了


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
a.toFixed(2).split('.')[1]

货币单位巴西转法
a.toLocaleString('PT-br', {style: 'currency', currency: 'BRL'})

# 微信小程序项目填坑
关于sddk 分享 微信浏览器调用相机等,与支付宝类似需要前后端配置微信token进行校验,所有功能需要提前注册.
注意域名配置不要带协议.
传递URL只需要传递#字前面的.
顺便微信照相调接口神烦

# IDE插件类
Vscode 查看git提交者及提交内容插件 Gitlens
Vim    开启vscode vim模式 双ESC开启,鼠标退出normal

EMACS 了解一下?


# Utils
js复制文本
let text = document.getElementById('copyText').innerText
        let input = document.getElementById('copyInput')
        input.value = text
        input.select()
        document.execCommand('copy')
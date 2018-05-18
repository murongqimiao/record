最近百度一万个夺命连环call,
催域名到期的续费事宜,
大概续费间隔期的养护费用百度很在乎吧2333,
有种我司客服催收的感觉.

话说我的zhanglizhong.cn这个域名一直没怎么正儿八经使用过,
既然最近国内上线不再考虑外派巴西的可能,
那就整理一下BWH自己搭建一个个站吧.

首先考虑涉及技术栈: VPS理论 linux node node框架选型 js 考虑react

技术栈学习方式: 

第一步: node环境搭建
    首先vps的系统有如下选择,
        centOS    ubuntu   debian
        我的前端leader系统一直装的ubuntu... 这里分析一下三个系统的差异.
        数据来源(知乎...emmm是的我比较low哈哈哈, 然后回溯几个服务器系统的历史进程)
        
    服务器操作系统有两大发行版本,Redhat Debian
    
    小红帽(我瞎起的名)到9之后就自分裂为两个版本分别是社区维护的Fedora和企业用的EL,也就是RHEL,RHEL X慢慢衍化出centOS, centOS有release概念, 可以这么认为吧, centOS更新版本更严谨这种.Debian没有这种概念.
    
    Ubuntu作为debian的继承者是有release概念. 我个人理解是, ubuntu想有centOS的稳定, 又想有Debian的更新速度,就是不断的摘Debian的内容,然后内化.

    也就是说用了centOS,不管你的版本是多少,都能得到更新支持,而Ubuntu则需要及时更新版本,老旧版本支持较少.
    
    如果自己玩, Ubuntu Debian都可以用, 如果量级较大的服务器, 老老实实centOS 毕竟稳定是服务器的根本啊.高可用的必要前提.
恩  最后我选择Ubuntu....跟着leader不吃亏
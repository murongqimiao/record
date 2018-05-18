## Content-type 
content-type用来指定请求格式,可用值如下

媒体格式
    text/html ： HTML格式
    text/plain ：纯文本格式      
    text/xml ：  XML格式
    image/gif ：gif图片格式    
    image/jpeg ：jpg图片格式 
    image/png：png图片格式

   application/xhtml+xml ：XHTML格式
   application/xml     ： XML数据格式
   application/atom+xml  ：Atom XML聚合格式    
   application/json    ： JSON数据格式
   application/pdf       ：pdf格式  
   application/msword  ： Word文档格式
   application/octet-stream ： 二进制流数据（如常见的文件下载）
   application/x-www-form-urlencoded ： <form encType=””>中默认的encType，form表单数据被编码为key/value格式发送到服务器（表单默认的提交数据的格式
   multipart/form-data ： 需要在表单中进行文件上传时，就需要使用该格式

#spring MVC 中的  RequestMapping class定义
    value:  指定请求的实际地址， 比如 /action/info之类。
    method：  指定请求的method类型， GET、POST、PUT、DELETE等
    consumes： 指定处理请求的提交内容类型（Content-Type），例如application/json, text/html;
    produces:    指定返回的内容类型，仅当request请求头中的(Accept)类型中包含该指定类型才返回
    params： 指定request中必须包含某些参数值是，才让该方法处理
    headers： 指定request中必须包含某些指定的header值，才能让该方法处理请求

    当你有如下Accept头，将遵守如下规则进行应用：
    ①Accept：text/html,application/xml,application/json
        将按照如下顺序进行produces的匹配 ①text/html ②application/xml ③application/json
    ②Accept：application/xml;q=0.5,application/json;q=0.9,text/html
        将按照如下顺序进行produces的匹配 ①text/html ②application/json ③application/xml
        参数为媒体类型的质量因子，越大则优先权越高(从0到1)
    ③Accept：*/*,text/*,text/html
        将按照如下顺序进行produces的匹配 ①text/html ②text/* ③*/*


#Requests 


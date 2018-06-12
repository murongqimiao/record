
console.log('running node test...')

var http = require ('http');

http.createServer(function(request, response) {
    response.writeHead( // 决定头部
        200, // http 状态
        {   // 确认返回类型
            'Content-type': 'text/plain;charset=utf-8'
        }
    );

    // 发送数据
    response.end('斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼\n斌哥牛逼');
}).listen(8888);

console.log('running succeed lisen at port 8888')
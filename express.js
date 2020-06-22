/* express 服务器 */

//1. 导入express
var express = require('express');

//2. 创建express
var server = express();

//3. 访问t服务器
//get
server.get('/', function (request, response, next){
	console.log(request);
	response.send('<p>get 请求</p>');
	next();
});

//post
server.post('/', function (request, response){
	response.send('<p>post 请求</p>');
});

//4. 绑定端口
server.listen(90);
console.log('启动90');

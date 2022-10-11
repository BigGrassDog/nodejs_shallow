const http = require('http')

http.createServer((req,res) => {
  // req 接受浏览器传参，返回渲染内容
  res.writeHead(200, {'Content-Type':'text/html;charset=utf-8'})
  res.write(`<html><h1>hello node</h1><p>你好</p></html>`)
  res.end()
}).listen(3000, () => { 
  console.log('server start');
})
const http = require("http");
const url = require('url')

const moduleRenderHtml = require("./module/renderHtml");
const moduleRenderStatus = require("./module/renderStatus");

const server = http.createServer();

server.on("request", (req, res) => {
  // req 接受浏览器传参，返回渲染内容
  if (req.url === "/favicon.ico") {
    return;
  }
  // console.log(url.parse(req.url).pathname);
  const urlobj = url.parse(req.url,true )
  console.log(urlobj.query.a);
  const pathname = url.parse(req.url).pathname
  res.writeHead(moduleRenderStatus.renderStatus(req.url), {
    "Content-Type": "text/html;charset=utf-8",
  });
  res.write(moduleRenderHtml.renderHtml(req.url));
  res.end();
});

server.listen(3000, () => { 
  console.log('server start');
})

/**
 * url.parse() 
 * 域名地址转换成对象
 */

/**
 * url.format() 
 * 对象转换成域名地址
 */

/**
 * url.resolve('/one/two/three','four')
 * url.resolve('/one/two/three/','four') 
 * 第一个参数最后不加斜杠会替换最后一个值
 * 第一个参数最后加斜杠会进行拼接 
 * 
 * url.resolve('http://example.com/aaa/bbb/','/one')
 * 会替换域名后面的值
 */
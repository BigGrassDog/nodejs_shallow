const http = require("http");

const moduleRenderHtml = require('./module/renderHtml')
const moduleRenderStatus = require('./module/renderStatus')

http
  .createServer((req, res) => {
    // req 接受浏览器传参，返回渲染内容
    if (req.url === "/favicon.ico") {
      return;
    }
    console.log(req.url);
    res.writeHead(moduleRenderStatus.renderStatus(req.url), {
      "Content-Type": "text/html;charset=utf-8",
    });
    res.write(moduleRenderHtml.renderHtml(req.url));
    res.end();
  })
  .listen(3000, () => {
    console.log("server start");
  });

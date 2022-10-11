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
  // const urlobj = url.parse(req.url,true )
  // console.log(urlobj.query.a);
  // const pathname = url.parse(req.url).pathname

  const myUrl = new URL(req.url,'https://127.0.0.1:3000')
  console.log(myUrl.searchParams);
  for (let [key,value] of myUrl.searchParams) {
    console.log(key,value);
   }
  const pathname = myUrl.pathname


  res.writeHead(moduleRenderStatus.renderStatus(pathname), {
    "Content-Type": "text/html;charset=utf-8",
  });
  res.write(moduleRenderHtml.renderHtml(pathname));
  res.end();
});

server.listen(3000, () => { 
  console.log('server start');
})
const http = require("http");
const https = require("https");
const url = require("url");

const app = http.createServer();

app.on("request", (req, res) => {
  const urlobj = url.parse(req.url, true);

  res.writeHead(200, {
    "Content-Type": "application/json;charset=utf-8",
    // cors头
    "access-control-allow-origin": "*",
  });

  switch (urlobj.pathname) {
    case "/api/aaa":
      // 客户端 去猫眼要数据
      httpGet((data) => { 
        res.end(data)
      });
      break;
    default:
      res.end("404");
  }
});

app.listen(3000, () => {
  console.log("server start");
});

function httpGet(callback) {
  let data = "";
  https.get(
    `https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%B8%B8%E5%B7%9E&ci=89&channelId=4`,
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        console.log(data);
        // response.end(data)
        callback(data)
      });
    }
  );
}

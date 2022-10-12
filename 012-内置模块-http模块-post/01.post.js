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
      // 客户端 去小米优品要数据
      httpPost((data) => {
        res.end(data);
      });
      break;
    default:
      res.end("404");
  }
});

app.listen(3000, () => {
  console.log("server start");
});

function httpPost(callback) {
  let data = "";

  const options = {
    hostname: "m.xiaomiyoupin.com",
    port: "443",
    path: "/mtop/market/search/placeHolder",
    method: "POST",
    headers: {
      "Content-Type": "application/json",

      // "Content-Type": "x-www-form-urlencoded"
    },
  };

  const req = https.request(options, (res) => {
    res.on("data", (chunk) => {
      data += chunk;
    });
    res.on("end", () => {
      callback(data);
    });
  });
  // req.write('name=gd&age=18')
  req.write(JSON.stringify([{}, { baseParam: { ypClient: 1 } }]));
  req.end();
}

const http = require("http");
const https = require("https");
const url = require("url");

const cheerio = require('cheerio')

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
        res.end(spider(data))
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
    `https://meirentu.cc`,
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        // console.log(data);
        // response.end(data)
        callback(data)
      });
    }
  );
}

function spider (data) { 
  //npm i cheerio 

  let $ = cheerio.load(data)
  let $image = $('img')
  let image = []
  $image.each((index, value) => { 
    image.push({
      url:$(value).attr('src')
    })
  })
  console.log(image);
  return JSON.stringify(image)
}
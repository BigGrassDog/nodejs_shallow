const http = require("http");
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
      res.end(
        `${JSON.stringify({
          name: "dog",
          age: 18,
        })}`
      );
      break;
    default:
      res.end("404");
  }
});

app.listen(3000, () => {
  console.log("server start");
});

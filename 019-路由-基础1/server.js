const http = require("http");

http
  .createServer((req, res) => {
    const myUrl = new URL(req.url, "http://127.0.0.1");
    console.log(myUrl.pathname);
  })
  .listen(3000, () => {
    console.log("server start");
  });

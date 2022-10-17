const http = require("http");
const fs = require("fs");
const route = require("./route.js");

http
  .createServer((req, res) => {
    const myUrl = new URL(req.url, "http://127.0.0.1");
    // console.log(myUrl.pathname);
    // route(res, myUrl.pathname);
    route[myUrl.pathname](res);
    res.end();
  })
  .listen(3000, () => {
    console.log("server start");
  });

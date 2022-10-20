const http = require("http");
const route = require("./route.js");

const api = require("./api.js");

const Router = {};

// express use
function use (obj) { 
  Object.assign(Router, obj);
}

function start() {
  http
    .createServer((req, res) => {
      const myUrl = new URL(req.url, "http://127.0.0.1");
      // console.log(myUrl.pathname);
      // route(res, myUrl.pathname);
      try {
        Router[myUrl.pathname](req,res);
      } catch (error) {
        Router["/404"](req,res);
      }
      res.end();
    })
    .listen(3000, () => {
      console.log("server start");
    });
}

exports.start = start;
exports.use = use
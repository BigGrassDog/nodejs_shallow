const fs = require("fs");

function render(res, path, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type ? type : "text/html"};charset=utf-8`,
  });
  res.write(fs.readFileSync(path), "utf-8");
}

const route = {
  "/login": (res) => {
    render(res, "./static/login.html");
  },
  "/home": (res) => {
    render(res, "./static/home.html");
  },
  "/404": (res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(fs.readFileSync("./static/404.html"), "utf-8");
  },
  "/favicon.ico": (res) => {
    render(res, "./static/favicon.ico", "image/x-icon");
  },
};

module.exports = route;

const fs = require("fs");
const path = require("path");
const mime = require("mime");

function render(res, path, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type ? type : "text/html"};charset=utf-8`,
  });
  res.write(fs.readFileSync(path), "utf-8");
}

// 静态资源管理
function readStaticFile(req, res) {
  // 获取路径
  const myUrl = new URL(req.url, "http://127.0.0.1:3000");
  // console.log(path.join(__dirname,'/static',myUrl.pathname));
  const pathname = path.join(__dirname, "/static", myUrl.pathname);

  // 判断当前路径文件存不存在
  if (fs.existsSync(pathname)) {
    render(res, pathname, mime.getType(myUrl.pathname.split('.')[1]));
    return true;
  } else {
    return false;
  }
}

const route = {
  "/login": (req, res) => {
    render(res, "./static/login.html");
  },
  "/home": (req, res) => {
    render(res, "./static/home.html");
  },
  "/404": (req, res) => {
    if (readStaticFile(req, res)) {
      return;
    }
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
    res.write(fs.readFileSync("./static/404.html"), "utf-8");
  },
  "/favicon.ico": (req, res) => {
    render(res, "./static/favicon.ico", "image/x-icon");
  },
};

module.exports = route;

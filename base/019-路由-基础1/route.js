const fs = require("fs");

// function route(res, pathname) {
//   switch (pathname) {
//     case "/login":
//       res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
//       res.write(fs.readFileSync("./static/login.html"), "utf-8");
//       break;
//     case "/home":
//       res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
//       res.write(fs.readFileSync("./static/home.html"), "utf-8");
//       break;
//     default:
//       res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
//       res.write(fs.readFileSync("./static/404.html"), "utf-8");
//       break;
//   }
// }

const route = {
  "/login": (res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(fs.readFileSync("./static/login.html"), "utf-8");
  },
  "/home": (res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(fs.readFileSync("./static/home.html"), "utf-8");
  },
  "/404": (res) => {
    res.writeHead(404, { "Content-Type": "text/html;charset=utf-8" });
    res.write(fs.readFileSync("./static/404.html"), "utf-8");
  },
};

module.exports = route;

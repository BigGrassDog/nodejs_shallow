const { nextTick } = require('process');

function render(res, data, type = "") {
  res.writeHead(200, {
    "Content-Type": `${type ? type : "text/html"};charset=utf-8`,
  });
  res.write(data);
}

const apiRouter = {
  "/api/login": (req, res) => {
    // 获取参数
    const myUrl = new URL(req.url, "http://127.0.0.1");
    // console.log(myUrl.searchParams.get('username'));
    if (
      myUrl.searchParams.get("username") === "biggrassdog" &&
      myUrl.searchParams.get("password") === "echoevans77"
    ) {
      render(res, `{"ok":1}`);
    } else {
      render(res, `{"ok":0}`);
    }
  },

  "/api/loginpost": (req, res) => {
    // 获取参数
    let post = "";
    req.on("data", (chunk) => {
      // console.log(chunk);
      post += chunk;
    });
    req.on("end", () => {
      const data = JSON.parse(post);
      if (data.username === "biggrassdog" && data.password === "echoevans77") {
        render(res, `{"ok":1}`);
      } else {
        render(res, `{"ok":0}`);
      }
    });
  },
};

module.exports = apiRouter;

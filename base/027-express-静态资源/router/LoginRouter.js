const express = require("express");

const router = express.Router();

// 路由级别-相应前端的 get 请求
router.get("/", (req, res) => {
  // new Url
  console.log(req.query);
  res.send("login-success");
});

// 路由级别 - 响应前端的 post 请求
router.post("/", (req, res) => {
  console.log(req.body); // 必须配置中间件
  const { username, password } = req.body;
  if (username === "grassdog" && password === "123456") {
    res.send({ code: 200, msg: "login success" });
  } else {
    res.send({ code: 1, msg: "login fail" });
  }
});

module.exports = router;

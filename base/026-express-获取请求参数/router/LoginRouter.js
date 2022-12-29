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
  console.log(req.body);// 必须配置中间件
  res.send({ code: 200, msg: "login success" });
});

module.exports = router;

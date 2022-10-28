const express = require("express");

const router = express.Router();

// 路由级别-相应前端的 get 请求
router.get("/", (req, res) => {
  // new Url
  // console.log(req.query);

  // 渲染模板后返回给前端
  res.render('login', {title:'11111111'}) // 找 views 文件夹下的 login.ejs
});

module.exports = router;

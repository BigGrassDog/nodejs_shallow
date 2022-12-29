const express = require("express");

const router = express.Router();

// 路由级别
router.get("/", (req, res) => {
  // res.send("home");

  const list = ['aaaaa', 'bbbbb', 'cccccc', 'ddddddd']
  const el = '<b>我是加粗</b>'
  res.render('home', {list:list,el:el})
});

router.get("/list", (req, res) => {
  res.send([111, 222, 333]);
});

router.get("/swiper", (req, res) => {
  res.send("home-slide");
});

module.exports = router;

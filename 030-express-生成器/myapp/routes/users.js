var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
  // 读取前端的 cookie 值
  // console.log(req.cookies);

  // 设置前端的 cookie 值
  res.cookie('gender','变态')
  res.send('respond with a resource');
});

module.exports = router;

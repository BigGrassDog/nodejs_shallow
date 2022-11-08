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

router.post('/user/add', (req, res) => {
  console.log(req.body);
  // 插入数据库 
  // 1. 创建一个模型，一一对应数据的集合（users）
  res.send({ok:1});
 })

module.exports = router;

var express = require("express");
const UserModel = require("../model/UserModel");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  // 读取前端的 cookie 值
  // console.log(req.cookies);

  // 设置前端的 cookie 值
  res.cookie("gender", "变态");
  res.send("respond with a resource");
});

// 注册用户
router.post("/user/add", (req, res) => {
  console.log(req.body);
  // 插入数据库
  // 1. 创建一个模型（user,限制filed类型），一一对应数据的集合（users）
  // user.create user.find user.delete user.update
  const { username, password, age } = req.body;
  UserModel.create({
    username,
    password,
    age,
  }).then((data) => {
    console.log(data);
    res.send({ ok: 1 });
  });
});

// 动态路由，获取 id
// 更新用户信息
router.post("/user/update/:id", (req, res) => {
  console.log(req.body, req.params);
  const { username, password, age } = req.body;
  UserModel.updateOne(
    {
      _id: req.params.id,
    },
    {
      username,
      password,
      age,
    }
  ).then((data) => {
    res.send({ ok: 1 });
  });
});

// 删除用户信息
router.get("/user/delete/:id", (req, res) => {
  UserModel.deleteOne({
    _id: req.params.id,
  }).then((data) => {
    res.send({ ok: 1 });
  });
});

// 查询用户信息 分页
router.get("/user/list", (req, res) => {
  console.log(req.query);
  const { page, limit } = req.query;
  UserModel.find({}, ["username", "age"])
    .sort({ age: 1 })
    .skip((page - 1) * limit)
    .limit(limit)
    .then((data) => {
      res.send({ code: 200, data: data });
    });
});

module.exports = router;

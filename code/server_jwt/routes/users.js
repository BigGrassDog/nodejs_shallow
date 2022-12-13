const express = require("express");
const UserController = require('../controllers/UserController');
const router = express.Router();

const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

/* GET users listing. */
router.get("/", function (req, res, next) {
    // 读取前端的 cookie 值
    // console.log(req.cookies);

    // 设置前端的 cookie 值
    res.cookie("gender", "变态");
    res.send("respond with a resource");
});

// 响应前端的 post 请求 -- 增加用户
router.post("/user", UserController.addUser);

// 动态路由，获取 id -- 更新用户信息
router.put("/user/:id", UserController.updateUser);

// 删除用户信息
router.delete("/user/:id", UserController.deleteUser);

// 查询用户信息 分页
router.get("/user", UserController.listUser);

// 登录校验
router.post('/login', UserController.login)

// 退出登录
router.get('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send({ok: 1})
    })
})

module.exports = router;

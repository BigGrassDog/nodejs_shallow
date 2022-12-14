const express = require("express");

const router = express.Router();

// 路由级别-相应前端的 get 请求
router.get("/", (req, res) => {
  // new Url
  // console.log(req.query);

  // 渲染模板后返回给前端
  res.render('login', {error:'',title:'登录页面'}) //  找 views 文件夹下的 login.ejs
});

router.post('/', (req, res) => { 
  console.log(req.body);
  if (req.body.username === 'grassdog' && req.body.password === '123456') {
    // console.log('登录成功');
    // 重定向到 home
    res.redirect('/home')
  } else { 
    console.log('登录失败');
    res.render('login', {error:'用户名密码不匹配',title:'登录页面'})
  }
})

module.exports = router;

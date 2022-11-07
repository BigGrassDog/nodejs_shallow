const express = require("express");

const app = express();

const HomeRouter = require("./router/HomeRouter");

const LoginRouter = require("./router/LoginRouter");

//配置模板引擎
app.set("views", "./views");
app.set("view engine", "html");
app.engine('html',require('ejs').renderFile)// 支持直接渲染 html 文件

// 配置静态资源
app.use(express.static("public"));
app.use("/static", express.static("static"));

// 配置解析 post 参数的中间件 - 不用下载第三方，内置
// post 参数 username=grassdog&password=123456
app.use(express.urlencoded({ extended: false }));


// post 参数 - {name:'',age:100}
app.use(express.json());

// 应用级别  
app.use((req, res, next) => {
  console.log("验证token");
  next();
});

// 应用级别
app.use("/home", HomeRouter);
app.use("/login", LoginRouter);

// 错误处理中间件 
app.use((req, res) => {
  res.status(404).send("你来到了虚空之地");
});

app.listen(3000, (req, res) => {
  console.log("server start");
});

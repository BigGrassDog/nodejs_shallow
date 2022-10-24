const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send({ name: "biggrassdog", age: 100 });
});

app.get("/login", (req, res) => {
  res.write("login");
  res.end();
});

const func1 = (req, res, next) => {
  // 验证用户 token 是否过期，cookie 过期
  console.log("验证 token");
  const isValid = true;
  if (isValid) {
    res.grassdog = "这是func1计算的结果";
    next();
  } else {
    // 返回错误
    res.send("error");
  }
};

// app.use('/home',func1);
app.use(func1);

const func2 = (req, res) => {
  // 查询数据库
  // 返回内容
  console.log(res.grassdog);
  res.send({ list: [1, 2, 3] });
};

app.get("/home", [func2]);

app.get("/list", (req, res) => {
  res.send("list");
});

app.listen(3000, (req, res) => {
  console.log("server start");
});

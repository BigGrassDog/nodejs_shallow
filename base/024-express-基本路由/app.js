const express = require("express");

const app = express();

app.get("/login", (req, res) => {
  res.write("login");
  res.end();
});

// app.get(
//   "/home",
//   (req, res, next) => {
//     // 验证用户 token 是否过期，cookie 过期
//     console.log("验证 token");
//     const isValid = true;
//     if (isValid) {
//       next();
//     } else {
//       // 返回错误
//       res.send("error");
//     }
//   },
//   (req, res) => {
//     // 查询数据库
//     // 返回内容
//     res.send({ list: [1, 2, 3] });
//   }
// );

const func1 = (req, res, next) => {
  // 验证用户 token 是否过期，cookie 过期
  console.log("验证 token");
  const isValid = true;
  if (isValid) {
    res.grassdog = '这是func1计算的结果'
    next();
  } else {
    // 返回错误
    res.send("error");
  }
};

const func2 = (req, res) => {
  // 查询数据库
  // 返回内容
  console.log(res.grassdog);
  res.send({ list: [1, 2, 3] });
};

app.get("/home", [func1, func2]);

app.get("/list", [func1], (req, res) => {
  res.send("list");
});

// app.get("/ab?cd", (req, res) => {
//   res.send("ok");
// });

// app.get("/ab/:id/:tag", (req, res) => {
//   res.send("ok");
// });

// 匹配 abcd abbcd abbbcd
// app.get("/ab+cd", (req, res) => {
//   res.send("ab+cd");
// });

// 匹配 abcd abbcd abbbcd 等
// app.get("/ab*cd", (req, res) => {
//   res.send("ab*cd");
// });

// app.get("/ab(cd)?e", (req, res) => {
//   res.send("/ab(cd)?e");
// });

// 必须以 fly 结尾
// app.get(/.*fly$/, (req, res) => {
//   res.send("/.*fly$/");
// });

app.listen(3000, (req, res) => {
  console.log("server start");
});

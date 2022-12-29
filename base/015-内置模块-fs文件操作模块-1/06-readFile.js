const fs = require("fs");

// error-first

// 读取文件
fs.readFile("./grassdog/gd.txt", "utf-8", (err, data) => {
  if (!err) {
    console.log(data);
  }
});

const fs = require("fs");

// 删除文件
fs.unlink("./grassdog/gd.txt", (err) => {
  console.log(err);
});

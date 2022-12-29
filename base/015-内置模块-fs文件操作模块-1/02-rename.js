const fs = require("fs");

// 更改目录名称
fs.rename("./grassdog/", "biggrassdog", (err) => {
  console.log(err);
  if (err && err.code === 'ENOENT') { 
    console.log('当前目录不存在');
  }
});

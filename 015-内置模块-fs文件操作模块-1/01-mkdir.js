const fs = require("fs");

// 创建目录
fs.mkdir("./grassdog", (err) => {
  if (err && err.code === 'EEXIST') { 
    console.log('目录已经存在');
  }
});

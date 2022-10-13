const fs = require('fs')

// 修改文件
fs.appendFile('./grassdog/gd.txt', '\nhello big grassdog', err => {
  console.log(err);
})
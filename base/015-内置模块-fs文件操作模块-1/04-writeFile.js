const fs = require('fs')

// 创建文件
fs.writeFile('./grassdog/gd.txt', 'hello grassdog', err => {
  console.log(err);
})
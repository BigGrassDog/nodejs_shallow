const fs = require('fs')

// 删除目录
fs.rmdir('./grassdog', err => { 
  console.log(err);
  if (err && err.code === 'ENOENT') { 
    console.log('当前目录不存在');
  }
})
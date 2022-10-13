const fs = require('fs')

try {
  fs.mkdirSync('./grassdog')
} catch (error) { 
  console.log(error);
}
// 阻塞后面代码执行
const fs = require('fs')
 
fs.stat('./grassdog/1.js', (err, data) => { 
  console.log(data.isFile());
  console.log(data.isDirectory());
})
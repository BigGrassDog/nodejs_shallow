const fs = require('fs')

fs.readdir('./grassdog', (err, data) => {
  if (!err) { 
    console.log(data);
  }
})
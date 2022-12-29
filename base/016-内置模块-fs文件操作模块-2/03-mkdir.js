const fs = require('fs').promises

fs.mkdir('./gd').then(data => { 
  console.log(data);
})
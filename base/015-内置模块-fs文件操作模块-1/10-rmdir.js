const fs = require("fs");

fs.readdir("./grassdog", (err, data) => {
  console.log(data);
  data.forEach((item) => {
    fs.unlink(`./grassdog/${item}`, (err) => {

    });

    fs.rmdir('./grassdog', (err) => { 
      
    })
  });
});

const fs = require("fs");

fs.readdir("./grassdog", (err, data) => {
  console.log(data);
  data.forEach((item) => {
    fs.unlinkSync(`./grassdog/${item}`);

    fs.rmdir('./grassdog', (err) => { 
      
    })
  });
});

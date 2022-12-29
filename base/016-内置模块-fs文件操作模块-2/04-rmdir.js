const fs = require("fs").promises;

fs.readdir("./gd").then(async (data) => {
  // let arr = []
  // data.forEach((item) => {
  //   arr.push(fs.unlink(`./gd/${item}`))
  // });
  // Promise.all([])

  await Promise.all(data.map((item) => fs.unlink(`./gd/${item}`)));
  await fs.rmdir("./gd");
});

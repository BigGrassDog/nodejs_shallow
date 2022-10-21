const express = require("express");

const app = express();

app.get("/", (req, res) => {
  // res.send(`
  //   <html>
  //     <h1>helllo world</h1>
  //   </html>
  // `);
  res.send({
    name: 'biggrassdog',
    age:100
  })
});

app.listen(3000, () => {
  console.log("server start");
});

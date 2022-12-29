const express = require('express')

const app = express()

const IndexRouter = require('./router2/IndexRouter')
 
// 应用级别
app.use((req,res,next) => {
  console.log('验证token');
  next()
})

// 应用级别级别
app.use('/api', IndexRouter)

app.listen(3000, (req, res) => {
  console.log("server start");
});
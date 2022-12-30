const express = require('express')
const app = express()

app.use((req,res,next)=>{
    console.log('111111')
    next()
    console.log('333333')
    res.send('hello world')
})

app.use((req,res,next)=>{
    console.log('2222222')
})

app.listen(3001)
const express = require('express')
const app = express()

app.use(async (req, res, next) => {
    console.log('111111')
    await next()
})

app.use(async (req, res, next) => {
    console.log('2222222')

    // 异步操作
    await delay(3000)
    console.log('333333')

    console.log('444444')
    res.send('hello world')
})

function delay(time) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, time)
    })
}

app.listen(3001)
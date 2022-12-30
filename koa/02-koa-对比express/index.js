const Koa = require('koa')

const app = new Koa

// ctx => context 上下文
app.use((ctx,next)=>{
    // ctx.response
    ctx.response.body = "hello world"
})

app.listen(3000)
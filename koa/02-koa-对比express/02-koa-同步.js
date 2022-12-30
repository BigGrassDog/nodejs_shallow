const Koa = require('koa')
const app = new Koa()

app.use((ctx,next)=>{
    console.log('111111')
    next()
    console.log('333333')
    ctx.body = 'hello world'
})

app.use((ctx,next)=>{
    console.log('2222222')
})

app.listen(3001)
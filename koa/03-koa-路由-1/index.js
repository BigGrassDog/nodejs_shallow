const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router

router.post('/list', (ctx, next) => {
    ctx.body = {
        ok: 1,
        msg: 'success'
    }
})

router.get('/list', (ctx, next) => {
    ctx.body = [111, 222, 33, 444]
})

router.put('/list/:id', (ctx, next) => {
    console.log(ctx.params)
    ctx.body = {
        ok: 1,
        info: 'put list success'
    }
})

router.del('/list/:id', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: 'del list success'
    }
})

app.use(router.routes()).use(router.allowedMethods())

app.listen(3003)
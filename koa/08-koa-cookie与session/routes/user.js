const Router = require('koa-router')
const router = new Router()

router.post('/', (ctx, next) => {
    console.log(ctx.request.body) // 获取前端传来参数
    ctx.body = {
        ok: 1,
        msg: 'add user success'
    }
})

router.get('/', (ctx, next) => {
    // 获取前端传来的参数
    console.log(ctx.query, ctx.querystring)
    ctx.body = [111, 222, 33, 444]
})

router.put('/:id', (ctx, next) => {
    console.log(ctx.params)
    ctx.body = {
        ok: 1,
        info: 'put user success'
    }
})

router.del('/:id', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: 'del user success'
    }
})

router.post('/login', (ctx, next) => {
    console.log(ctx.request.body) // 获取前端传来参数
    const {username, password} = ctx.request.body
    if (username === 'gd' && password === '123') {
        // 设置 sessionId
        ctx.session.user = {
            username:username
        }
        ctx.body = {
            ok: 1,
            msg: 'success'
        }
    } else {
        ctx.body = {
            ok: 0,
            msg: 'error'
        }
    }
})

module.exports = router
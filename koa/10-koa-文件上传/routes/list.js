const Router = require('koa-router')
const router = new Router()

router.post('/', (ctx, next) => {
    ctx.body = {
        ok: 1,
        msg: 'success'
    }
})

router.get('/', (ctx, next) => {
    ctx.body = [111, 222, 33, 444]
})

router.put('/:id', (ctx, next) => {
    console.log(ctx.params)
    ctx.body = {
        ok: 1,
        info: 'put list success'
    }
})

router.del('/:id', (ctx, next) => {
    ctx.body = {
        ok: 1,
        info: 'del list success'
    }
})

module.exports = router
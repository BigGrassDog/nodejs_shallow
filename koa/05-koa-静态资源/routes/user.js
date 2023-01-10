const Router = require('koa-router')
const router = new Router()

router.post('/', (ctx, next) => {
    ctx.body = {
        ok: 1,
        msg: 'add user success'
    }
})

router.get('/', (ctx, next) => {
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

module.exports = router
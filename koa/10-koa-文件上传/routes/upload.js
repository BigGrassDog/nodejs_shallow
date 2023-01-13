const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    await ctx.render('upload',{username:'中森明黄芽菜'})
})

module.exports = router
const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    await ctx.render('home',{username:'中森明黄芽菜'})//自动找 views/home.ejs
})

module.exports = router
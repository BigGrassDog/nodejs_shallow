const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    // 获取 cookie
    // console.log(ctx.cookies.get('name'))

    // ctx.cookies.set('location','akina')
    await ctx.render('home',{username:'中森明黄芽菜'})//自动找 views/home.ejs
})

module.exports = router
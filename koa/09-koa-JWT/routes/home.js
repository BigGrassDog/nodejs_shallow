const Router = require('koa-router')
const router = new Router()

router.get('/', async (ctx, next) => {
    // 获取 cookie
    // console.log(ctx.cookies.get('name'))

    // ctx.cookies.set('location','akina')
    await ctx.render('home', {username: '中森明黄芽菜'})//自动找 views/home.ejs
})

router.get('/list', async (ctx, next) => {
    ctx.body = [
        {_id: 1, username: 'gd', age: 10},
        {_id: 2, username: 'gd', age: 10},
        {_id: 3, username: 'gd', age: 10},
        {_id: 4, username: 'gd', age: 10},
        {_id: 5, username: 'gd', age: 10},
    ]
})

module.exports = router
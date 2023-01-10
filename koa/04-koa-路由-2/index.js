const Koa = require('koa')
const Router = require('koa-router')

const userRouter = require('./routes/user')
const listRouter = require('./routes/list')
const homeRouter = require('./routes/home')

const app = new Koa()
const router = new Router()

// 统一加前缀
// router.prefix('/api')
// 先注册路由级组件
router.use('/user', userRouter.routes(), userRouter.allowedMethods())
router.use('/list', listRouter.routes(), listRouter.allowedMethods())
router.use('/home',homeRouter.routes(),homeRouter.allowedMethods())
// 重定向
router.redirect('/','/home')

// 应用级组件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3004)
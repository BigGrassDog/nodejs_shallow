const Koa = require('koa')
const Router = require('koa-router')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')

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
router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())
// 重定向
router.redirect('/', '/home')

app.use(bodyParser()) // 获取post参数
app.use(static(path.join(__dirname, 'public'))) // 静态资源

// 配置 模板引擎
app.use(views(path.join(__dirname,'views'),{extension:'ejs'}))

// 应用级组件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3004)
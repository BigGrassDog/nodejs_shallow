const Router = require('koa-router')
const router = new Router()

const userRouter = require('./user')
const listRouter = require('./list')
const homeRouter = require('./home')
const loginRouter = require('./login')

// 统一加前缀
// router.prefix('/api')
// 先注册路由级组件
router.use('/user', userRouter.routes(), userRouter.allowedMethods())
router.use('/list', listRouter.routes(), listRouter.allowedMethods())
router.use('/home', homeRouter.routes(), homeRouter.allowedMethods())
router.use('/login', loginRouter.routes(), loginRouter.allowedMethods())

// 重定向
router.redirect('/', '/home')

module.exports = router
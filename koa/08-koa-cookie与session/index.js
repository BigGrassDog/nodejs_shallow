const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const session = require('koa-session-minimal')

const router = require('./routes/index')


const app = new Koa()

app.use(bodyParser()) // 获取post参数
app.use(static(path.join(__dirname, 'public'))) // 静态资源

// 配置 模板引擎
app.use(views(path.join(__dirname,'views'),{extension:'ejs'}))

// session 配置
app.use(session({
    key:'bgdSessionId',
    cookie:{
        maxAge:100*60*60
    }
}))

// session判断拦截
app.use(async (ctx,next)=>{
    if(ctx.url.includes('login')){
        await next()
        return
    }
    if(ctx.session.user){
        ctx.session.date = Date.now()
        await next()
    }else{
        ctx.redirect('/login')
    }
})

// 应用级组件
app.use(router.routes()).use(router.allowedMethods())
app.listen(3004)
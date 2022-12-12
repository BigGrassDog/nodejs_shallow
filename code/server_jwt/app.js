const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

// 引入
const session = require('express-session');
const MongoStore = require('connect-mongo');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// 注册 session 中间件
app.use(session({
    name: 'biggrassdogsystem',
    secret: 'big grass dog',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: false
    },
    resave: true, // 重新设置 session 后，会自动重新计算过期时间
    saveUninitialized: true,
    store: MongoStore.create({
        mongoUrl: 'mongodb://127.0.0.1:27017/biggrassdog_session',// 新创建了一个数据库
        ttl: 100 * 60 * 10 // 过期时间
    })
}))

// 设置中间件，session 过期校验
app.use((req, res, next) => {
    // 排除 login 相关的路由和接口
    if (req.url.includes('login')) {
        next()
        return
    }

    console.log(req.headers['authorization']?.split(" ")[1])
    next()
})

app.use('/', indexRouter);
app.use('/api', usersRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;

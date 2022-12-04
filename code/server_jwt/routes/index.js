const express = require('express');
const router = express.Router();
const JWT = require('../util/JWT')

/* GET home page. */
router.get('/', function (req, res, next) {
    // 判断 req.session.user
    console.log('首页',req)
    // if (req.session.user) {
        res.render('index', {title: 'Express'});
    // } else {
    //     res.redirect('/login')
    // }

});

/**
 * 测试 token 的 加密与验证过程
 */
// const jwt = require('jsonwebtoken')
// const token = jwt.sign({
//     data: 'biggrassdog'
// }, 'anydata', {expiresIn: '10s'})
// console.log('token', token)
//
// const decoded = jwt.verify(token, 'anydata')
// console.log(decoded)
//
// // 过期时间 10 秒，10 秒后再解密一次
// setTimeout(() => {
//     try {
//         const decoded = jwt.verify(token, 'anydata')
//         console.log(decoded)
//     } catch (err) {
//         console.log(err)
//     }
// }, 11000)

const token = JWT.generate({name: 'gd11'}, '10s')
console.log(JWT.verify(token))
setTimeout(() => {
    console.log(JWT.verify(token))
}, 9000)
setTimeout(() => {
    console.log(JWT.verify(token))
}, 11000)

module.exports = router;

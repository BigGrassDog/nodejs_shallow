const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // 判断 cookie 里面有没有 username
    res.render('index', {title: 'Express'});
});

module.exports = router;

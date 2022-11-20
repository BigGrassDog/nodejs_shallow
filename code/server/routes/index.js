const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // 判断 req.session.user
    if (req.session.user) {
        res.render('index', {title: 'Express'});
    } else {
        res.redirect('/login')
    }

});

module.exports = router;

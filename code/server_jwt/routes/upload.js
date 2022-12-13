const express = require('express')
const router = express.Router()

router.get('/',(req,res,next)=>{
    res.render('upload',{})
})

module.exports = router
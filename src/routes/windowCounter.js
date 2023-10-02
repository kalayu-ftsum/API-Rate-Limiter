const router=require('express').Router()

const slidingWindowLogMiddleware = require('../middlewares/slidingWindowLog')

router.use(slidingWindowLogMiddleware)


router.get('/limited',(req,res)=>{
    res.send('Window counter algorithm')
})

module.exports=router
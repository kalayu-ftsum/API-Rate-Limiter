const router=require('express').Router()

const windowCounterMiddleware = require('../middlewares/windowCounter')

router.use(windowCounterMiddleware)


router.get('/limited',(req,res)=>{
    res.send('Window counter algorithm')
})

module.exports=router
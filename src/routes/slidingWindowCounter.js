const router=require('express').Router()
const slidingWindowCounterMiddleware=require('../middlewares/slidingWindowCounter')

router.use(slidingWindowCounterMiddleware)

router.get('/',(req,res)=>{
    res.send('Sliding Window Counter')
})

module.exports=router;
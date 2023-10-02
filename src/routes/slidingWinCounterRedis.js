const router=require('express').Router()

const slidingWinCounterRedisMiddleware=require('../middlewares/slidingWinCounterRedis')

router.use(slidingWinCounterRedisMiddleware)

router.get('/',(req,res,next)=>{
    res.send('Sliding Window Counter using Redis.')
})

module.exports=router
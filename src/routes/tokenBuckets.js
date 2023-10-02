const router=require('express').Router()
const tokenBucketsMiddleware=require('../middlewares/tokenBucket')
router.use(tokenBucketsMiddleware)
router.get('/limited',(req, res) => {
    res.send('Limited, don\'t over use me!')
})


module.exports=router
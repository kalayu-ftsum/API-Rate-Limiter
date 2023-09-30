const router=require('express').Router()

const rateLimiterMiddleware=require('../middlewares/rateLimiterPackage');


router.use(rateLimiterMiddleware);
router.get('/',(req,res)=>{
    res.send('Don\'t overuse me')
});


module.exports=router
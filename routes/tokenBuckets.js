const router=require('express').Router()
const Buckets=require('../utils/buckets')


// Creates token buckets object
const LIMIT=2;
const updateTime=1 // in seconds
let buckets = new Buckets(LIMIT,updateTime)

router.get('/limited',(req, res) => {
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    const bucket=buckets.getBucket(ipAddress)
    if (bucket !== undefined) {
        buckets.refill(ipAddress);
        if(bucket.token <= 1 ){
            return  res.status(429).send('Too Many Requests.')
        }
        buckets.removeToken(ipAddress)
    } else {
       buckets.addBucket(ipAddress)
    }



    res.send('Limited, don\'t over use me!')
})


module.exports=router
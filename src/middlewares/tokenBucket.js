const Buckets=require('../utils/buckets')

// Creates token buckets object
const LIMIT=5;
const updateTime=60 // in seconds
let buckets = new Buckets(LIMIT,updateTime)

module.exports=(req,res,next)=>{
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
    next()
}
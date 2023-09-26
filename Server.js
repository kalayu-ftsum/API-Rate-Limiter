const express = require('express');
const Buckets=require('./utils/buckets')

const app = express();

const PORT = 3000;
app.get('/unlimited', (req, res) => {
    res.send('Unlimited! Let\'s Go!')
})


// Creates token buckets object
const LIMIT=2;
const updateTime=1 // in seconds
let buckets = new Buckets(LIMIT,updateTime)

app.get('/limited', (req, res) => {
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    const bucket=buckets.getBucket(ipAddress)
    if (bucket !== undefined) {
        console.log('exist')
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

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
const express = require('express');

const app = express();

const PORT = 3000;
app.get('/unlimited', (req, res) => {
    res.send('Unlimited! Let\'s Go!')
})

let buckets = {}
const LIMIT=2;
const updateTime=0.01 // in seconds

app.get('/limited', (req, res) => {
    const ipAddress = req.header('x-forwarded-for') || req.socket.remoteAddress;
    
    if (buckets[ipAddress] !== undefined) {
        
        
        console.log('buckets',buckets)

        const token=buckets[ipAddress].token
        const currentTime=new Date()
        const timeDiff=Math.floor((currentTime - buckets[ipAddress].ts)/1000)
        console.log({timeDiff})
        console.log({now:new Date()})
        buckets[ipAddress].token=Math.min((token + timeDiff*updateTime),LIMIT)

        if(buckets[ipAddress].token <= 1 ){
            return  res.status(429).send('Too Many Requests.')
        }
        buckets[ipAddress].token -= 1
        
    } else {
        buckets[ipAddress] ={
            token:LIMIT,
            ts:new Date()
        }
    }



    res.send('Limited, don\'t over use me!')
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
const express = require('express');
const TokenBucketsRoute=require('./routes/tokenBuckets')
const WindowCounter=require('./routes/windowCounter')
const SlidingWindowLog=require('./routes/slidingWindowLog');
const slidingWindowCounter = require('./routes/slidingWindowCounter');

const app = express();

const PORT = 3000;
app.get('/unlimited', (req, res) => {
    res.send('Unlimited! Let\'s Go!')
})

app.use('/tokenbuckets',TokenBucketsRoute )
app.use('/windowCounter',WindowCounter)
app.use('/slidingwindowlog',SlidingWindowLog)
app.use('/slidingwindowcounter',slidingWindowCounter)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
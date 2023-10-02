const express = require('express');
const TokenBucketsRoute=require('./routes/tokenBuckets')
const WindowCounter=require('./routes/windowCounter')
const SlidingWindowLog=require('./routes/slidingWindowLog');
const slidingWindowCounter = require('./routes/slidingWindowCounter');
const slidingWinCounterRedis=require('./routes/slidingWinCounterRedis');
const RateLimiterPackage=require('./routes/rateLimiterPackage');

const app = express();

const PORT = 3000;
app.get('/unlimited', (req, res) => {
    res.send('Unlimited! Let\'s Go!')
})

app.use('/tokenbuckets',TokenBucketsRoute )
app.use('/windowCounter',WindowCounter)
app.use('/slidingwindowlog',SlidingWindowLog)
app.use('/slidingwindowcounter',slidingWindowCounter)
app.use('/slidingWinCounterRedis',slidingWinCounterRedis)
app.use('/rateLimiterPackage',RateLimiterPackage)


// Add this at the end to catch unhandled promises
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // You can add custom handling/logging here
    // For example, you might want to log the error, send an alert, or gracefully shut down the application
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
const express = require('express');

const tokenBucketsRoute=require('./routes/tokenBuckets')
const windowCounter=require('./routes/windowCounter')
const slidingWindowLog=require('./routes/slidingWindowLog');
const slidingWindowCounter = require('./routes/slidingWindowCounter');
const slidingWinCounterRedis=require('./routes/slidingWinCounterRedis');
const rateLimiterPackage=require('./routes/rateLimiterPackage');

const app = express();

const PORT = 3000;
app.get('/unlimited', (req, res) => {
    res.send('Unlimited! Let\'s Go!')
})

app.use('/tokenbuckets',tokenBucketsRoute )
app.use('/windowCounter',windowCounter)
app.use('/slidingwindowlog',slidingWindowLog)
app.use('/slidingwindowcounter',slidingWindowCounter)
app.use('/slidingWinCounterRedis',slidingWinCounterRedis)
app.use('/rateLimiterPackage',rateLimiterPackage)


// Add this at the end to catch unhandled promises
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    // You can add custom handling/logging here
    // For example, you might want to log the error, send an alert, or gracefully shut down the application
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
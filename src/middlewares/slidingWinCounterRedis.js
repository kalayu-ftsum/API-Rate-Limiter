const redisClient = require('../utils/redisConnection')

const windowSize = 60;      // 1-minute window
const maxRequests = 5;     // Maximum requests allowed in the window

module.exports = async (req, res, next) => {
    const currentTime = new Date().getTime(); 

    // Slide the window by removing expired requests
    const requestQueue = await redisClient.lRange('requestTimestamps', 0, -1)
    // let requestQueue=[]
    while (requestQueue.length > 0 &&
        requestQueue[0] <= currentTime - windowSize * 1000) {
        requestQueue.shift();
    }


    // Check if the number of requests is within the limit
    if (requestQueue.length < maxRequests) {
        // Add the current request timestamp to the queue
        await redisClient.lPush('requestTimestamps', `${currentTime}`)
        next();
    } else {
        // Request limit exceeded
        res.status(429).send('Rate limit exceeded');
    }
}
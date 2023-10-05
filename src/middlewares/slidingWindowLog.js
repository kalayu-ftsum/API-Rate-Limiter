
const SlidingWindowLog=require('../utils/slidingWindowLog');



const windowSize= 60;  // 1-minute window
const maxRequests= 5; // Maximum requests allowed in the window
const slidingWindow = new SlidingWindowLog(windowSize,maxRequests)


module.exports = (req, res, next) => {
    try {
      
        let isThresholdReached=slidingWindow.isThresholdReached()
        if (isThresholdReached) {
            next();
        } else {
            res.status(429).send('Rate limit exceeded');
        }
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
}
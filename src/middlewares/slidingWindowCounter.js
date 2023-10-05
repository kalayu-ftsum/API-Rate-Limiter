
const SlidingWindowCounter=require('../utils/slidingWindowCounter');
// Define a sliding window counter object
const windowSize = 60;       // 1-minute window
const maxRequests = 5;       // Maximum requests allowed in the window

const slidingWindowCounter = new SlidingWindowCounter(windowSize, maxRequests)

module.exports = (req, res, next) => {
  try {
   const isThresholdReached=slidingWindowCounter.isThresholdReached()
    // Check if the number of requests is within the limit
    if (!isThresholdReached) {
      next();
    } else {
      res.status(429).send('Rate limit exceeded');
    }
  } catch (error) {
    console.error(error)
    res.status(500).send('Internal server error.')
  }
}
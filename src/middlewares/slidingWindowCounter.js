

// Define a sliding window counter object
const slidingWindowCounter = {
    windowSize: 60,       // 1-minute window
    maxRequests: 5,       // Maximum requests allowed in the window
    windowStart: new Date().getTime(),
    requestQueue: [],
  };
  
  module.exports=(req, res, next) => {
    const currentTime = new Date().getTime();
  
    // Slide the window by removing expired requests
    while (slidingWindowCounter.requestQueue.length > 0 &&
           slidingWindowCounter.requestQueue[0] <= currentTime - slidingWindowCounter.windowSize*1000) {
      slidingWindowCounter.requestQueue.shift();
    }
  
    // Check if the number of requests is within the limit
    if (slidingWindowCounter.requestQueue.length < slidingWindowCounter.maxRequests) {
      // Add the current request timestamp to the queue
      slidingWindowCounter.requestQueue.push(currentTime);
      next(); 
    } else {
      res.status(429).send('Rate limit exceeded');
    }
}
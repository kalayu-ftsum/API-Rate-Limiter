

const slidingWindow = {
    windowSize: 60 ,        // 1-minute window
    maxRequests: 5,       // Maximum requests allowed in the window
    requests: [],
};


module.exports= (req, res, next) => {
    const currentTime = new Date().getTime();

    slidingWindow.requests = slidingWindow.requests.filter((timestamp) => {
        return timestamp + slidingWindow.windowSize *1000 > currentTime;
    });
    if (slidingWindow.requests.length < slidingWindow.maxRequests) {
        slidingWindow.requests.push(currentTime);
        next(); 
    } else {
        res.status(429).send('Rate limit exceeded');
    }
}
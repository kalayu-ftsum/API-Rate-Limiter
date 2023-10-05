class SlidingWindowLog {
    constructor(windowSize, maxRequests) {
        this.windowSize = windowSize;
        this.maxRequests = maxRequests;
        this.requests = []
    }
    addRequest(request) {
        this.requests.push(request)
    }
    isThresholdReached() {
        const currentTime = new Date().getTime();
        this.requests = this.requests.filter((timestamp) => {
            return timestamp + this.windowSize * 1000 > currentTime;
        });
        if (this.requests.length < this.maxRequests) {
            this.addRequest(currentTime);
            return false;
        } else {
            return true;
        }
    }
}

module.exports=SlidingWindowLog
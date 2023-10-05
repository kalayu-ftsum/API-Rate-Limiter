class SlidingWindowCounter{
    constructor(windowSize,maxRequests){
        this.windowSize=windowSize;       
        this.maxRequests=maxRequests;
        this.windowStart=new Date().getTime();
        this.requestQueue=[]
    }

    isThresholdReached(){
        const currentTime = new Date().getTime();
        // Slide the window by removing expired requests
        while (this.requestQueue.length > 0 &&
          this.requestQueue[0] <= currentTime - this.windowSize * 1000) {
          this.requestQueue.shift();
        }
    
        // Check if the number of requests is within the limit
        if (this.requestQueue.length < this.maxRequests) {
          // Add the current request timestamp to the queue
          this.requestQueue.push(currentTime);
          return false;
        }
        else{
            return true;
        }
    }
}


module.exports=SlidingWindowCounter
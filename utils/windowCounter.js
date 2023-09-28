class WindowCounter {
    constructor(threshold, windowSize) {
        this.threshold = threshold
        this.windowSize = windowSize
        this.windowcounter = 0
        this.windowTime = new Date().getTime()
    }
    updateWindow() {
        if (this.getCurrentWindow() == 0) {
            return this.isThresholdReached()
        }
        this.resetCounter()
        this.increaseCounter()
        return false
    }
    getCurrentWindow() {
        let currentTime = new Date().getTime()
        
        return Math.floor((currentTime - this.windowTime) / (this.windowSize * 1000))
    }
    isThresholdReached() {
        if (this.windowcounter < this.threshold) {
            this.increaseCounter()
            return false
        }
        return true
    }
    increaseCounter() {
        this.windowcounter++
    }
    resetCounter() {
        this.windowcounter = 0
        this.windowTime = new Date().getTime()
    }
}

module.exports = WindowCounter
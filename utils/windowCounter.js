class WindowCounter{
    constructor(threshold,windowSize){
        this.threshold=threshold
        this.windowSize=windowSize
        this.windowcounter=0
        this.windowTime=new Date().getTime()
    }
    updateWindow(){
     let currentTime=new Date().getTime()

     let window= Math.floor((currentTime - this.windowTime)/(this.windowSize*1000))
     if(window ==0){
        if( this.windowcounter < this.threshold){
            this.windowcounter+=1
            return false
        }else{
            return true 
        }
     }else{
        this.resetCounter()
        this.windowcounter+=1
        return false
     }
    }
    resetCounter(){
        this.windowcounter=0
        this.windowTime= new Date().getTime()
    }
}

module.exports=WindowCounter
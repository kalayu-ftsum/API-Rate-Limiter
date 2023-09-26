class Buckets{
    buckets={}
    constructor(limit,updateTime){
      this.limit=limit
      this.updateTime=updateTime
    }
    addBucket(bucket){
        const currentTime=new Date().getTime()
        if(this.buckets[bucket]===undefined){
            this.buckets[bucket]={
              token:this.limit,
              ts: currentTime
            }
        }        
    }
    getBucket(bucket){
        return this.buckets[bucket]
    }
    refill(bucket){
        const token=this.buckets[bucket].token
        const currentTime=new Date().getTime()
        const timeDiff=Math.floor((currentTime - this.buckets[bucket].ts)/1000)
        this.buckets[bucket].token=Math.min((token + timeDiff*this.updateTime),this.limit)
        this.buckets[bucket].ts=currentTime
        console.log({buckets:this.buckets})
    }
    removeToken(bucket){
        this.buckets[bucket].token-=1
    }
}


module.exports=Buckets
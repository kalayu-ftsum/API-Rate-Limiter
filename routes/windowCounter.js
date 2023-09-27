const router=require('express').Router()
const WindowCounter=require('../utils/windowCounter')


const threshold=60;
const windowSize=60; // in seconds
const windowCounter=new WindowCounter(threshold,windowSize)

router.get('/limited',(req,res)=>{
    
    const isThresholdReached=windowCounter.updateWindow()
    if(isThresholdReached){
     return res.status(429).send('Threshold reached!')        
    }
    res.send('Window counter algorithm')
})

module.exports=router
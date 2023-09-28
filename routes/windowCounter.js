const router=require('express').Router()
const WindowCounter=require('../utils/windowCounter')


const threshold=60;   // Maximum requests allowed in the window
const windowSize=60; // 1 minute window
const windowCounter=new WindowCounter(threshold,windowSize)

router.get('/limited',(req,res)=>{
    
    const isThresholdReached=windowCounter.updateWindow()
    if(isThresholdReached){
     return res.status(429).send('Threshold reached!')        
    }
    res.send('Window counter algorithm')
})

module.exports=router
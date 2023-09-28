const router=require('express').Router()

router.get('/limited',(req, res) => {
    res.send('Limited, don\'t over use me!')
})


module.exports=router
const express=require('express');

const app=express();

const PORT=3000;
app.get('/unlimited',(req,res)=>{
    res.send('Unlimited! Let\'s Go!')
})

app.get('/limited',(req,res)=>{
    res.send('Limited, don\'t over use me!')
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
});
const express = require('express');
const TokenBucketsRoute=require('./routes/tokenBuckets')

const app = express();

const PORT = 3000;
app.get('/unlimited', (req, res) => {
    res.send('Unlimited! Let\'s Go!')
})

app.use('/tokenbuckets',TokenBucketsRoute )

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
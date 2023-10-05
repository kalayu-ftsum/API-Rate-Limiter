const router = require('express').Router()
const tokenBucketsMiddleware = require('../middlewares/tokenBucket')

router.use(tokenBucketsMiddleware)

router.get('/limited', (req, res) => {
    try {
        res.send('Limited, don\'t over use me!')
    } catch (error) {
        console.error(error)
        res.status(500).send('Internal server error.')
    }
})


module.exports = router